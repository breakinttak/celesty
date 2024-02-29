import Image from "next/image";

export default function Home() {
  return (
    <main>

    <div className="h-screen w-full flex flex-col  justify-center items-center    ">
      <div className="absolute text-center z-1 mb-[500px] text-[2.5rem] tracking-[1.5rem] name flex flex-1 ">
        {/* <Image 
        src={"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthumbs.dreamstime.com%2Fb%2Finfinity-symbol-purple-outlined-transparency-eps-iso-infinity-symbol-purple-outlined-transparency-eps-isolated-vector-123406669.jpg&f=1&nofb=1&ipt=57f9802477969b762a6a39ecda9a2837b178ae596a7baabd044c37f32e9d86d3&ipo=images"}
        alt="Infity image"
        width={100}
        height={20}
        /> */}
        <p className="ml-[20px]">Ashish</p></div>
      <div className="main p-[20px] pt-[20px] pb-[20px] bg-zinc-500 rounded-[50px] mt-[150px]">
        <p className="text-zinc-white text-xl text-center">Join and experience the </p>
      <p className="text-purple-400 text-xl tracking-[2rem] text-center ml-[25px] font-extrabold"> Luxury</p>
      
      <p className="mt-[20px] ml-[10px]">Username/Email</p>
      <input type="text" className="text-md rounded-full leading-[3.0rem] backInput" />
      
      <p className="mt-[15px] ml-[10px]">Password</p>
      <input type="password" className="text-md rounded-full leading-[3.0rem] backInput" />
      
      <p className="mt-[15px] ml-[10px]">Confirm password</p>
      <input type="password" className="text-md rounded-full leading-[3.0rem] backInput" />
      <br />
      <div className="w-full flex items-center justify-center">

      <button className="bg-purple-800 mt-[10px] text-center p-2 rounded-full pl-[30px] pr-[30px] "> Join now </button>
      </div>
      </div>
      <div className="mt-[15px]  ">

      <input type="checkbox" name="" id="" className="mr-[10px] text-xl" /> i have read and understood
         everything <br />  written in   terms and conditions
      </div>

        <div className="text-white mb-[15px] ">
        ______________________________

        {/* <div className="text-white mt-[15px] ">
          Continue with 
        </div> */}
        </div>

    </div>
    </main>
  );
}
