import React from 'react'

const Certefica = () => {
  return (
    <div id="certificate" className="container m-auto mt-16">
    {/* heading */}
    <div 
    // data-aos="fade-up"
     className="relative mb-5">
      <h3 className=" text-3xl font-black text-gray-400 sm:text-2xl">
      Certificate
      </h3>
      <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
    </div>

    {/* card*/}
    <div className="card-wrapper w-[90%] sm:w-full mt-5 flex md:flex-col sm:gap-5 mx-auto ">
        <div className="left flex-1 flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            
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
                  Full Stack JavaScript Developer
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  Rebootkamp (RBK)
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                Mar 2023 - Aug 2023
                </span>
              
                <img src='https://d1zpw5mq5bnzyn.cloudfront.net/images/d26c960ac8ad43b99e2150fd25211a6f.jpeg' />
              </div>
            </div>
            
          </fieldset>
        </div>

        
      </div>
    
  </div>
  )
}

export default Certefica