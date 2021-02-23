import React from "react";

export default ({ singleUser, deselectUser }) => {
    return (
        
    <div>
        <h1>Single User</h1>
            <h4>{singleUser.name}</h4>
            <h2>My cars</h2>
            {
                singleUser.cars.length > 0 && singleUser.cars.map((car) => {
                    return (
                        <p>{car.marca}</p>
                    )
                })
            }
            <button onClick={deselectUser}>Volver a users</button>  
    </div>
    )
}






































/* export default ({singleUser, deselectUser}) => (

    <div>
        <h1>Single User</h1>
        <h4>{singleUser.name}</h4>
        <button onClick = {deselectUser}>Volver a users</button>
    </div>
)
 */