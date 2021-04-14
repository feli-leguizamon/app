import React, { useState, useEffect } from "react";
import axios from "axios";

const Users = ({ singleUserMethod }) => {
  const [cities, setCities] = useState([]);
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [birthday, setBirthday] = useState("");
  const [city, setCity] = useState("");
  const [users, setUsers] = useState([]);
  const [boolean, setBoolean] = useState(false);

  useEffect(() => {
    axios
      .get("/api/city")
      .then((r) => r.data)
      .then((cities) => setCities(cities));

    axios
      .get("/api/users")
      .then((r) => r.data)
      .then((users) => setUsers(users));
  }, []);

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeLastname = (e) => {
    setLastname(e.target.value);
  };

  const handleChangeBirthday = (e) => {
    setBirthday(e.target.value);
  };

  const handleChangeCity = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/users", { name, lastname, birthday, cityId: city })
      .then((user) => setUsers([...users, user.data]));

    setBoolean(false);
  };

  return (
    <div>
      <h1 className="users--title">USERS</h1>
      <div className="div--createNewUser">
        <button
          className="button--createNewUser"
          onClick={() => setBoolean(true)}
        >
          Create new user
        </button>
      </div>
      {users.map((user) => {
        return (
          <h4 className="users--name">
            <button
              className="button--singleUser blue"
              onClick={() => singleUserMethod(user.id)}
            >
              {user.name}
            </button>
          </h4>
        );
      })}

      {boolean ? (
        <div className="form--container">
          <form onSubmit={handleSubmit}>
            <div>
              NAME:{" "}
              <input onChange={handleChangeName} className="form--input" />
            </div>
            <br />
            <div>
              LASTNAME:{" "}
              <input onChange={handleChangeLastname} className="form--input" />
            </div>
            <br />
            <div>
              BIRTHDAY:{" "}
              <input onChange={handleChangeBirthday} className="form--input" />
            </div>
            <br />
            <label for="cities">CHOOSE A CITY: </label>
            <select id="cities" onChange={handleChangeCity}>
              <option></option>

              {cities.length &&
                cities.map((city) => {
                  return <option value={city.id}>{city.name}</option>;
                })}
            </select>

            <div className="button--send">
              <button type="submit">SEND</button>
            </div>
          </form>
        </div>
      ) : null}
    </div>
  );
};

export default Users;
