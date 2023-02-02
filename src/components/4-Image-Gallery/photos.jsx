import React from "react";
import bookmark from "../../assets/4-Image-Gallery/bookmark.svg";

const Photos = ({ photos }) => {
  const { photo, content, likesAndShares } = photos;
  return (
    <div className="relative group">
      <img className="w-72" src={photo} alt={photo} />
      <div className="w-full absolute bg-black bottom-0 left-0 right-0 p-2 px-4 text-white opacity-0 group-hover:opacity-100 bg-opacity-40 duration-400">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <p className="text-sm">{content}</p>
            <span className="text-xs">{likesAndShares}</span>
          </div>
          <img src={bookmark} alt="Bookmark" />
        </div>
      </div>
    </div>
  );
};

export default Photos;
