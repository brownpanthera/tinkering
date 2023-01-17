import React, { useState } from "react";
import memesData from "../memesData";

export default function Meme() {

    function getRandomMeme(){
        const memesArray = memesData.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        const url = memesArray[randomNumber].url;
        console.log(url);
    }

  return (
    <main>
      <form className="form">
        <input type="text" placeholder="Top text" className="form--input" />
        <input type="text" placeholder="Bottom text" className="form--input" />
        <button type="button" onClick={getRandomMeme} className="form--button">Get a new meme image 🖼</button>
      </form>
    </main>
  );
}
