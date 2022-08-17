import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const YOUR_SERVICE_ID = process.env.REACT_APP_YOUR_SERVICE_ID;
  const YOUR_TEMPLATE_ID = process.env.REACT_APP_YOUR_TEMPLATE_ID;
  const YOUR_PUBLIC_KEY = process.env.REACT_APP_YOUR_PUBLIC_KEY;
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        YOUR_SERVICE_ID,
        YOUR_TEMPLATE_ID,
        form.current,
        YOUR_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Msg sent"); //Agregar un toast
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="text-secondary py-4" style={{ width: "30rem" }}>
      <div className="fs-1 fw-bold mb-3">Contact me</div>
      <form ref={form} onSubmit={sendEmail}>
        <div className="mb-2 d-flex gap-2">
          <input
            type="text"
            name="user_name"
            className="form-control bg-dark text-light"
            placeholder="Name"
          />
          <input
            type="email"
            name="user_email"
            className="form-control bg-dark text-light"
            placeholder="Email"
          />
        </div>
        <div className="mb-2">
          <textarea
            name="message"
            className="form-control bg-dark text-light"
            placeholder="Message"
            rows={4}
          />
        </div>
        <div className="mt-3 d-flex justify-content-end">
          <input type="submit" value="Send" className="btn btn-light" />
        </div>
      </form>
    </div>
  );
};

export default Contact;
