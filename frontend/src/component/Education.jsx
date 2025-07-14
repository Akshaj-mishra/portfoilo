import { assets } from "../assets/assets.jsx";

function Education() {
  return (
    <div className="ml-16 items-center justify-center min-h-screen  px-4 py-8 relative w-[calc(100vw-4rem)] h-screen overflow-auto bg-gray-100">
      <div className="mx-auto w-full max-w-4xl bg-white shadow-md rounded-lg p-6 border border-gray-200">
        <h1 className="text-4xl font-bold text-blue-500 mb-8 text-center underline">Education</h1>

        <h2 className="text-blue-900 text-2xl font-semibold underline mb-4">High School</h2>
        <div className="flex items-start gap-6 mb-8">
          <img
            src={assets.personal_assets.scl_logo}
            alt="School logo"
            className="w-32 h-32 border-4 border-white object-cover"
          />
          <div className="flex-1">
            <h3 className="text-xl font-bold text-blue-950">{assets.personal_assets.myschool}</h3>
            <div className="flex flex-wrap items-center gap-2 text-sm mt-2 text-blue-600">
              <a
                href={assets.personal_assets.sclwebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-blue-800"
              >
                {assets.personal_assets.sclwebsite}
              </a>
              <span className="text-blue-400">|</span>
              <a
                href={`mailto:${assets.personal_assets.sclmail}`}
                className="underline hover:text-blue-800"
              >
                {assets.personal_assets.sclmail}
              </a>
            </div>

            <hr className="my-4 border-t-2 border-blue-200 w-full" />

            <div className="flex flex-col md:flex-row gap-8 mt-4">

              <div className="flex-1">
                <p className="text-lg font-semibold text-blue-950 underline">10th</p>
                <ul className="ml-4 list-disc">
                  <li>Percentage: {assets.personal_assets.tenth_percentage}%</li>
                  <li>Year: {assets.personal_assets.tnth_scltiming}</li>
                </ul>
              </div>


              <div className="hidden md:block w-px bg-blue-300"></div>

    
              <div className="flex-1">
                <p className="text-lg font-semibold text-blue-950 underline">12th</p>
                <ul className="ml-4 list-disc">
                  <li>Percentage: {assets.personal_assets.twelth_percentage}%</li>
                  <li>Year: {assets.personal_assets.twlth_scltiming}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

       
        <h2 className="text-blue-900 text-2xl font-semibold underline mb-4">Bachelor's</h2>
        <div className="flex items-start gap-6">
          <img
            src={assets.public_assets.vitblogo}
            alt="College logo"
            className="w-32 h-32 border-4 border-white object-cover"
          />
          <div className="flex-1">
            <h3 className="text-xl font-bold text-blue-950">{assets.personal_assets.myuniversity}</h3>
            <div className="flex flex-wrap items-center gap-2 text-sm mt-2 text-blue-600">
              <a
                href={assets.personal_assets.collegewebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-blue-800"
              >
                {assets.personal_assets.collegewebsite}
              </a>
              <span className="text-blue-400">|</span>
              <a
                href={`mailto:${assets.personal_assets.collegemail}`}
                className="underline hover:text-blue-800"
              >
                {assets.personal_assets.collegemail}
              </a>
            </div>

            <hr className="my-4 border-t-2 border-blue-200 w-full" />

            <ul className="ml-4 list-disc">
              <li>Duration: {assets.personal_assets.timing}</li>
              <li>Course: {assets.personal_assets.current_course}</li>
              <li>Current CGPA: {assets.personal_assets.current_cgpa}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
