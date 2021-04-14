import axios from "axios";
import React, { useState, useEffect } from "react";

const SingleUser = ({ singleUser, deselectUser }) => {
  const [boolean, setBoolean] = useState(false);
  const [cities, setCities] = useState([]);
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [birthday, setBirthday] = useState("");
  const [city, setCity] = useState("");

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

  useEffect(() => {
    axios
      .get("/api/city")
      .then((r) => r.data)
      .then((cities) => setCities(cities));
  }, []);

  const deleteUser = (id) => {
    axios
      .delete(`/api/users/${id}`)
      .then(() => console.log("usuario eliminado"));
  };

  const updateUser = (id) => {
    setBoolean(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`/api/users/${singleUser.id}`, {
        name,
        lastname,
        birthday,
        cityId: city,
      })
      .then(() => console.log("usuario actualizado"));

    setBoolean(false);
  };

  return (
    <div>
      <h1 className="users--title">Single User</h1>
      <h4 className="users--data">
        {singleUser.name} {singleUser.lastname} - {singleUser.birthday}
      </h4>
      <h5 className="city--data">City: {singleUser.city.name} </h5>
      <h6 className="city--data">Description: {singleUser.city.description}</h6>
      <div className="buttons--singleUser">
        <button onClick={deselectUser}>Back to main page</button>
      </div>
      <div className="buttons--singleUser">
        <button onClick={(id) => updateUser(singleUser.id)}>Update user</button>
      </div>
      <div className="buttons--singleUser">
        <button onClick={(id) => deleteUser(singleUser.id)}>Delete user</button>
      </div>
      {boolean ? (
        <div className="form--container">
          <form onSubmit={handleSubmit}>
            <div className="input--form">
              NAME: <input onChange={handleChangeName} />
            </div>
            <br />
            <div>
              LASTNAME: <input onChange={handleChangeLastname} />
            </div>
            <br />
            <div>
              BIRTHDAY: <input onChange={handleChangeBirthday} />
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
      ) : (
        ""
      )}
    </div>
  );
};

export default SingleUser;
