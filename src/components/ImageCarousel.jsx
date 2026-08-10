import { useState } from "react";

function ImageCarousel({ images }) {

    const [current, setCurrent] = useState(0);


    function nextImage(){

        setCurrent((prev) =>
            prev === images.length - 1
            ? 0
            : prev + 1
        );

    }


    function previousImage(){

        setCurrent((prev) =>
            prev === 0
            ? images.length - 1
            : prev - 1
        );

    }


    return (

        <div className="mb-2">

            <img
                src={images[current]}
                alt="Project screenshot"
                className="
                    w-full
                    h-auto
                    object-contain
                    rounded-xl
                "
            />


            <div className="flex justify-center items-center gap-5 mt-4">

                <button
                    onClick={previousImage}
                    className="text-2xl"
                >
                    ◀
                </button>


                <span className="text-slate-300">
                    {current + 1} / {images.length}
                </span>


                <button
                    onClick={nextImage}
                    className="text-2xl"
                >
                    ▶
                </button>

            </div>



            <div className="flex justify-center gap-2 mt-3">

                {images.map((_, index)=>(

                    <button
                        key={index}
                        onClick={()=>setCurrent(index)}
                        className={`
                            w-3
                            h-3
                            rounded-full
                            ${current === index
                                ? "bg-white"
                                : "bg-slate-500"
                            }
                        `}
                    />

                ))}

            </div>


        </div>

    );
}


export default ImageCarousel;