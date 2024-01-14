import React, { useState } from "react";
import styled from "styled-components";
import { data } from "../data/data";
import { AiOutlineGithub , AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import Dialog from '@mui/material/Dialog';
import DialogContentText from '@mui/material/DialogContentText';
const WorkCard = () => {
  const [open, setOpen] = React.useState(false);
  const [selectedData, setSelectedData] = useState(null);

  const handleClickOpen = (data) => {
    if (data.link) {
      window.open(data.link, '_blank');
    } else {
      setOpen(true);
      setSelectedData(data);
    }
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedData(null);
  };
  const reversedData = [...data];

  return (
    <>
      {reversedData.map((item) => {
        return (
          <div
            data-aos="zoom-in"
            key={item.id}
            className="flex flex-col justify-center items-center gap-4"
          >
            <POPUP className="img-content relative">
              <div className="h-[280px] w-[380px] hover:scale-125 transition duration-500 cursor-pointer shadow-xl rounded-md overflow-hidden sm:h-[260px] sm:w-[92%] sm:bg-cover mx-auto ">
                <img
                  src={item.img}
                  alt={item.title}
                  className=" object-fit w-full h-full hover:scale-125 transition duration-500 cursor-pointer"
                />
              </div>

              <PopupContent className="popup w-full  h-[280px] shadow-xl rounded-md overflow-hidden sm:h-[260px] sm:w-[92%] p-4">
                <p className="text-gray-900 text-base leading-[1.4] text-justify w-[90%]">
                  {item.desc}
                </p>
                <div className="flex items-center justify-center gap-4">
                  <Link
                    to={item.git}
                    target="_blank"
                    className="mt-3 rounded-md shadow-md p-1 px-2 flex gap-2 items-center justify-center font-medium"
                  >
                    <AiOutlineGithub className="text-black bg-white rounded-full border  w-[35px] h-[35px] p-2" />
                    <p className="text-black">Code</p>
                  </Link>

                  
                  <button
                onClick={() => handleClickOpen(item)}
                // to={data.git}
                    target="_blank"
                    className="mt-3 rounded-md shadow-md p-1 px-2 flex gap-2 items-center justify-center font-medium"
                  >
                  <AiOutlineEye  className="text-black bg-white rounded-full border  w-[35px] h-[35px] p-2" />
                  <p className="text-black">View</p>
                  </button>
        
                </div>
              </PopupContent>
            </POPUP>
            <p className="text-gray-800 text-xl font-medium sm:text-lg">
              {item.title}
            </p>
          </div>
        );
      })}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {selectedData && (
          <>
            <DialogContentText id="alert-dialog-description">
              {selectedData.title}
            </DialogContentText>
            {selectedData.video && (
              <video controls width="100%" height="auto">
                <source src={selectedData.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
            {selectedData.link && (
              <a href={selectedData.link} target="_blank" rel="noopener noreferrer">
              {selectedData.link}
            </a>
            )}
          </>
        )}
      </Dialog>
    </>
  );
};

export default WorkCard;
const POPUP = styled.div`
  position: relative;
  img {
    &:hover {
      transform: scaleX(2);
    }
  }
`;

const PopupContent = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0;
  margin: auto;
  transition: 0.5s ease;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .icon {
    color: #fff !important;
  }

  ${POPUP}:hover & {
    opacity: 1;
    color: #fff;
  }
`;