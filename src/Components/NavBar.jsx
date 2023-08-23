const NavBar = () => {
  return (
    <div className="fixed top-0 w-screen h-36 bg-gray-900 text-white shadow-lg space-x-8 text-2xl z-40">
      <div className="flex justify-center items-center">
        <img
          src={require("../Assets/Logo.png")}
          alt="logo"
          className=" h-36 z-40"
        ></img>
        <div className=" fixed invisible right-0 flex-row shadow-lg space-x-8 mr-11 pt-4 md:visible z-30">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#techstack">Tech Stack</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
