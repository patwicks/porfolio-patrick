import React from "react";

const ContactForm = () => {
  return (
    <form className="flex flex-col gap-y-5">
      <p className="font-thin text-primary dark:text-white">
        You can directly email me here.
      </p>
      <div className="flex flex-col">
        <label
          className="pb-1 text-sm text-primary dark:text-white"
          htmlFor="name"
        >
          Name:
        </label>
        <input
          className="form--input"
          type="text"
          name="name"
          id="name"
          required
          autoComplete="off"
        />
      </div>

      {/* sucject */}
      <div className="flex flex-col">
        <label
          className="text-sm text-primary dark:text-white"
          htmlFor="subject"
        >
          Subject:
        </label>{" "}
        <input
          className="form--input"
          type="text"
          name="subject"
          id="subject"
          required
          autoComplete="off"
        />
      </div>
      <div className="flex flex-col">
        <label
          className="pb-1 text-sm text-primary dark:text-white"
          htmlFor="email"
        >
          Email:
        </label>
        <input
          className="form--input"
          type="email"
          name="email"
          id="email"
          required
          autoComplete="off"
        />
      </div>
      <div className="flex flex-col">
        <label
          className="pb-1 text-sm text-primary dark:text-white"
          htmlFor="message"
        >
          Message:
        </label>
        <textarea
          className="form--textarea"
          name="message"
          id="message"
          cols="30"
          rows="10"
        ></textarea>
      </div>

      <button className="form--btn smooth--hover" type="submit">
        submit
      </button>
    </form>
  );
};

export default ContactForm;
