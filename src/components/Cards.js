import React from "react";
import Card from "./Card";
import { useState } from "react";
const Cards = ({course,category}) => {
  const[likedCourses,setLikedCourses]=useState([]);
    const getCourses=()=>{
      if(category==="All"){
        let allCourses=[];
        Object.values(course).forEach(item=>{
          item.forEach(courseItem=>{
            allCourses.push(courseItem);
        })
       })
       return allCourses;
      }
      else return course[category];    
    }
    return(
      <div className="flex flex-wrap justify-center gap-4 mb-4">{
        getCourses().map((courseItem)=>{
          return  <Card key={courseItem.id} course={courseItem} likedCourses={likedCourses} setLikedCourses={setLikedCourses}></Card>
         })
      }   
      </div>
    )
}
export default Cards;