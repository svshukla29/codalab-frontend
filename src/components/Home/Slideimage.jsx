import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const images = [
  {
    url: "https://i.ibb.co/vmRJJH5/Whats-App-Image-2024-07-23-at-17-35-59.jpg ",
  },
  {
    url: "https://i.ibb.co/Bt0mrTs/Whats-App-Image-2024-07-23-at-17-38-47.jpg ",
  },
  {
    url: "https://i.ibb.co/68Gssk3/Whats-App-Image-2024-07-23-at-17-37-32.jpg ",
  },
  {
    url: "https://i.ibb.co/Bt0mrTs/Whats-App-Image-2024-07-23-at-17-38-47.jpg ",
  },
  {
    url: "https://i.ibb.co/DzN0VHC/Whats-App-Image-2024-07-23-at-17-38-47-2.jpg ",
  },
];

const Images = () => {
  return (
    <div className="slide-container">
      <Fade autoplay duration={3000}>
        {images.map((image, index) => (
          <div key={index} className="each-fade">
            <div className="image-container">
              <img src={image.url} alt="" loading="lazy" />
            </div>
          </div>
        ))}
      </Fade>
      <style>
        {`
          .slide-container {
            width: 67vw;
            position: relative;
            padding:1%
          }

          .each-fade {
            width: 100%;
            height: 100%;
          }

          .image-container {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .image-container img {
            width: 65vw;
            height: 300px;
            object-fit: fill;
            border-radius: 2%;P
          }
        `}
      </style>
    </div>
  );
};

export default Images;