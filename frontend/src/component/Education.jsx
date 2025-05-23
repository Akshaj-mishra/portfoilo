import assets from "../assets/assets.jsx"
function Education(){
    return(
        <div className="relative ml-64 w-[calc(100vw-16rem)] h-screen overflow-hidden">
            <>
            <h1 className=" text-6xl flex  text-blue-400 underline ">Education</h1>
            <h2 className="text-blue-900 my-4 text-4xl">High School</h2>
            <img src={assets.personal_assets.scl_logo} alt = "scl logo here"
              className="w-38 h-38 rounded-full border-4 border-white mb-4 object-cover"  
            />
            </>
        </div>

    );
}

export default Education;