import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { RiSendPlaneFill } from "react-icons/ri";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_71o2tzi", "template_nl6ezjm", e.target, "Jnd_3FYvf4gC9ECLC")
    .then((result) => {
        console.log("Email sent successfully:", result.text);
        toast.success("Email sent successfully!")
      })
      .catch((error) => {
        console.error("Email could not be sent:", error);
      });

    // Clear the form fields after sending
    e.target.reset();
  };


  return (
    <div id="contact" className="container m-auto mt-16">
      {/* heading */}
      <div 
      // data-aos="fade-up"
       className="relative mb-5">
        <h3 className=" text-3xl font-black text-gray-400 sm:text-2xl">
          Contact
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>

      {/* card*/}
      <div className="card-wrapper w-[90%] sm:w-[100%] mx-auto mt-5 flex items-center justify-center sm:flex-col">
        <div className="left w-[70%] flex-1 flex items-center justify-center sm:flex-col sm:w-full">
          <div className="flex-3 w-1/2 gap-3 flex items-end justify-end  flex-col sm:w-3/4">
            <div 
            data-aos="zoom-in"
            >
              <h1 className="text-5xl font-bold sm:text-3xl">You Need</h1>
              <h3 className="text-xl sm:text-lg">
                Beautiful design for your website leave a request
              </h3>
            </div>
          </div>
          <div className=" flex p-5 items-center justify-center ">
            <button
              
              data-aos="zoom-in"
              
              className= " text-yellow-500 font-extrabold text-3xl p-2 rounded-lg shadow-[0_0_10px_1px_rgba(0,0,0,0.1)] "
            >
              <BsArrowRight className=" md:rotate-90" />
            </button>
          </div>
        </div>
        <div className="right flex-1">
          <form
          onSubmit={sendEmail}
            
            data-aos="zoom-in"
            
            className="flex justify-center items-center flex-col gap-5 w-[70%] md:w-[100%] sm:w-[95%] mx-auto"
            action="mailto:xyz@gmail.com"
          >
            <input
              className="px-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
              type="email"
              placeholder="e.g. example@email.com"
              name="user_email"
            />
            <input
              className="px-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
              type="text"
              placeholder="e.g. Aymen Saidani"
              name="from_name"
            />
            <textarea
              className="px-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
              rows="4"
              cols="50"
              placeholder="Write your message"
              name="message"
              id=""
            />
            <button
              className="bg-yellow-500 w-full text-white font-semibold  p-2 rounded-lg flex items-center justify-center space-x-1"
              type="submit"
            >
              <span>Send</span>
              <RiSendPlaneFill/>
            </button>
          </form>
          <ToastContainer position="bottom-right" autoClose={3000} hideProgressBar={false} />

        </div>
      </div>
    </div>
  );
};

export default Contact;
