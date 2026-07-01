import { useState } from "react";
import posts from "../utils/posts";

export default function Carousel(){
      const [currentIndex, setCurrentIndex] = useState(0);
      const currentPost = posts[currentIndex];

    return (
      

        <div className="carousel">
            <div className="card">
                <figure>
                    <img src={currentPost.img} alt={currentPost.title} />
                </figure>
                <p>{currentPost.title}</p>
            </div>
        </div>

    )
}
