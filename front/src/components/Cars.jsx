import React from "react";

export default function Car({
  cars,
  singleCarMethod,
  handleSubmit,
  handleChangeMarca,
  users,
  handleChangeUser
}) {
  return (
    <div>
      <h1>CARS</h1>

      <form onSubmit={handleSubmit}>

        Marca: <input onChange={handleChangeMarca} />

        <label for="users">Elegi un usuario:</label>

        <select id="users" onChange={handleChangeUser}>

          <option></option>

          {
            users.length && users.map((user) => {
              return (
                <option  value={user.id}>{user.name}</option>
              )
            })
          }
        </select>

        <button type="submit">ENVIAR</button>
        
      </form>
      {cars.length > 0 &&
        cars.map((car) => {
          return (
            <h4>
              <button onClick={() => singleCarMethod(car.id)}>
                {car.marca}
              </button>
            </h4>
          );
        })}
    </div>
  );
}
