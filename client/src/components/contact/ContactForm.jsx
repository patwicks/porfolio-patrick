import React, { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";

const ContactForm = () => {
  // const [error, setError] = useState(null);
  // const [sucess, setSuccess] = useState(null);

  const validation = Yup.object().shape({
    name: Yup.string().min(3, "name is too short").required(),
    subject: Yup.string().min(3, "subject is too short").required(),
    email: Yup.string().email().required(),
    message: Yup.string().min(10, "message is too short").required(),
  });

  const onSubmit = (values, actions) => {
    console.log(values);
    setTimeout(() => {
      actions.setSubmitting(false);
      actions.resetForm();
    }, 5000);
  };

  const {
    values,
    errors,
    touched,
    handleBlur,
    isSubmitting,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: { name: "", subject: "", email: "", message: "" },
    validationSchema: validation,
    onSubmit,
  });

  return (
    <form className="flex flex-col gap-y-5" onSubmit={handleSubmit}>
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
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          required
          autoComplete="off"
        />
      </div>
      {errors.name && touched.name && (
        <p className="text-[0.8rem] text-red-500">{errors.name}</p>
      )}

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
          value={values.subject}
          onChange={handleChange}
          onBlur={handleBlur}
          required
          autoComplete="off"
        />
      </div>
      {errors.subject && touched.subject && (
        <p className="text-[0.8rem] text-red-500">{errors.subject}</p>
      )}
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
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          required
          autoComplete="off"
        />
      </div>
      {errors.email && touched.email && (
        <p className="text-[0.8rem] text-red-500">{errors.email}</p>
      )}
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
          value={values.message}
          onChange={handleChange}
          onBlur={handleBlur}
        ></textarea>
      </div>
      {errors.message && touched.message && (
        <p className="text-[0.8rem] text-red-500">{errors.message}</p>
      )}
      <button
        className="form--btn smooth--hover"
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? "..." : "submit"}
      </button>
    </form>
  );
};

export default ContactForm;
