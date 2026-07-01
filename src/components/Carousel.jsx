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
                <p>{currentPost.title}</p>
            </div>
            <div className="arrow left"><LeftArrow /></div>
            <div className="arrow right"><RightArrow /></div>
        </div>

    )
}
