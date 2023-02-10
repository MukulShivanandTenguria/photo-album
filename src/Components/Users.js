import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const userId = createContext();
const Users = () => {
  const [userdata, setUserData] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((users) => setUserData([...users.data]));
  }, []);
  return (
    <>
      <div className="flex flex-wrap gap-4 items-center justify-center m-10">
        {userdata &&
          userdata.map((value, index) => {
            return (
              <div className="block w-60 h-90 p-2 px-3 rounded-lg shadow-lg shadow-gray-400 bg-white ">
                <div className="photo-wrapper p-2 h-20">
                  <img
                    className="w-20 h-20 rounded-full mx-auto"
                    src="https://as1.ftcdn.net/v2/jpg/03/46/83/96/1000_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
                    alt=""
                  />
                </div>
                <div className="px-1 py-4">
                  <div className="font-bold text-lg font-serif flex">
                    Name:-{value.username}
                  </div>
                  <div className=" text-xs flex font-serif">Email-{value.email}</div>
                  <p className="text-gray-700 text-base font-bold font-serif">Address:-</p>
                  <p className="text-gray-700 text-base font-serif">
                    street:-{value.address.street}
                  </p>
                  <p className="text-gray-700 text-base font-serif">
                    suite:-{value.address.suite}
                  </p>
                  <p className="text-gray-700 text-base font-serif">
                    city:-{value.address.city}
                  </p>
                  <p className="text-gray-700 text-base font-serif">
                    zipcode:-{value.address.zipcode}
                  </p>
                </div>
                <div className="px-1 pb-2">
                  <span className="inline-block bg-gray-200 rounded-md px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 font-serif hover:bg-gray-800 hover:text-white">
                    <Link to={`User/${value.id}/Albums`}>Show Albums</Link>
                  </span>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Users;
