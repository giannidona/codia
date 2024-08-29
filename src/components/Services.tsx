export const Services = () => {
  return (
    <section className=" h-screen w-full ">
      <div className="w-[90%] max-w-[600px] mx-auto flex flex-col items-center justify-center text-center lg:w-[70%] xl:w-[45%] py-5">
        <div className="w-full border-2 border-gray-500/10 bg-gray-500/25 rounded-2xl  flex flex-col py-5 justify-center items-center ">


          <div className="w-[90%] bg-black rounded-2xl h-[90%] flex justify-center pt-10 pb-10">
            <img className="w-[70%]" src="/macbook.png" alt="macboo"/>
          </div>


          <div className="text-left w-[90%]">
            <h1 className="text-xl font-bold text-white pt-5 pb-3">Our Services</h1>
            <p className="text-white pb-8 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
              voluptates, odit, quidem, molestias quas quae magnam atque
              dignissimos nemo quibusdam aperiam. Quisquam, quas. Quisquam
              voluptas, quas quae magnam atque dignissimos nemo quibusdam
              aperiam. Quisquam, quas.
            </p>
            <button className="bg-eLightBlue rounded-lg px-4 py-2 text-white">
              Ver mas
            </button>
          </div>


        </div>
      </div>
    </section>
  );
};
