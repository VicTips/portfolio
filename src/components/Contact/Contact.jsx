import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_974u6zp",
        "template_ua1vn4i",
        form.current,
        "yzABc7McEglpmtGXd"
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
    <div className="text-secondary py-5" style={{ width: "25rem" }}>
      <form ref={form} onSubmit={sendEmail}>
        <div className="mb-2">
          <label className="form-label">Name</label>
          <input
            type="text"
            name="user_name"
            className="form-control"
            placeholder="Jane Doe"
          />
        </div>
        <div className="mb-2">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="user_email"
            className="form-control"
            placeholder="jane@example.com"
          />
        </div>
        <div className="mb-2">
          <label className="form-label">Message</label>
          <textarea name="message" className="form-control" />
        </div>
        <input type="submit" value="Send" className="btn btn-light" />
      </form>
    </div>
  );
};

export default Contact;
