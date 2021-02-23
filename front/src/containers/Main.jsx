import React, { useEffect, useState } from "react";
import axios from "axios";
import Users from "../components/Users";
import SingleUser from "../components/SingleUser";
import Cars from "../components/Cars";
import SingleCar from "../components/SingleCar";

export default function Main() {
  const [users, setUsers] = useState([]);
  const [singleUser, setSingleUser] = useState({});
  const [cars, setCars] = useState([]);
  const [singleCar, setSingleCar] = useState({});
  const [value, setValue] = useState([]);
  const [userValue, setUserValue] = useState(null)

  useEffect(() => {
    axios
      .get("/api/users")
      .then((res) => res.data)
      .then((serverUsers) => setUsers(serverUsers));

    axios
      .get("/api/cars")
      .then((res) => res.data)
      .then((serverCars) => setCars(serverCars));
  }, []);

  const singleUserMethod = (userId) => {
    axios
      .get(`/api/users/${userId}`)
      .then((res) => res.data)
      .then((serverUser) => setSingleUser(serverUser));
  };

  const deselectUser = () => {
    setSingleUser({});
  };

  const deselectCar = () => {
    setSingleCar({});
  };

  const singleCarMethod = (carId) => {
    axios
      .get(`/api/cars/${carId}`)
      .then((res) => res.data)
      .then((serverCar) => setSingleCar(serverCar));
  };

  const handleChangeMarca = (e) => {
    let evento = e.target.value;
    setValue(evento);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/cars", { marca: value, userValue })
      .then((res) => res.data)
      .then((createdCar) => setCars([...cars, createdCar]));
  };

  const handleChangeUser = (e) => {
    let evento = e.target.value
    setUserValue(evento)
  }

  return (
    <div>
      {singleUser.id ? (
        <SingleUser singleUser={singleUser} deselectUser={deselectUser} />
      ) : (
        <>
          <Users users={users} singleUserMethod={singleUserMethod} />
        </>
      )}

      {singleCar.id ? (
        <SingleCar singleCar={singleCar} deselectCar={deselectCar} />
      ) : (
        <Cars
          cars={cars}
          singleCarMethod={singleCarMethod}
          handleChangeMarca={handleChangeMarca}
            handleSubmit={handleSubmit}
            users={users}
            handleChangeUser = {handleChangeUser}
        />
      )}
    </div>
  );
}
