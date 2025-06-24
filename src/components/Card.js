
import React from "react";
import {FcLike,FcLikePlaceholder} from "react-icons/fc";
import { toast } from "react-toastify";
const Card = ({course,likedCourses,setLikedCourses}) => {
    function clickHandler() {
        if(likedCourses.includes(course.id)){
            setLikedCourses(likedCourses.filter(item => item !== course.id));
            toast.warning("Like removed");
        }
        else{
            setLikedCourses([...likedCourses, course.id]);
            toast.success("Liked successfully");
        }
        
    }
    return(
        <div className="w-[300px] bg-amber-900 bg-opacity-50 rounded-md overflow-hidden">
           <div className="relative">
             <img src={course.image.url}></img>
             <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-12px] grid place-items-center'>
                <button onClick={clickHandler}>{
                    likedCourses.includes(course.id) ? 
                    <FcLike fontSize="1.5rem"/> : 
                    <FcLikePlaceholder fontSize="1.5rem"/>
                }
                </button>
             </div>
           </div>
            <div className='p-4'>
                <p className=" text-white font-semibold text-lg leading-6">{course.title}</p>
                <p className='mt-2 text-white'>{
                    course.description.length > 100 ?
                    course.description.slice(0, 100) + "..." :
                    course.description
                    }</p>
            </div>
        </div>
    )
}
export default Card;