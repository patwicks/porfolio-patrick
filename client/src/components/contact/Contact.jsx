import React from "react";
import ContactForm from "./ContactForm";
import { MdOutlineLocationOn, MdPhoneInTalk } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";

const Contact = () => {
  const contact = {
    email: "it.patrickjohngsantillan@gmail.com",
    address: "Apalit Pampanga Philippines",
    contact: "+6392023711",
  };

  return (
    <div
      className="mb-32 h-full min-h-screen w-full flex-col px-5 pt-10 md:px-20"
      id="contact"
    >
      <h1 className="text-2xl font-semibold text-primary dark:text-white">
        <span className="text-brand">//</span> Contact
      </h1>
      <div className="md:px20 container mt-20 md:mx-auto">
        <h1 className="my-2 text-4xl font-bold capitalize text-primary dark:text-white">
          Let's<span className="text-brand"> work together</span> ?
        </h1>
        <p className="py-2 text-sm font-thin text-primary dark:text-white">
          You can directly email me here.
        </p>
        <div className="flex flex-col gap-20 md:flex-row">
          {/* form */}
          <div className="w-full md:w-1/2">
            <ContactForm />
          </div>

          <div className="flex w-full flex-col gap-y-5 md:w-1/2">
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
    </div>
  );
};

export default Contact;
