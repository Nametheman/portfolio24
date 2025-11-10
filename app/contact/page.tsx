"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Formik, Form, ErrorMessage, FormikHelpers } from "formik";
import * as yup from "yup";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

const info = [
  { icon: <FaPhoneAlt />, title: "Phone", description: "(+234) 706 614 0323" },
  { icon: <FaEnvelope />, title: "Email", description: "owoemma59@gmail.com" },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Lagos, Nigeria",
  },
];

type TFormField = {
  fullName: string;
  email: string;
  phone?: string;
  service: string;
  message: string;
};

const initialValue: TFormField = {
  fullName: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

const formSchema: yup.ObjectSchema<TFormField> = yup.object().shape({
  fullName: yup.string().required("Kindly enter your name"),
  email: yup
    .string()
    .email("Must be a valid email")
    .required("Email is required"),
  phone: yup.string().optional(),
  service: yup.string().required("Please select a service"),
  message: yup
    .string()
    .min(10, "Message must be at least 10 characters")
    .required("Please enter a message"),
});

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [sendingMessage, setSendingMessage] = useState(false);

  const handleFormSubmit = (
    values: TFormField,
    { resetForm }: FormikHelpers<TFormField>
  ) => {
    setSendingMessage(true);
    console.log("Form Submitted: ", values);

    console.log(Object.fromEntries(new FormData(form.current!)));

    emailjs
      .sendForm(
        "my_portfolio_service",
        "template_m3gmbec",
        form.current as HTMLFormElement,
        {
          publicKey: "cDd6JvoNoNSWwVz-M",
        }
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
          console.log("SUCCESS!");
          resetForm();
        },
        (error) => {
          toast.error("Error sending message!");

          console.log("FAILED...", error.text);
        }
      )
      .finally(() => {
        setSendingMessage(false);
      });
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:w-[54%] order-2 xl:order-none">
            <Formik
              initialValues={initialValue}
              onSubmit={handleFormSubmit}
              validationSchema={formSchema}
              validateOnBlur
            >
              {({ values, errors, handleChange, setFieldValue }) => {
                return (
                  <Form
                    className="flex flex-col gap-6 p-6 md:p-10 bg-[#27272c] rounded-xl"
                    ref={form}
                  >
                    <h3 className="text-4xl text-accent">
                      Let&apos;s work together
                    </h3>
                    <p className="text-white/60">
                      Tell me a bit about your project, timeline, and goals —
                      I&apos;ll follow up quickly with ideas on how we can bring
                      it to life.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-1">
                        <Input
                          type="text"
                          id="fullName"
                          name="fullName"
                          value={values.fullName}
                          onChange={handleChange}
                          placeholder="Full name"
                        />
                        <ErrorMessage
                          name="fullName"
                          component="p"
                          className="text-sm text-red-400"
                        />
                      </div>

                      <div className="flex flex-col gap-1">
                        <Input
                          type="email"
                          id="email"
                          name="email"
                          value={values.email}
                          onChange={handleChange}
                          placeholder="Email address"
                        />
                        <ErrorMessage
                          name="email"
                          component="p"
                          className="text-sm text-red-400"
                        />
                      </div>

                      <div className="flex flex-col gap-1">
                        <Input
                          type="text"
                          id="phone"
                          name="phone"
                          value={values.phone}
                          onChange={handleChange}
                          placeholder="Phone number"
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        <Select
                          value={values.service}
                          onValueChange={(value) =>
                            setFieldValue("service", value)
                          }
                        >
                          <SelectTrigger
                            className="w-full"
                            id="service"
                            name="service"
                          >
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Select a service</SelectLabel>
                              <SelectItem value="Web Development">
                                Web Development
                              </SelectItem>
                              <SelectItem value="Mobile Development">
                                Mobile Development
                              </SelectItem>
                              <SelectItem value="Technical/Content Writing">
                                Technical/Content Writings
                              </SelectItem>
                              <SelectItem value="SEO Optimization">
                                SEO Optimization
                              </SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                        <ErrorMessage
                          name="service"
                          component="p"
                          className="text-sm text-red-400"
                        />
                      </div>

                      {/* Hidden input so EmailJS captures the selected service value */}
                      <input
                        type="hidden"
                        name="service"
                        id="service"
                        value={values.service}
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <Textarea
                        className="h-[200px]"
                        placeholder="Type your message here"
                        id="message"
                        name="message"
                        value={values.message}
                        onChange={handleChange}
                      />
                      <ErrorMessage
                        name="message"
                        component="p"
                        className="text-sm text-red-400"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="default"
                      className="max-w-40 rounded-full"
                      loading={sendingMessage}
                    >
                      Send message
                    </Button>
                  </Form>
                );
              }}
            </Formik>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
