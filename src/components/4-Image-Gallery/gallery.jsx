import React from "react";
import Photos from "./photos";
import Photo1 from "../../assets/4-Image-Gallery/image1.jpg";
import Photo2 from "../../assets/4-Image-Gallery/image2.jpg";
import Photo3 from "../../assets/4-Image-Gallery/image3.jpg";
import Photo4 from "../../assets/4-Image-Gallery/image4.jpg";
import Photo5 from "../../assets/4-Image-Gallery/image5.jpg";
import Photo6 from "../../assets/4-Image-Gallery/image6.jpg";

const photoList = [
  {
    id: 1,
    photo: Photo1,
    content: "Abstract Painting",
    likesAndShares: "245 likes - 35 Shares",
  },
  {
    id: 2,
    photo: Photo2,
    content: "Abstract Painting",
    likesAndShares: "245 likes - 35 Shares",
  },
  {
    id: 3,
    photo: Photo3,
    content: "Abstract Painting",
    likesAndShares: "245 likes - 35 Shares",
  },
  {
    id: 4,
    photo: Photo4,
    content: "Abstract Painting",
    likesAndShares: "245 likes - 35 Shares",
  },
  {
    id: 5,
    photo: Photo5,
    content: "Abstract Painting",
    likesAndShares: "245 likes - 35 Shares",
  },
  {
    id: 6,
    photo: Photo6,
    content: "Abstract Painting",
    likesAndShares: "245 likes - 35 Shares",
  },
];

const Gallery = () => {
  return (
    <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 ">
      {photoList.map((photos) => (
        <Photos key={photos.id} photos={photos} />
      ))}
    </div>
  );
};

export default Gallery;
