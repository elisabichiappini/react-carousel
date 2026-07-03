import { useState } from "react";
import posts from "../utils/posts";
import {
    IoMdArrowDropleft as LeftArrow,
    IoMdArrowDropright as RightArrow
} from "react-icons/io";

export default function CarouselStyle() {
    const [currentIndex, setCurrentIndex] = useState(0);
    // const currentPost = posts[currentIndex];
    

    const goToNext = () => setCurrentIndex(c => (c + 1) % posts.length);
    const goToPrev = () => setCurrentIndex(c => (c - 1 + posts.length) % posts.length);

    return (

        <div className="carousel-wrapper">
            <div className="carousel">
                <div className="cards-wrapper">
                    <div className="cards" style={{ transform: `translateX(-${currentIndex * 640}px)` }}>
                        {
                            posts.map((post, index) => (
                                <div key={`card-${index}`} className={`card ${index === currentIndex ? 'active' : ''}`}>
                                    <figure>
                                        <img src={post.img} alt={post.title} />
                                    </figure>
                                    <p>{post.title}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <button className="arrow left" onClick={goToPrev}><LeftArrow /></button>
                <button className="arrow right" onClick={goToNext}><RightArrow /></button>


            </div>
            
            <div className="bullets">
                {
                    posts.map((_, index) => (
                        <span key={`bullet-${index}`} className={`bullet ${index === currentIndex ? 'active' : ''}`} onClick={() => setCurrentIndex(index)}> © </span>
                    ))
                }
            </div>

        </div>


    )
}
