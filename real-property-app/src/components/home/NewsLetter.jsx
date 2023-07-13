import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const NewsLetter = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bx00ly5",
        "template_yg3507k",
        form.current,
        "PtY5EVWBbw0rIAoi0"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section className="bg-primary text-light p-5">
      <div className="container">
        <div className="d-md-flex justify-content-between align-items-center">
          <div>
            <h3>Sign Up For Listings Notification</h3>
            <p className="lead">
              Join our newsletter to get updates for new listings
            </p>
          </div>
          <form
            className="d-flex w-50 align-items-start"
            onSubmit={sendEmail}
            ref={form}
          >
            <input
              type="email"
              name="user_email"
              style={{ width: "85%" }}
              className="form-control"
              placeholder="Enter Email"
            />
            <button
              type="submit"
              style={{ width: "15%" }}
              className="btn btn-dark btn-md"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
