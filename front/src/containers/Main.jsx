import React, { useState, useEffect } from "react";
import axios from "axios";

import Users from "../components/Users";
import SingleUser from "../components/SingleUser";

const Main = () => {
  const [singleUser, setSingleUser] = useState({});

  const singleUserMethod = (userId) => {
    axios
      .get(`/api/users/${userId}`)
      .then((res) => res.data)
      .then((serverUser) => setSingleUser(serverUser));
  };

  const deselectUser = () => {
    setSingleUser({});
  };

  return (
    <div>
      {singleUser.id ? (
        <SingleUser singleUser={singleUser} deselectUser={deselectUser} />
      ) : (
        <Users singleUserMethod={singleUserMethod} />
      )}
    </div>
  );
};

export default Main;
