import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MainPage = () => {
  const audioRef = useRef(null); // Create a ref for the audio element
  const [isPlaying, setIsPlaying] = useState(false); // State to track audio playback

  useEffect(() => {
    const playAudio = async () => {
      try {
        await audioRef.current.play(); // Attempt to play the audio
        setIsPlaying(true); // Set the state to reflect that the audio is playing
      } catch (error) {
        console.error("Autoplay was prevented:", error); // Log if the autoplay is blocked
      }
    };

    playAudio(); // Call the function to play audio when the component mounts

    // Cleanup function to stop audio when the component unmounts
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0; // Reset the audio
      }
    };
  }, []);

  const toggleAudio = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying); // Toggle the playing state
  };

  const images = [
    "/img1.jpeg",
    "/img2.jpeg",
    "/img3.jpeg",
    "/img4.jpeg",
    "/img5.jpeg",
    "/img6.jpeg",
    "/img7.jpeg",
    "/img8.jpeg",
    "/img9.jpeg",
    "/img10.jpeg",
    "/img11.jpeg",
    "/img12.jpeg",
    "/img13.jpeg",
  ];

  const settings = {
    infinite: true,
    speed: 8000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      {/* Audio Element */}
      <audio ref={audioRef} loop>
        <source src="/song.mp3" type="audio/mpeg" />
        Your browser does not support the audio tag.
      </audio>

      {/* Background section with text */}
      <div className="bg-[url('/img11.jpeg')] bg-center bg-cover min-h-screen flex justify-center items-center">
        <div className="z-10 text-center mb-10 px-4">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight text-pink-600">
            Happy Anniversary, My Love!
          </h1>
          <p className="text-xl sm:text-2xl mt-4 text-blue-950 font-bold">
            Thank you for all the beautiful memories. Here’s to many more ❤️
          </p>
          <p className="text-lg sm:text-xl mt-2 text-blue-950 font-bold">
            আমাদের সম্পর্কের প্রতিটি মুহূর্তে একটি নতুন গল্প। আমি আশা করি আগামী
            দিনগুলোও আমাদের জন্য নতুন নতুন সুখের মুহূর্ত নিয়ে আসবে। ❤️
          </p>
          <p className="text-lg sm:text-xl mt-2 text-blue-950 font-bold">
            তোমার সাথে কাটানো প্রতিটি দিন আমার জীবনে একটি নতুন রং যোগ করে। এই
            সুন্দর যাত্রায় তোমার সাথে থাকার জন্য আমি চিরকাল কৃতজ্ঞ। ❤️
          </p>

          {/* Play/Pause Button */}
          <button
            onClick={toggleAudio}
            className="mt-4 bg-pink-600 text-white py-2 px-6 rounded-lg hover:bg-pink-700 transition"
          >
            {isPlaying ? "Pause Music" : "Play Music"}
          </button>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="testimonial-slider max-w-7xl mx-auto px-4 py-10">
        <h2 className="py-6 text-center font-semibold text-pink-600 text-2xl sm:text-3xl md:text-4xl mb-8">
          Our Memories
        </h2>
        <Slider {...settings}>
          {images.map((im, index) => (
            <div key={index} className="w-full px-2 md:px-4">
              <img
                src={im}
                alt={`Memory ${index}`}
                className="w-full h-[600px] sm:h-[350px] md:h-[400px] lg:h-[500px] object-cover rounded-lg"
              />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default MainPage;
