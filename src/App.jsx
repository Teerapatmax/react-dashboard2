import React, { useState, useEffect } from 'react'
import Chart from "react-apexcharts";

function App() {
  const [petPrices, setPetPrice] = useState([])
  const [petChart, setPetChart] = useState({
    options: {
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: []
      }
    },
    series: [
      {
        name: "series-1",
        data: []
      }
    ]
  })

  useEffect(() => {
    fetch('https://spotless-sarong-newt.cyclic.app/pets_price')
    .then(res => res.json())
    .then(result => {
      console.log(result)
      setPetPrice(result)
    })

    fetch('https://spotless-sarong-newt.cyclic.app/pets_price_chart')
    .then(res => res.json())
    .then(result => {
      console.log(result)
      setPetChart({
        options: {
          chart: {
            id: "basic-bar"
          },
          xaxis: {
            categories: result.petNames
          }
        },
        series: [
          {
            name: "ราคา",
            data: result.prices
          }
        ]
      })
    })
  }, [])

  return (
    <div>
      <h1>Teerapat Prasongprasit 6402802</h1>
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
