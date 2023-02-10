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
      <h1 className="text-center text-4xl font-serif bg-slate-800 text-white">
        User List
      </h1>
      <div className="flex flex-wrap gap-4 justify-evenly ">
        {imagelist.map((value, index) => {
          if (value.albumId === albumId * 1) {
            return (
              <div class="w-60 rounded overflow-hidden shadow-lg">
                <img
                  class="w-full"
                  src={`${value.url}`}
                  alt="Sunset in the mountains"
                />
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2">{value.title}</div>
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
