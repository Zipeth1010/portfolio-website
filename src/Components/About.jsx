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
        <h3 className=" mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white underline">
          My Journey
        </h3>
        <br />
        <p className=" text-center m-4">
          I started my coding journey as of December 2022, and in that time I
          have done a lot of self learning and attended a software engineering
          bootcamp. The result of my studies has made me proficient in
          JavaScript on both the Front-End and Back-End, with more to come.
          <br />
          <br />
          Before coding, I was a professional gamer for around 3 and a half
          years, playing Apex Legends at international levels competing for
          prize money in tournaments. At my peak, I was ranked the number 1
          player worldwide for approximately 5 months concurrently, out of over
          100 million total unique players, and garnered over 80000 followers on
          'Twitch' as a result. It was during this time that I discovered
          software development through members of my community and started to
          take a big interest in Software & Web Development.
          <br /> <br />I am extremely motivated, and willing to do whatever it
          takes to make myself a better developer. I understand that I got holes
          in my knowledge due to my lack of time and experience, but I am not
          afraid to admit those holes and I do the very best I can to make sure
          they are filled as soon as possible. After completing the bootcamp, I
          realized that learning a CSS framework would serve me well to improve
          the aesthetic's of any future applications I make, so I chose to learn
          TailwindCSS. This is my first website built using it!
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
                className=" w-[300px] inline-block p-2 cursor-pointer hover:scale-125 ease-in-out duration-300"
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
