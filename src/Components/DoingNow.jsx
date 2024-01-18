const DoingNow = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 py-12 px-5 bg-gray-900 text-white justify-center items-center">
      <div className=" flex items-center justify-center pt-16">
        <a
          target="_blank"
          href="https://www.coursera.org/professional-certificates/ibm-full-stack-cloud-developer?psafe_param=1&utm_medium=sem&utm_source=gg&utm_campaign=B2C_EMEA__coursera_FTCOF_career-academy_pmax-nonNRL-within-14d-country-UK-country-GB&campaignid=20061994707&adgroupid=&device=c&keyword=&matchtype=&network=x&devicemodel=&adposition=&creativeid=&hide_mobile_promo&gclid=CjwKCAjw6eWnBhAKEiwADpnw9oIm4qYCYsC_fUMH8lb6eMG7ta7ctbD3hghgvIKKo_Q8qyniUY16lxoC3JkQAvD_BwE"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg"
            className=" w-[400px]"
          ></img>
        </a>
      </div>
      <div className=" order-first lg:order-last">
        <h2 class="mb-4 pt-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
          What I am Doing now
        </h2>
        <p className=" text-center">
          After finishing my professional certificate in Software Development
          offered by IBM (click on the IBM logo to view the course), I landed
          some contract work with 'Traced Mobile Threat Defence' as a junior web
          developer, and am looking for my first full time job as a full stack
          software/web developer. The contract has since ended, and I am keeping
          up my practice with coding by completing different coding exercises on
          websites like hackerrank and leetcode to help with any opportunity
          that comes my way.
          <br />
          <br />
          In addition, I have completed additional courses from Codecademy and
          Freecodecamp to further my learning.
        </p>
      </div>
    </div>
  );
};

export default DoingNow;
