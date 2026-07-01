import { useState } from "react";
import posts from "../utils/posts";
import { IoMdArrowDropleft as LeftArrow,
    IoMdArrowDropright as RightArrow
 } from "react-icons/io";

export default function CarouselStyle(){
      const [currentIndex, setCurrentIndex] = useState(2);
      const currentPost = posts[currentIndex];

      const goToNext = () => setCurrentIndex(c => (c + 1) % posts.length);
      const goToPrev = () => setCurrentIndex(c => (c - 1 + posts.length) % posts.length);

    return (
      

        <div className="carousel">
            <div className="cards">
                {
posts.map((post, index) => (
                    <div key={index} className={`card ${index === currentIndex ? 'active' : ''}`}>
                        <figure>
                            <img src={post.img} alt={post.title} />
                        </figure>
                        <p>{post.title}</p>
                    </div>
                ))
                }
            </div>
            <button className="arrow left" onClick={goToPrev}><LeftArrow /></button>
            <button className="arrow right" onClick={goToNext}><RightArrow /></button>
        </div>

    )
}
