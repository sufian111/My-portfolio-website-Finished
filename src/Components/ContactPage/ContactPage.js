import React from "react";
import "./ContactPage.css";
const ContactPage = () => {
  return (
    <div className="contact-page container">
      <div className="row align-items-center p-5 mt-5">
        <div className="col-md-6">
          <p style={{ color: "rgb(187, 190, 195)", lineHeight: "2" }}>
            I am interested in working with any company that thinks my skill
            will be helpful for them. If you are looking for someone like me,
            please let me know. Or you can just 'say hi' to me.
          </p>
          <a
            target="_blank"
            href="https://drive.google.com/file/d/1YSAM6WRbnb0CBgehKeBYMQvJLycwSQuK/view"
          >
            <button class="btn btn-outline-success p-3">Resume</button>
          </a>
        </div>
        <div className="col-md-6 mt-2">
          <div className="contact-details">
            <ul>
              <li>
                <h5>
                  <strong>Email</strong>
                </h5>
                <p>
                  mdaabusufian069@gmail.com <span>(Recommended)</span>
                </p>
              </li>
              <li>
                <h5>LinkedIn</h5>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/sufian111/"
                >
                  sufian111 <span>(Always Available)</span>
                </a>
              </li>
              <li>
                <h5>Social</h5>
                <a target="_blank" href="https://web.facebook.com/he.can.77/">
                  Facebook/Twitter - @he.can.77 <span>(Always Available)</span>
                </a>
              </li>
              <li>
                <h5>Address</h5>
                <p>Nageswari, kurigram, Bangladesh - 5600</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="p-2">
        <p className="p-5 text-center">
          Designed & Built by <span className="text-blue"> Md. Abu Sufian</span>
        </p>
      </div>
    </div>
  );
};

export default ContactPage;
