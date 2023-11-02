import React, { useState } from "react";
import Swal from "sweetalert2";

const Header = ({
  isAllChecked,
  items,
  setItems,
  setPictures,
  pictures,
  setIsAllChecked,
}) => {
  const handleToggleSelectAll = () => {
    setIsAllChecked(!isAllChecked);
    const allSelected = items.length === pictures.length;

    if (allSelected) {
      // If all items are selected, clear the selection
      setItems([]);
    } else {
      // If not all items are selected, select all
      const allItemIds = pictures.map((data) => data.id);
      setItems(allItemIds);
    }
  };
  const handleDeleteSelected = () => {
    // Remove selected items from the 'pictures' array
    const updatedPictures = pictures.filter(
      (data) => !items.some((item) => item.id === data.id)
    );

    setPictures(updatedPictures); // Update the 'pictures' state
    setItems([]); // Clear the 'items' state after deletion
  };

  const handleDeleteSelectedAll = () => {
    // Remove selected items from the 'pictures' array

    setPictures([]);
    // Clear the 'items' state after deletion
    setItems([]);
    setIsAllChecked(false);
    Swal.fire("Good job!", "Deleted Successfully", "success");
  };

  const allSelected = items.length === pictures.length;
  return (
    // header start
    <header className="bg-white  rounded-t-lg flex p-5 justify-between items-center border-b border-slate-400">
      <div>
        <label className="flex items-center space-x-2">
          {pictures.length === 0 ? (
            ""
          ) : (
            <input
              type="checkbox"
              checked={pictures.length === 0 ? false : allSelected}
              onChange={handleToggleSelectAll}
              className="cursor-pointer form-checkbox h-5 w-5 text-slate-400"
            />
          )}

          <span className="font-bold">
            {" "}
            {items.length > 0
              ? `${items.length} Files Selected`
              : pictures.length === 0
              ? "0 Gallery"
              : "Gallery"}
          </span>
        </label>
      </div>

      <div>
        {pictures.length === 0 ? (
          <h6
            onClick={() => {
              window.location.reload();
            }}
            className="hover:text-red-700 duration-200 text-red-600 font-semibold cursor-pointer "
          >
            Refresh
          </h6>
        ) : (
          <h6
            onClick={
              isAllChecked ? handleDeleteSelectedAll : handleDeleteSelected
            }
            className="hover:text-red-700 duration-200 text-red-600 font-semibold cursor-pointer "
          >
            {items.length > 0 || isAllChecked ? ` Delete File` : ""}
          </h6>
        )}
      </div>
    </header>
    // header End
  );
};

export default Header;
