import assets from "../assets/assets.jsx"
function Education(){
    return(
        <div className="relative ml-65 w-[calc(100vw-16rem)] h-screen overflow-hidden">
            <>
            <h1 className=" text-6xl flex  text-blue-400 underline ">Education</h1>
            <h2 className="text-blue-900 my-4 text-4xl">High School</h2>
            <h2 className="text:4xl text-blue-950">{assets.personal_assets.myschool}</h2>
            <img src={assets.personal_assets.scl_logo} alt = "scl logo here"
              className="w-38 h-38  border-4 border-white mb-4 object-cover"  
            />
            <ul>
                <p className="text-2xl text-blue-950 unerline ">10th</p>
                <ol>
                    <li>percentage:  {assets.personal_assets.tenth_percentage}</li>
                    <li>duration:  {assets.personal_assets.tnth_scltiming}</li>
                </ol>
                <p className="text-2xl text-blue-950 unerline ">12th</p>
                <ol>
                    <li>percentage:  {assets.personal_assets.twelth_percentage}</li>
                    <li>duration:  {assets.personal_assets.twlth_scltiming}</li>
                </ol>   
            </ul>
            <h2 className="text-blue-900 my-4 text-4xl">Bachelor's</h2>
            <img src={assets.public_assets.vitblogo} alt ="college logo"/>
            <h2 className="text:4xl text-blue-950">{assets.personal_assets.myuniversity}</h2>
                <ul>
                <ol>
                    <li>duration:  {assets.personal_assets.current_}</li>
                    <li>Course:  {assets.personal_assets.current_course}</li>
                    <li>duration:  {assets.personal_assets.current_cgpa}</li>

                </ol>
                </ul>
            </>
        </div>

    );
}

export default Education;