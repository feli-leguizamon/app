import React from 'react'

export default function SingleCar({singleCar, deselectCar}) {
    return (
        <div>
                    <h1>Single Car</h1>
        <h4>{singleCar.marca}</h4>
        <button onClick = {deselectCar}>Volver a home</button>
        </div>
    )
}