import React from "react";
//import axios from "axios";
import { useState} from "react"
import { Spinner } from "./Spinner";
import useGif from "../hooks/useGif";

const API_KEY= process.env.REACT_APP_GIPHY_API_KEY;

const Tag = () => {
  const [tag , setTag]= useState('CAR');
  // const [gif , setGif]=useState("");
   //const [loading , setLoading]=useState("false");
  // async function fetchData() {
  //   setLoading(true);
  //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
  //   const {data} = await axios.get(url);
  //   const imageSource = data.data.images.downsized_large.url;
  //   setGif(imageSource);
  //    setLoading(false); 
    
  // }

  // useEffect ( ()=>{
  //   fetchData();
  // },[])

  const {gif , loading, fetchData}=useGif(tag);
  function clickHandler () {
    fetchData(tag);

  }

  function changeHandler(event) {
    setTag(event.target.value)

  }
  
return (

   <div className="bg-blue-400 w-1/2  rounded-lg border border-blue-900
   flex flex-col items-center gap-y-5 mt-[15px]" >
    <h1 className=" mt-[15px] text-2xl font-semibold uppercase underline">  Random {tag} Gif</h1>

    {loading ? (<Spinner/>):
(<img alt= "gif" src= {gif} width="450" height="450" />)}

<input className="mb-[3px] w-10/12  rounded-lg  text-lg py-2 uppercase text-center"
onChange={changeHandler}
value={tag}
/>

    <button 
    className=" mb-[20px] w-10/12 bg-blue-200 rounded-lg  text-lg py-2 uppercase"
    onClick={clickHandler}>
      Generate
      </button>
   </div>
  )
}
export default Tag

