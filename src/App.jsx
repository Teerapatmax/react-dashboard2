import React, { useState,useEffect } from 'react'
import Chart from "react-apexcharts";


function App() {
  const [petPrices, setPetPrice] = useState([])

  const [petChart, setPetChart] = useState({
    options: {
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
      }
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }
    ]
  })


  useEffect(() => {
    fetch('https://attractive-cyan-sheep.cyclic.app/pets_price')
    .then(res => res.json())
    .then(result => {
      console.log(result)
      setPetPrice(result)
    })
  }, [])

  return (
    <div>
      <h1>Teerapat 6402802</h1>
      <ul>
        {petPrices.map(pet => (
          <li key={pet.id}>
            {pet.petName} {pet.price}
          </li>
        ))}
      </ul>
      <Chart
        options={petChart.options}
        series={petChart.series}
        type='bar'
        width='500'
      />

    </div>
  )

}

export default App