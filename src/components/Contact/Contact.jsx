import React, { useEffect, useState } from "react";
import "./Contact.css";
import { CiLocationOn, CiPhone, CiMail } from "react-icons/ci";
import { useInView } from "react-intersection-observer";
import { useLocation } from "react-router-dom";

const Contact = () => {
  // useLocation to Detect Route Change
  const location = useLocation();

  // useState for Heading Transition
  const [textShown, setTextShown] = useState(false);

  // useState for Section Visibility for Transition Effect
  const [contactVisibility, setContactVisibility] = useState(false);

  // Using Intersection Observer for Transition Effect for Contact Section
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // useEffect to Run Transition When State Changes
  useEffect(() => {
    setContactVisibility(inView);
  }, [inView]);

  // useEffect to Run Transition on Headings When Location Changes
  useEffect(() => {
    let timer;
    location.pathname === "/Contact"
      ? (timer = setTimeout(() => {
          setTextShown(true);
        }, 50))
      : setTextShown(false);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      <section className="contact-section bg-[#ECF3F1] pt-32 pb-4">
        <div className="fixed-container">
          {/* Contact Heading */}
          <div className="contact-heading text-center capitalize">
            <h2
              className={`text-[50px] font-medium leading-[60px] mb-6 transition-all duration-1000 ease-in-out ${
                textShown
                  ? "translate-y-0  scale-105"
                  : "translate-y-8  scale-90"
              }`}
            >
              Get in Touch with Me!
            </h2>
          </div>

          {/* Contact Details */}
          <div
            ref={ref}
            className={`contact-details grid grid-cols-[1fr_2fr] gap-8 bg-white p-10 rounded-3xl ${
              contactVisibility ? "section-transform" : ""
            }`}
          >
            <div className="contact-me border border-[#E4E4E5] p-10 rounded-xl">
              <ul>
                <li className="pb-12">
                  <div className="contact-icon text-xl text-[#448C74] font-medium py-1">
                    <CiLocationOn />
                  </div>
                  <h2 className="font-medium py-1">Our Office:</h2>
                  <h3 className="py-1">4301 Ashmor Drive Wadena, MN 56482</h3>
                </li>
                <li className="pb-12">
                  <div className="contact-icon text-xl text-[#448C74] font-medium py-1">
                    <CiPhone />
                  </div>
                  <h2 className="font-medium py-1">Contact Number:</h2>
                  <h3 className="py-1">+1 218-252-2861</h3>
                </li>
                <li className="pb-2">
                  <div className="contact-icon text-xl text-[#448C74] font-medium py-1">
                    <CiMail />
                  </div>
                  <h2 className="font-medium py-1">Email Us:</h2>
                  <h3 className="py-1">alex.carter@gmail.com</h3>
                </li>
              </ul>
            </div>

            {/* Contact Form */}
            <div className="contact-form border border-[#E4E4E5] p-8 rounded-xl">
              <form
                action="#"
                className="contact-form-data flex flex-col gap-8"
              >
                <div className="name-email grid grid-cols-2 gap-6">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Steve John"
                    className="bg-[#F9F9F9] py-4 px-5 rounded-2xl border border-[#77777d33] outline-none text-base focus:border-[#444]"
                  />

                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="stevejohn11@gmail.com"
                    className="bg-[#F9F9F9] py-4 px-5 rounded-2xl border border-[#77777d33] outline-none text-base focus:border-[#444]"
                  />
                </div>

                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Your Subject"
                  className="bg-[#F9F9F9] py-4 px-5 rounded-2xl border border-[#77777d33] outline-none text-base focus:border-[#444]"
                />

                <textarea
                  name="message"
                  id="message"
                  placeholder="Write Your Message"
                  rows={4}
                  className="bg-[#F9F9F9] p-5 rounded-2xl border border-[#77777d33] outline-none resize-none text-base focus:border-[#444]"
                ></textarea>

                <button
                  type="submit"
                  className="message-btn bg-[#448c74] text-white font-medium flex items-center justify-center gap-3 px-6 py-3 border rounded-2xl hover:bg-black"
                >
                  <span>Send Me Message</span>
                  <span className="contact-icon text-xl text-white font-medium">
                    <CiMail />
                  </span>
                </button>
              </form>
              {/* <p className={`success-msg hidden my-3 text-[#444] border border-[#01B500] rounded text-center ${messageStatus ? "block" : ""}`}>
                We have received your mail, We will get back to you soon!
              </p>
              <p className="error-msg hidden my-3 text-[#444] border border-[#ff0000] rounded text-center">
                Sorry, Message could not send! Please try again.
              </p> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
