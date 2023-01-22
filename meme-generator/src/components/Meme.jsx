import React, { useState } from "react";
import memesData from "../memesData";

export default function Meme() {

  const [memeImage, setmemeImage] = useState("");

  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"
  })

  const [allMemeImages, setAllMemeImages] = useState(memesData);

  let {name, id} = memesData.data.memes;

    function getRandomMeme(){
      const memesArray = memesData.data.memes;
      const randomNumber = Math.floor(Math.random() * memesArray.length);
      const ImageURL = memesArray[randomNumber].url;
      name = memesArray[randomNumber].name;
      id = memesArray[randomNumber].id;
        setmemeImage(ImageURL);

        setMeme(prevMeme => ({
          ...prevMeme,
          randomImage: ImageURL
        }))
    }

  return (
    <main>
      <form className="form">
        <input type="text" placeholder="Top text" className="form--input" />
        <input type="text" placeholder="Bottom text" className="form--input" />
        <button type="button" onClick={getRandomMeme} className="form--button">Get a new meme image 🖼</button>

        <div>
          <img className="meme-image" src = {meme.randomImage} alt={name} key={id}/>
        </div>
      </form>
    </main>
  );
}
