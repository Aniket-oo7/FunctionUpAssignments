import React from 'react'

import { useState } from 'react';

import { Fragment } from "react";

import './form.css'



let luckyNumber = Math.round(Math.random() * 10);
export default function Guess() {

    const [number, setNumber] = useState()
    const [count , setCount] = useState(1)

    function handleChange(e){
        setNumber(e.target.value)
    }



    function checkNumber() {
          
          setCount( count +1)

        const guessnum = number;
        if(guessnum == luckyNumber)
        {
         alert(`congratulations you guessed the right number in ${count} attempts`)
        }
        if (guessnum < luckyNumber) {
            alert("You guessed a smaller number")
        }
         if (guessnum > luckyNumber) {
            alert("You guessed a greater number",)
        }
        
 }

 return (

        <div className="container">
            <h1>Guess Lucky Number</h1>
            <input className='input_tag' placeholder='Guess Lucky Number' onChange={handleChange} ></input>
            <button className="btn" onClick={checkNumber}>Match Number</button>
            <p>{luckyNumber}</p>
           
        </div>

     )


}



