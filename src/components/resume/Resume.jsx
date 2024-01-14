import React from 'react';

const Resume = () => {
  
  return (
    <div id="resume" className=" container m-auto   mt-16">
      {/* heading */}
      <div data-aos="fade-up" className="relative mb-5">
        <h3 className=" text-3xl font-black text-gray-400 sm:text-2xl">
          Resume
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>
      <div data-aos="fade-up" className="left flex-1 w-full">
        <p className=" text-gray-700 font-medium w-[100%]">
          Here are my experiences and qualifications.
        </p>
      </div>
      {/* card*/}
      <div className="card-wrapper w-[90%] sm:w-full mt-5 flex md:flex-col sm:gap-5 mx-auto ">
        <div className="left flex-1 flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-yellow-500">
              Experience
            </legend>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-105px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                <div className="line w-[140px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
              </div>
              {/* design */}
              
              <div className=" flex flex-col gap-1 sm:gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                Cafe Restaurant Management desktop application (VB.NET)
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                Elite training center
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  April 2022 -Jun 2022
                </span>
                Tasks :
                <p className=" text-[.9rem] text-justify break-words text-gray-500">
                a desktop IT project which will allow transparency in management
within the restaurant thanks to the implementation of a computerized system in front of
support data entry and printing of small and medium needs
companies in the catering trade sectors such as: food management
shift planning, inventory management, customer management and customer management
orders, purchasing management and sales management.
                </p>
              </div>
            </div>
            <div className=" relative " style={{margin:"10px auto"}}>
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
              </div>
              {/* design */}
              
              <div className=" flex flex-col gap-1 sm:gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  THESIS Project - WAMIA SERVICE Mobile Apllication using (react
                  native)
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  Rebootkamp (RBK)
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  Jul 2023 -Aug 2023
                </span>
                Tasks :
                <p className=" text-[.9rem] text-justify break-words text-gray-500">
                  -React Native: Proficient in integrating cloudinary for
                  seamless access to the device's camera and gallery, enabling
                  efficient media uploads and retrieval.
                  <br />
                  -Location Services: Demonstrated ability to implement location
                  functionality, utilizing the device's GPS capabilities to
                  retrieve latitude and longitude coordinates for a given place
                  or city, and skillfully displaying this data on interactive
                  maps.
                  <br />
                  -Authentication: Proficient in securing applications with JWT
                  (JSON Web Tokens), ensuring robust user authentication and
                  authorization. Accomplished in creating a seamless user
                  experience for sign-up and login processes.
                  <br /> -Email Verification: Proficient in incorporating email
                  verification mechanisms, including code activation through
                  SendGrid enhancing application security and user trust.
                  <br /> -Payment Integration: Experienced in integrating Stripe
                  for payment processing, enabling secure and convenient in-app
                  purchases
                </p>
              </div>
            </div>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 sm:gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  Project -E-commerce Web Site using (next.js)
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  Rebootkamp (RBK)
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  Jun 2023
                </span>
                Tasks :
                <p className=" text-[.9rem] text-justify break-words text-gray-500">
                -Create database schema and enable CRUD operations.
                <br/>
                  -Seller Management: Successfully designed and implemented a
                  comprehensive seller management system, allowing each seller
                  to have their own profile. Developed features enabling sellers
                  to add products utilizing the Cloudinary platform, update
                  product details, and delete products as needed.

                  <br />
                  -Product Filtering: Created advanced product filtering
                  functionality, allowing users to filter products by price
                  range and product name, enhancing the overall user experience
                  and making it easier for customers to find what they need.
                  <br /> -Payment Integration: Seamlessly integrated the FLOUCI
                  payment method into the application, enabling secure and
                  efficient payment processing for users, contributing to a
                  seamless and secure e-commerce experience.

                </p>
              </div>
            </div>
          </fieldset>
        </div>

        
      </div>

      <div className="card-wrapper w-[90%] sm:w-full mt-5 flex md:flex-col sm:gap-5 mx-auto ">
        <div className="left flex-1 flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-yellow-500">
              Education
            </legend>
            <div className=" relative "style={{margin:"10px auto"}}>
              {/* design */}
              <div className="design flex absolute left-[-140px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                <div className="line w-[200px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 sm:gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                IT management
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                Elite training center
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                Aug 2020 - Jun 2022
                </span>
               
                <p className=" text-[.9rem] text-justify break-words text-gray-500">
                Master basic computer concepts
                   <br /> Design databases.
                   <br /> Participate in the creation of a new local application.
                   <br /> Adopt existing software.
                   <br /> Update an existing system.
                   <br /> Manage and administer simple local networks.
                   <br /> Manage and maintain a company's computer equipment.
                   <br /> Help solve a computer problem.
                  
                </p>
              </div>
            </div>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-100px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                <div className="line w-[120px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 sm:gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                Web development
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  Rebootkamp (RBK)
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                Mar 2023 - Aug 2023
                </span>
                
                <p className=" text-[.9rem] text-justify break-words text-gray-500">
                As an undergraduate student, I have a good understanding of
                   web development technologies such as HTML, CSS, Bootstrap,
                   Tailwind CSS, Material UI,JavaScript, TypeScript, Firebase, ReactJS,
                   React Native and NextJS. Additionally, I'm proficient in
                   backend technologies such as Node.js, Express.js, Mysql and
                   MongoDB. I also have skills in C++ and problem-solving using
                   Data structures and Algorithms.
                </p>
              </div>
            </div>
          </fieldset>
        </div>

        
      </div>


    </div>
  );
};

export default Resume;


