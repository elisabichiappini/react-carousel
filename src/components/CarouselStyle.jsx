import { useState } from "react";
import posts from "../utils/posts";
import {
    IoMdArrowDropleft as LeftArrow,
    IoMdArrowDropright as RightArrow
} from "react-icons/io";

export default function CarouselStyle() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const currentPost = posts[currentIndex];

    const goToNext = () => setCurrentIndex(c => (c + 1) % posts.length);
    const goToPrev = () => setCurrentIndex(c => (c - 1 + posts.length) % posts.length);

    return (

        <div className="carousel-wrapper">
            <div className="carousel">
                <div class="cards-wrapper">
                    <div className="cards" style={{ marginLeft: `calc(-${currentIndex * 640}px + 1rem + 20px)` }}>
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
                ciao
            </div>

        </div>


    )
}
