import React, { useState } from "react";

const MainBody = ({ setItems, items, pictures, setPictures, isAllChecked }) => {
  const [draggingItem, setDraggingItem] = useState(null);
  const [isChecked, setIsChecked] = useState(false);
  // drag start function start
  const handleDragStart = (e, item) => {
    setDraggingItem(item);
  };
  // drag start function end

  // drag Over function start
  const handleDragOver = (e, item) => {
    if (draggingItem === null) return;

    const updatedPictures = [...pictures];
    const draggingIndex = pictures.findIndex(
      (pic) => pic.id === draggingItem.id
    );
    const targetIndex = pictures.findIndex((pic) => pic.id === item.id);

    if (draggingIndex !== -1 && targetIndex !== -1) {
      [updatedPictures[draggingIndex], updatedPictures[targetIndex]] = [
        updatedPictures[targetIndex],
        updatedPictures[draggingIndex],
      ];
      setPictures(updatedPictures);
    }
  };
  // drag Over function end

  // drag end function start
  const handleDragEnd = () => {
    setDraggingItem(null);
  };
  // drag end function end

  const handleSelect = (value, data) => {
    if (value) {
      // Add the item to the 'items' state
      setItems((prevItems) => [...prevItems, data]);
    } else {
      // Remove the item from the 'items' state
      setItems((prevItems) => prevItems.filter((item) => item.id !== data.id));
    }
  };

  return (
    <div className="mt-2 px-5 ">
      {/* Grid layout */}

      <div className=" mt-5 grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {/* pictures map start */}
        {pictures.map((data, index) => (
          <div
            className={` cursor-pointer border relative rounded-md  border-slate-400 ${
              index === 0 ? "lg:col-span-2  sm:row-span-2 lg:row-span-2 " : ""
            } relative group `}
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => handleDragOver(event, data)}
            draggable
            onDragStart={(e) => handleDragStart(e, data)}
            onDragEnd={handleDragEnd}
          >
            <img
              src={data.pic}
              className="w-full h-full object-contain rounded-md"
              alt={`Image ${data.id}`}
            />

            <div
              className={`absolute rounded-md h-full w-full bg-white/50 flex items-center justify-center -bottom-10 transition-all duration-300 ${
                isAllChecked ? "bottom-0 opacity-100" : "opacity-0"
              }`}
            >
              <input
                type="checkbox"
                checked={isAllChecked}
                onChange={(e) => handleSelect(e.target.checked, data)}
                className="absolute top-2 right-2 cursor-pointer h-5 w-5"
              />
            </div>

            <div
              className={`absolute rounded-md h-full w-full bg-white/50 flex items-center justify-center -bottom-10 transition-all duration-300 ${
                items.some((item) => item.id === data.id)
                  ? "bottom-0 opacity-100"
                  : "opacity-0"
              }`}
            >
              <input
                type="checkbox"
                checked={items.some((item) => item.id === data.id)}
                onChange={(e) => handleSelect(e.target.checked, data)}
                className="absolute top-2 right-2 cursor-pointer h-5 w-5"
              />
            </div>

            {items.some((item) => item.id === data.id)
              ? ""
              : !isAllChecked && (
                  <div className="absolute rounded-md  h-full w-full bg-black/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <input
                      type="checkbox"
                      checked={items.some((item) => item.id === data.id)}
                      onChange={(e) => {
                        handleSelect(e.target.checked, data);
                        setIsChecked(e.target.checked);
                      }}
                      className="absolute top-2 right-2 cursor-pointer h-5 w-5 "
                    />
                  </div>
                )}
          </div>
        ))}
{pictures.length===0?"":   <div
       className="outline-dashed outline-2 h-[348px] lg:h-full lg:col-span-1 row-span-6  sm:row-span-2 lg:row-span-1 flex justify-center items-center cursor-pointer border relative rounded-md border-slate-400"
        >
        <div className="text-center ">
          <img src="https://i.ibb.co/6RFk1Jp/add-image-128.png" className="h-8 mx-auto"/>
<h5 className="font-bold">Add Image</h5>
        </div>
       

        
        </div>}
     
        {/* pictures map End */}
      </div>
    </div>
  );
};

export default MainBody;
