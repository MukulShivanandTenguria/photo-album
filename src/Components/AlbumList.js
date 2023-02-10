import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "./Loading";

const AlbumList = () => {
  const { userId } = useParams();
  const [albumlist, setAlbumList] = useState([]);
  const [loading, setloading] = useState(false);
  useEffect(() => {
    setloading(true);
    axios
      .get("https://jsonplaceholder.typicode.com/albums")
      .then((value) => setAlbumList([...value.data]));
    setloading(false);
  }, []);
  return (
    <>
      <h1 className="text-center text-4xl font-serif underline ">Album List</h1>
      {loading && <Loading />}
      <div className="flex flex-wrap gap-4 mx-auto justify-center my-5">
        {!loading &&
          albumlist.map((value, index) => {
            if (value.userId === userId * 1) {
              return (
                <div key={index} className="w-80 h-40 rounded-lg shadow-lg shadow-gray-400">
                  <div className="flex flex-col w-80 h-28 px-6 pt-6  bg-white ">
                    <h5 className="text-gray-900  leading-tight font-bold mb-2 ">
                      User id:-{value.userId}
                    </h5>
                    <p className="text-gray-700 text-base mb-4">
                      {value.title}
                    </p>
                  </div>
                    <span className="inline-block bg-gray-200 rounded-md px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 font-serif hover:bg-gray-800 hover:text-white mx-6">
                      <Link to={`/User/${userId}/Album/${value.id}`}>
                        Photos
                      </Link>
                    </span>
                </div>
              );
            }
          })}
      </div>
    </>
  );
};

export default AlbumList;
