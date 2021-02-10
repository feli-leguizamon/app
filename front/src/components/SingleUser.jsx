import React from "react";

export default ({singleUser, deselectUser}) => (

    <div>
        <h1>Single User</h1>
        <h4>{singleUser.name}</h4>
        <button onClick = {() => deselectUser()}>Volver a users</button>
    </div>
    
)




































/* export default ({singleUser, deselectUser}) => (

    <div>
        <h1>Single User</h1>
        <h4>{singleUser.name}</h4>
        <button onClick = {deselectUser}>Volver a users</button>
    </div>
)
 */