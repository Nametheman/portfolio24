import React, { useRef } from "react";
import * as yup from "yup";
import { Formik, Form, ErrorMessage } from "formik";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { TbBrandTelegram } from "react-icons/tb";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import Socials from "./Socials";
import ContactPhone from "@/assets/images/contactPhone.svg";
import ContactMail from "@/assets/images/contactMail.svg";
import ContactVector from "@/assets/images/contactVector.svg";
import Image from "next/image";

type TFormField = {
  fullName: string;
  email: string;
  message: string;
};

const initialValue: TFormField = {
  fullName: "",
  email: "",
  message: "",
};

const formSchema = yup.object().shape({
  fullName: yup.string().required("Kindly enter your name"),
  email: yup
    .string()
    .email("Must be a valid email")
    .required("Email is required"),
  message: yup
    .string()
    .min(10, "Message must be at least 10 characters")
    .required("Please enter a message"),
});

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const handleFormSubmit = (values: TFormField) => {
    console.log("Form Submitted: ", values);

    emailjs
      .sendForm(
        "portfolio2",
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
        },
        (error) => {
          toast.error("Error sending message!");

          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="px-8 py-[3.5rem] mb-20 relative">
      <h2 className="text-3xl text-center font-bold">Contact Me</h2>
      <p className="text-light text-center font-light text-xs">
        Think we can work together? Let&apos;s talk!{" "}
      </p>
      <div className="mt-8 lg:mt-14 lg:flex lg:gap-[6rem]">
        <div className="flex-1">
          <blockquote className="italic">
            Your business is built on dreams, but growth requires action. Let
            your website be the foundation for success. Together, we can create
            something that transforms those dreams into reality. Reach out today
            and let&apos;s build your digital future!
          </blockquote>
          <div className="mt-4 lg:mt-8 space-y-4">
            <div className="flex items-center gap-4">
              <Image
                src={ContactMail}
                alt="mail"
                className="grayscale w-[40px]"
              />
              <p className="font-bold">owoemma59@gmail.com</p>
            </div>
            <div className="flex items-center gap-4">
              <Image
                src={ContactPhone}
                alt="mail"
                className="grayscale w-[40px]"
              />
              <div>
                <p className="font-bold">+2347066140323</p>
                <p className="font-bold">+2348138469203</p>
              </div>
            </div>
            <Image
              src={ContactVector}
              alt="mail"
              className="grayscale hidden lg:block"
            />
          </div>
        </div>
        <div className="flex-1">
          <p></p>
          <Formik
            initialValues={initialValue}
            onSubmit={handleFormSubmit}
            validationSchema={formSchema}
            validateOnBlur
          >
            {({ values, errors, handleChange }) => {
              return (
                <Form className="mt-[5rem] lg:mt-0 space-y-4" ref={form}>
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Your Full Name</Label>
                    <Input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={values.fullName}
                      onChange={handleChange}
                    />
                    <ErrorMessage
                      name="fullName"
                      component="p"
                      className="text-red-500 text-xs"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Your Email</Label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                    />
                    <ErrorMessage
                      name="email"
                      component="p"
                      className="text-red-500 text-xs"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Your Message</Label>
                    <Textarea
                      id="message"
                      value={values.message}
                      name="message"
                      onChange={handleChange}
                      className="resize-none h-[250px]"
                    />
                    <motion.span
                      initial={{ opacity: 0, y: -20 }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.5 },
                      }}
                    >
                      <ErrorMessage
                        name="message"
                        component="p"
                        className="text-red-500 text-xs"
                      />
                    </motion.span>
                  </div>
                  <Button className="w-full h-[45px] flex items-center gap-3">
                    Send Message{" "}
                    <TbBrandTelegram size={22} className="animate-bounce" />
                  </Button>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
      <Socials className="flex-row mt-[4rem] lg:mt-[8rem] justify-center opacity-50" />

      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            backgroundColor: "#fff",
            border: "1px solid #000",
          },
        }}
      />
    </div>
  );
};

export default Contact;
