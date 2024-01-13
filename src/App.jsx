
import React from 'react'
import { useState } from 'react'


function App() {

  let [counter, setCounter] = useState(0)

  // let counter = 15
  const addValue = () => {
    //console.log("add", Math.random());
    // console.log(counter);
    counter = counter + 1
    setCounter(counter)
  }
  // const addValue = () => {
    
  //   setCounter(Prevcounter => Prevcounter + 1)    //prevcounter ka matlab previous counter
  //   setCounter(Prevcounter => Prevcounter + 1)  // set counter ke andar ek hidden function hota hai
  //   setCounter(Prevcounter => Prevcounter + 1)  
  //   setCounter(Prevcounter => Prevcounter + 1)
  //   setCounter(Prevcounter => Prevcounter + 1)  // result: 20 aaya hai //is method ka use kar ke hum update state ki value ko ek saTH print kar saKTE HAI
  // }      // is trah karne par value hamari pahale ki tarah update ho rahi hai




  const remove = () => {
    counter = counter - 1
    if (counter <= 0) {
      counter = 0
    }
   console.log(counter);
    setCounter(counter)
  }

  return (
    <div>
      <h1>hello kuldeep</h1>
      <h2>counter value : {counter}</h2>
       <button onClick={addValue}>add value {counter}</button>
       <button onClick={remove}>remove value</button>
    </div>
  )
}


export default App
