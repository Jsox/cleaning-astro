

export default function HeroNotIndex({ title, description }: { title: string, description: string }) {
  return (
    <>
      <section className="relative table w-full py-36 bg-[url('../../assets/images/company/aboutus.jpg')] bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-black opacity-75"></div>
        <div className="container">
          <div className="grid grid-cols-1 pb-8 text-center mt-10">
            <h3
              className="md:text-4xl text-3xl md:leading-normal tracking-wide leading-normal font-medium text-white"
            >
              {title}
            </h3>
            <p className="text-slate-300 mt-3">{description}</p>
          </div>
        </div>

        <div className="absolute text-center z-10 bottom-5 right-0 left-0 mx-3">
          <ul className="breadcrumb tracking-[0.5px] breadcrumb-light mb-0 inline-block">
            <li className="inline breadcrumb-item uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white">
              <a href="/">Главная</a>
            </li>
            <li
              className="inline breadcrumb-item uppercase text-[13px] font-bold duration-500 ease-in-out text-white"
              aria-current="page"
            >
              {title}
            </li> 
          </ul>
        </div>
      </section>
   
      <div className="relative">
        <div className="shape absolute right-0 sm:-bottom-px -bottom-[2px] left-0 overflow-hidden z-1 text-white dark:text-slate-900">
          <svg
            className="w-full h-auto"
            viewBox="0 0 2880 48"  
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
          </svg>
        </div>
      </div>
    </>
  );
};

