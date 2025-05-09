import axios from "axios";
import {useEffect, useState} from "react"
import { Spinner } from "./Spinner";
import useGif from "../hooks/useGif";

const API_KEY= process.env.REACT_APP_GIPHY_API_KEY;

const Random = () => {
  // const [gif , setGif]=useState("");
  // const [loading , setLoading]=useState("false");
  // async function fetchData() {
  //   setLoading(true);
  //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
  //   const {data} = await axios.get(url);
  //   const imageSource = data.data.images.downsized_large.url;
  //   setGif(imageSource);
  //    setLoading(false); 
    
  // }

  // useEffect ( ()=>{
  //   fetchData();
  // },[])

const {gif,loading,fetchData}=useGif();
  function clickHandler () {
    fetchData();

  }
  
return (

   <div className="bg-green-400 w-1/2  rounded-lg border border-green-700
   flex flex-col items-center gap-y-5 mt-[15px]" >
    <h1 className=" mt-[15px] text-2xl font-semibold uppercase underline"> A Random Gif</h1>

    {loading ? (<Spinner/>):
(<img alt= "gif" src= {gif} width="450" height="450" />)}

    <button 
    className=" mb-[20px] w-10/12 bg-green-200 rounded-lg  text-lg py-2 uppercase"
    onClick={clickHandler}>
      Generate
      </button>
   </div>
  )
}
export default Random