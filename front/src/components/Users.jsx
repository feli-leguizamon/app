import React from "react";

export default ({ todosLosUsers, singleUserMethod }) => (
  <div>
    <h1>USERS</h1>
    {todosLosUsers.map((user) => {
      return <h4><button onClick = {() => singleUserMethod(user.id)}>{user.name}</button></h4>;
    })}
  </div>
);






















/* 
    import React from "react";

export default ({users, singleUserMethod}) => (
    <div>
        <h1>USERS</h1>
        {
            users.map((user) => (
                <h4><button onClick = {() => singleUserMethod(user.id) }>{user.name}</button></h4>
            ))
        }
    </div>
    ) */
