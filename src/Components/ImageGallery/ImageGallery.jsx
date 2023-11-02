import React, { useState } from "react";
import Header from "../Header/Header";
import MainBody from "../MainBody/MainBody";
import Image1 from "../../assets/image-1.webp";
import Image2 from "../../assets/image-2.webp";
import Image3 from "../../assets/image-3.webp";
import Image4 from "../../assets/image-4.webp";
import Image5 from "../../assets/image-5.webp";
import Image6 from "../../assets/image-6.webp";
import Image7 from "../../assets/image-7.webp";
import Image8 from "../../assets/image-8.webp";
import Image9 from "../../assets/image-9.webp";
import Image10 from "../../assets/image-10.jpeg";
import Image11 from "../../assets/image-11.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";
const ImageGallery = () => {
  // Aos npm package
  AOS.init({
    offset: 200,
    duration: 600,
    easing: "ease-in-sine",
    delay: 100,
  });
  // states area start
  const [items, setItems] = useState([]);
  const [isAllChecked, setIsAllChecked] = useState(false);
  const [pictures, setPictures] = useState([
    { id: 1, pic: Image1 },
    { id: 2, pic: Image2 },
    { id: 3, pic: Image3 },
    { id: 4, pic: Image4 },
    { id: 5, pic: Image5 },
    { id: 6, pic: Image6 },
    { id: 7, pic: Image7 },
    { id: 8, pic: Image8 },
    { id: 9, pic: Image9 },
    { id: 10, pic: Image10 },
    { id: 11, pic: Image11 },
  ]);
  // states area end

  return (
    <>
      <div
        id="image-box"
        className="bg-white pb-7  max-w-6xl mx-auto mt-2 rounded-lg"
      >
        {/* Header start */}
        <Header
          isAllChecked={isAllChecked}
          setIsAllChecked={setIsAllChecked}
          setItems={setItems}
          setPictures={setPictures}
          pictures={pictures}
          items={items}
        />
        {/* Header End */}

        {/* Main images Body area start */}

        {/* condition added if pictures not available */}
        {pictures.length === 0 ? (
          <div className="h-[490px]  flex justify-center items-center">
            <div>
              <img
                src="https://i.ibb.co/XSTdfLD/no-image-icon-23494.png"
                className="w-full"
              />
            </div>
          </div>
        ) : (
          // sent all pictures items etc to MainBody Component by props drilling 
          <MainBody
            isAllChecked={isAllChecked}
            items={items}
            pictures={pictures}
            setPictures={setPictures}
            setItems={setItems}
          />
        )}
        {/* Main images Body area end */}
      </div>
    </>
  );
};

export default ImageGallery;
