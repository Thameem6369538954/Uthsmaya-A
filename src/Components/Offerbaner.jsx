import KK from "../Images/KK.jpg"

const Offerbaner = () => {
    return (
        <div>
  <div className="grid place-items-center min-h-[60vh]">
        <div
        style={{
            backgroundImage : `url(${KK})`,
            backgroundSize:"cover",
            backgroundPosition:"center"
        }}
        className=" min-h-[350px] w-full max-w-6xl rounded-sm">
            <div className=" w-full max-w-xl min-h-[350px] flex flex-col items-center justify-center">
          <h1 className="font-[Heading] text-5xl text-white">Big Sale Offer</h1>
            <p className="font-[Cur] text-5xl text-white">Coming Zoon..........</p>
            </div>
        </div>
      </div>
        </div>
    
    );
  };
  
  export default Offerbaner;
  