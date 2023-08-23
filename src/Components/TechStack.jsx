import { techStack } from "../Assets/techStackData";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const TechStackComponent = () => {
  return (
    <div
      id="techstack"
      className=" grid w-screen place-items-center bg-gray-900 text-white justify-center items-center pt-10"
    >
      <img src={require("../Assets/Tech.png")} />
      <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 py-12 px-5 bg-gray-900 text-white">
        {techStack.map((item) => {
          return (
            <div className=" relative px-14 py-3 text-center bg-blend-normal z-30">
              <img src={item.img} className="w-[200px] h-[150px]" />
              <div className=" bottom-0 left-0 right-0 px-4 py-2 bg-gray-900 opacity-70">
                <h3 className="text-xl pl-2">{item.tech}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TechStackComponent;
