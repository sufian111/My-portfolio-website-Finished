import React from "react";
import { BiArrowFromBottom } from "react-icons/bi";
import { Link } from "react-router-dom";

const LastPart = () => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="mt-5 p-5" style={{ textAlign: "center" }}>
      <div>
        <p className="text-blue">What's Next?</p>
        <h1>Get In Touch</h1>
        <p>
          I'd Love to hear from you . Whether you have a question or just want
          to say hi, fell free to drop a <br /> message. I'll try my best to get
          back to you!
        </p>
        <Link to="/contact">
          <button className="btn btn-outline-success btn-lg mt-4">
            Say Hello
          </button>
        </Link>
        <p className="mt-5">
          Designed & Built by <span className="text-blue"> Md. Abu Sufian</span>
        </p>
        <BiArrowFromBottom onClick={scrollTop} style={{ fontSize: "32px" }} />
      </div>
    </div>
  );
};

export default LastPart;
