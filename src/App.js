import React, { useEffect,useState } from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { filterData,apiUrl } from "./data";
import { toast } from "react-toastify";
import Spinner from "./components/Spinner";
const App = () => {
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);
  
  useEffect(()=>{
    const fetchData=async()=>{
      setLoading(true);
      try{
        const res= await fetch(apiUrl);
        const output= await res.json();
        setCourses(output.data);
      }
      catch(error){
        toast.error("Something went wrong");
      }
      setLoading(false);
    }
    fetchData();
  },[]);
  return (
    <div className="min-h-screen flex flex-col  bg-amber-900 bg-opacity-50">
     <Navbar></Navbar>
     <Filter filterData={filterData} category={category} setCategory={setCategory} ></Filter>
     <div className="w-11/12 max-w-[1000px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
      {
        loading?<Spinner></Spinner>:<Cards course={courses} category={category}></Cards>
      }
     </div>
   </div>
  )
  
};

export default App;
