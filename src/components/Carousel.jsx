import { useState } from "react";
import posts from "../utils/posts";
import { IoMdArrowDropleft as LeftArrow,
    IoMdArrowDropright as RightArrow
 } from "react-icons/io";

export default function Carousel(){
      const [currentIndex, setCurrentIndex] = useState(2);
      const currentPost = posts[currentIndex];

    return (
      

        <div className="carousel">
            <div className="card">
                <figure>
                    <img src={currentPost.img} alt={currentPost.title} />
                </figure>
                <p >{currentPost.title}</p>
            </div>
            <button className="arrow left"><LeftArrow /></button>
            <button className="arrow right"><RightArrow /></button>
        </div>

    )
}
