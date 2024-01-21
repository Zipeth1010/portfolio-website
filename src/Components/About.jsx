import { data } from "../Assets/data";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const AboutComponent = () => {
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 200;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 200;
  };

  return (
    <div
      id="about"
      className="grid grid-cols-1 lg:grid-cols-2 py-12 px-5 bg-gray-900 text-white mt-32 justify-center items-center"
    >
      <div className="flex flex-col w-full items-center justify-center pl-5">
        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
          My Journey
        </h2>
        <br />
        <p className=" text-center m-4">
          I started my coding journey back in December 2022. In that time, I
          completed a software engineering bootcamp course from Nortcode and
          have diligently been self learning and becoming more proficient in
          JavaScript in both the Front end and Back end.
          <br />
          <br />
          Before coding, an opportunity arose after Uni that led me to become a
          professional gamer for three and a half years during the covid
          pandemic. I was playing Apex Legends at International levels competing
          for prize money in tournaments. At my peak, I was ranked no 1 player
          worldwide for approximately 5 months concurrently out of 100 million
          total unique players and gained over 80,000 on Twitch as a result. I
          landed a job with LVL in Berlin for a year and this is where I got
          introduced to coding through my colleagues at work. I became
          fascinated by their world and wanted to get immersed immediately. I
          retired from the world of esports and decided to learn as much as I
          could about coding.
          <br /> <br />I am extremely motivated and willing to do whatever it
          takes to make myself a better developer. After finishing my first
          bootcamp, I then completed another Full-Stack software engineering
          professional certificate offered by 'IBM'. I secured a contract work
          with 'Traced Ltd' as a contract Front-End developer, and I am now
          looking for my first full time job as a Front-End software/web
          developer.
        </p>
      </div>
      <div className=" flex flex-row w-full items-center justify-center">
        <MdChevronLeft size={40} onClick={slideLeft} />
        <div
          id="slider"
          className=" w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth"
        >
          {data.map((item) => {
            return (
              <img
                className=" w-auto h-auto max-h-[450px] inline-block p-2 cursor-pointer hover:scale-125 ease-in-out duration-300 py-16"
                src={item.img}
                alt="/"
              />
            );
          })}
        </div>
        <MdChevronRight size={40} onClick={slideRight} />
      </div>
    </div>
  );
};

export default AboutComponent;
