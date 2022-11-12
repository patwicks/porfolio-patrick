import React from "react";
import ContactForm from "./ContactForm";
import { MdOutlineLocationOn, MdPhoneInTalk } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";

const Contact = () => {
  const contact = {
    email: "it************@gmail.com",
    address: "Apalit Pampanga Philippines",
    contact: "+6392***711",
  };

  return (
    <section
      className="mb-32 h-full min-h-screen w-full flex-col px-5 pt-10 md:px-20 "
      id="contact"
      data-aos="fade-up"
    >
      <h1 className="text-2xl font-semibold text-primary dark:text-white">
        <span className="text-brand">//</span> Contact
      </h1>
      <div className="md:px20 container mt-20 md:mx-auto">
        <h1 className="my-2 text-2xl font-bold capitalize text-primary dark:text-white">
          Let's<span className="text-brand"> work together</span> ?
        </h1>

        <div className="flex flex-col-reverse gap-20 md:flex-row">
          {/* form */}
          <div className="w-full md:w-1/2">
            <ContactForm />
          </div>

          <div className="mt-10 flex w-full flex-col gap-y-5 p-5 md:w-1/2">
            <div className="flex items-center gap-x-3">
              <span className="text-xl text-primary dark:text-brand">
                <AiOutlineMail />
              </span>
              <p className="text-primary dark:text-white">{contact.email}</p>
            </div>
            <div className="flex items-center gap-x-3">
              <span className="text-xl text-primary dark:text-brand">
                <MdOutlineLocationOn />
              </span>
              <p className="text-primary dark:text-white">{contact.address}</p>
            </div>
            <div className="flex items-center gap-x-3">
              <span className="text-xl text-primary dark:text-brand">
                <MdPhoneInTalk />
              </span>
              <p className="text-primary dark:text-white">{contact.contact}</p>
            </div>
          </div>
          {/* details */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
