import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const userId=createContext()
const Users = () => {
  const [userdata, setUserData] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((users) => setUserData([...users.data]));
  }, []);
  return (
    <>
        <h1 className="text-center text-4xl font-serif bg-slate-800 text-white">User List</h1>
      <div className="flex flex-wrap gap-4 justify-evenly">
        {userdata &&
          userdata.map((value, index) => {
            return (
              <div
                key={index}
                className=" max-w-sm w-full lg:max-w-full lg:flex"
              >
                <div className="w-72 rounded overflow-hidden shadow-lg">
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2 flex">
                      Name:-{value.username}{" "}
                    </div>
                    <div className=" mb-2 flex">Email-{value.email}</div>
                    <p className="text-gray-700 text-base font-bold">Address</p>
                    <p className="text-gray-700 text-base">
                      street:-{value.address.street}
                    </p>
                    <p className="text-gray-700 text-base">
                      suite:-{value.address.suite}
                    </p>
                    <p className="text-gray-700 text-base">
                      city:-{value.address.city}
                    </p>
                    <p className="text-gray-700 text-base">
                      zipcode:-{value.address.zipcode}
                    </p>
                  </div>
                  <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      <Link to={`User/${value.id}/Albums`}>Albums</Link>
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Users;
