import React, { useState } from 'react'
import './home.css'
import data from './data.json'


const Home = () => {


  const [number, setNumber] = useState(0);

  const [state, setState] = useState([]);


  function generate() {
    if (number == ""){
      alert('Kya bhai kuch bhi?')
    }

   else if (number > data.length) {
      alert('Bas bhai kitna lega!')

    }
    else {
      let para = data;

      let arr = para.slice(0, Number(number))

      setState(arr);
    }

  }



  return (
    <main>
      <h1>Bored of Boring paragraphs</h1>

      <div className='info'>
        <p>Paragraphs :</p>

        <input onChange={(e) => {
          setNumber(e.target.value)
        }} type="number" name="" id="" />

        <button onClick={generate}>Generate</button>

      </div>

      <div className="display">
        {
          state.map((e) => {
            return (
              <p>{e.para}</p>
            )
          })
        }
      </div>

    </main>
  )
}

export default Home
