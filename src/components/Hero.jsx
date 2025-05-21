import logo from "../assets/logo2.svg";

const Hero = () => {
  return (
    <div className="">
      <div className="w-full h-99 text-gray-100 bg-slate-800 flex justify-center items-center">
        <div className="w-[32%] h-full">
          <div className="w-full h-full flex justify-center flex-col gap-5">
            <h1 className="text-6xl font-bold">Petani Kode</h1>
            <p className="text-2xl font-light">
              Belajar budidaya kode <i>(coding)</i> dengan tutorial yang mudah
              dipahami. <i>Mostly</i> pakai Linux.
            </p>
            <div className="gap-2 flex text-center">
              <button className="w-35 bg-teal-500 p-2 rounded-[7px] hover:bg-teal-700">
                Mulai Belajar
              </button>
              <button className="w-40 border-1 border-teal-400/50 bg-teal-400/10 p-2 rounded-[7px] hover:bg-teal-700">
                Join Newsletter
              </button>
            </div>
          </div>
        </div>
        <div className="w-[32%] h-full">
          <img src={logo} className="h-[100%] mt-20 ml-30" alt="" />
        </div>
      </div>
      <div className="w-full h-45 bg-slate-50 flex justify-center items-center">
        <div className="h-[70%] w-[64%] gap-1 flex flex-col">
            <p className="font-bold text-[15px] text-teal-600">UPDATE</p>
            <h1 className="font-bold text-3xl text-black">Apa yang baru di Petani Kode? 🔥</h1>
            <p className="font-light text-slate-500 text-[20px] ">Baca artikel terbaru yang masih fresh dan hangat.</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
