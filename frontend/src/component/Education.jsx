import { assets } from "../assets/assets.jsx"
function Education() {
    return (
        <div className="relative ml-65 w-[calc(100vw-16rem)] min-h-screen overflow-auto">
            <>
                <h1 className=" text-6xl flex  text-blue-400 underline ">Education</h1>
                <h2 className="text-blue-900 my-4 text-4xl underline">High School</h2>
                <div className="flex items-start gap-6 my-6">
                    <img
                        src={assets.personal_assets.scl_logo}
                        alt="School logo"
                        className="w-40 h-40 border-4 border-white object-cover"
                    />
                    <div>
                        <h2 className="text-4xl text-blue-950">{assets.personal_assets.myschool}</h2>

                        <p className="mt-2">
                            Website:{" "}
                            <a href={assets.personal_assets.collegewebsite} target="blank" rel="nooper noreferrer" className="text-blue-600 underline hover:text-blue-800">
                                {assets.personal_assets.collegewebsite}
                            </a>
                        </p>
                        <p>
                            Email: {" "}
                            <a href={assets.personal_assets.sclmail} target="blank" rel="nooper noreferrer" className="text-blue-600 underline hover:text-blue-800">
                                {assets.personal_assets.sclmail}
                            </a>
                        </p>

                        <hr className="my-2 border-t-2 border-blue-200 w-3/4" />
                        <p className="text-2xl text-blue-950 underline">10th</p>
                        <ol className="ml-4 mb-4">
                            <li>Percentage: {assets.personal_assets.tenth_percentage}%</li>
                            <li>Year: {assets.personal_assets.tnth_scltiming}</li>
                        </ol>

                        <hr className="my-2 border-t-2 border-blue-200 w-3/4" />
                        <p className="text-2xl text-blue-950 underline">12th</p>
                        <ol className="ml-4">
                            <li>Percentage: {assets.personal_assets.twelth_percentage}%</li>
                            <li>Year: {assets.personal_assets.twlth_scltiming}</li>
                        </ol>
                    </div>
                </div>


                <h2 className="text-blue-900 my-4 text-4xl underline">Bachelor's</h2>

                <div className="flex items-start gap-6 my-6">
                    <img
                        src={assets.public_assets.vitblogo}
                        alt="college logo"
                        className="w-40 h-40 border-4 border-white object-cover"
                    />
                    <div>
                        <h2 className="text-4xl text-blue-950">{assets.personal_assets.myuniversity} </h2>
                        <p className="mt-2">
                            Website:{" "}
                            <a
                                href={assets.personal_assets.collegewebsite}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 underline hover:text-blue-800"
                            >
                                {assets.personal_assets.collegewebsite}
                            </a>
                        </p>
                        <p>
                            Email:{" "}
                            <a
                                href={`mailto:${assets.personal_assets.collegemaill}`}
                                className="text-blue-600 underline hover:text-blue-800"
                            >
                                {assets.personal_assets.collegemail}
                            </a>
                        </p>

                        <hr className="my-2 border-t-2 border-blue-200 w-3/4" />

                        <ul className="ml-4">
                            <li className="mb-2">Duration: {assets.personal_assets.timing}</li>
                            <li className="mb-2">Course: {assets.personal_assets.current_course}</li>
                            <li>Current CGPA: {assets.personal_assets.current_cgpa}</li>
                        </ul>
                    </div>
                </div>

            </>
        </div>

    );
}

export default Education;