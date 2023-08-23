const LinksComponent = () => {
  return (
    <div className=" grid w-screen place-items-center bg-gray-900 text-white justify-center items-center pt-10">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
        Other Links:
      </h2>
      <a
        href="https://www.linkedin.com/in/mark-christensen1010/"
        target="_blank"
      >
        <img
          className=" w-[100px] h-[100px]"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/800px-LinkedIn_logo_initials.png"
        />
      </a>
      <br />
      <a href="https://github.com/Zipeth1010" target="_blank">
        <img
          className=" w-[150px] h-[100px]"
          src="https://1000logos.net/wp-content/uploads/2021/05/GitHub-logo.png"
        />
      </a>
    </div>
  );
};

export default LinksComponent;
