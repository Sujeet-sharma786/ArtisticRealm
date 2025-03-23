import React, { useState } from "react";
import emailjs from "emailjs-com";
// import { toast, ToastContainer } from 'react-toastify';

const ContactUs = () => {
  const [to_name, setTo_name] = useState("");
  const [from_name, setFrom_name] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const submitInfo = async () => {
    console.log(to_name + from_name + message + phone);

    const emailContent = {
      to_name: "sujeet sharma",
      from_name: from_name,
      message: message,
      phone: phone,
    };

    const result = await emailjs.send(
      "service_cwppc19",
      "template_vuho8df",
      emailContent,
      "qyqTvA1JgKgYNrJID"
    );
    if (result) {
      alert("Email sent successfully");
      // toast("Email sent successfully")
    } else {
      console.log("error has occured");
      // toast("something wents wrong")
    }
  };
  return (
    <div className="contact-bg">
      <div className="contactus-container">
        <div className="contactus-container-inner">
          <h1>Contact Us</h1>

          <input
            className="upload-signupBox"
            type="text"
            name="name"
            placeholder="Enter name"
            onChange={(event) => setTo_name(event.target.value)}
          />
          <input
            className="upload-signupBox"
            type="email"
            name="user_email"
            placeholder="Enter email"
            onChange={(event) => setFrom_name(event.target.value)}
          />
          <input
            className="upload-signupBox"
            type="text"
            name="phone"
            placeholder="Enter phone number"
            onChange={(event) => setPhone(event.target.value)}
          />
          <textarea
            cols="20"
            rows="5"
            className="upload-signupBox textarea"
            type="message"
            placeholder="Write from here..."
            onChange={(event) => setMessage(event.target.value)}
          />
          <button onClick={submitInfo} className="btn3" type="button">
            message
          </button>

          {/* <ToastContainer/> */}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
