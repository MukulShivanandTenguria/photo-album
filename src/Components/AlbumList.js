import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "./Loading";

const AlbumList = () => {
  const { userId } = useParams();
  const [albumlist, setAlbumList] = useState([]);
  const [loading, setloading] = useState(false);
  useEffect(() => {
    setloading(true)
    axios
      .get("https://jsonplaceholder.typicode.com/albums")
      .then((value) => setAlbumList([...value.data]));
       setloading(false)
  }, []);
  return (
    <>
    <h1 className="text-center text-4xl font-serif bg-slate-800 text-white">Album List</h1>
        {loading&&<Loading/>}
      <div className="flex flex-wrap gap-4 justify-evenly">
        {!loading&&albumlist.map((value, index) => {
          if (value.userId === userId * 1) {
            return (
              <div key={index}>
                <div className="block w-60 h-52 p-6 rounded-lg shadow-lg bg-white ">
                  <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
                    {value.userId}
                  </h5>
                  <p className="text-gray-700 text-base mb-4">{value.title}</p>
                  <Link
                    to={`/User/${userId}/Album/${value.id}`}
                    type="button"
                    className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Button
                  </Link>
                </div>
              </div>
            );
          }
        })}
      </div>
    </>
  );
};

export default AlbumList;
