import Random from "./components/Random"
import Tag from "./components/Tag"
export default function App() {
  return (

    <div className="w-full h-full flex  flex-col background  items-center ">
      <h1 className="w-11/12 bg-white text-center mt-[40px] py-2 text-3xl text-3xl font-semibold rounded-xl" > RANDOM GIFS</h1>

      <div className="flex flex-col w-full items-center mt-[30px]">
        <Random/>
        <Tag/>
      </div>

      
    </div>
  ) 
}
