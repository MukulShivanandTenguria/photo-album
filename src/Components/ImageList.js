import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const ImageList = () => {
  const { albumId } = useParams();
  const [imagelist, setImageList] = useState([]);
  console.log(albumId);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((value) => setImageList(value.data));
  }, []);
  return (
    <>
      <h1 className="text-center text-4xl font-serif underline">
        Image List
      </h1>
      <div className="flex flex-wrap gap-4 justify-evenly my-5">
        {imagelist.map((value, index) => {
          if (value.albumId === albumId * 1) {
            return (
              <div className="w-60 rounded-lg overflow-hidden shadow-lg shadow-gray-400 p-2">
                <img
                  className="w-full rounded-lg"
                  src={`${value.url}`}
                  alt="Sunset in the mountains"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{value.title}</div>
                </div>
              </div>
            );
          }
        })}
      </div>
    </>
  );
};

export default ImageList;
