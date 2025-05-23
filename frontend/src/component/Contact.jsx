import { FaLinkedin, FaFacebook, FaEnvelope } from "react-icons/fa";
import { assets } from "../assets/assets.jsx"
function ContactUs() {
  return (
    <div className="ml-64 items-center justify-center min-h-screen bg-white px-4 py-8 relative w-[calc(100vw-16rem)] h-screen overflow-hidden">
      <div className="ml-80 w-full max-w-xl bg-white shadow-md rounded-lg p-6 border border-gray-200">
        <h1 className="text-4xl font-bold text-blue-500 mb-6 text-center underline"> Contact Us</h1>
        
        <h1 label htmlFor="exampleFormControlInput1" className="block form-label text-blue-900 font-semibold">
          Name 
        </h1>
        <input
          type="text"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          id="nameInput"
          placeholder=" Your Name"
        />

        <h1 label htmlFor="exampleFormControlInput1" className="block form-label text-blue-900 font-semibold">
          Email address
        </h1 >
        <input
          type="email"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          id="exampleFormControlInput1"
          placeholder=" name@example.com"
        />
        <h1 label htmlFor="exampleFormControlTextarea1" className="block form-label text-blue-900 font-semibold">
          Message
        </h1 >
        <textarea
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          id="exampleFormControlTextarea1"
          rows="3"
          placeholder=" Your message here..."
        ></textarea>

        <div className="mt-4"><button className=" bg-gray-800 hover:bg-blue-500 text-white font-bold py-3 px-3 rounded">
            Contact Us

        </button></div>
        
      </div>

      <hr className="my-2 border-t-2 border-gray-800 w-11/12" />
      <div className="mt-8 text-center">
        <h1 className="text-2xl font-semibold text-blue-500"> Contact</h1>
        <p  className="ml-80 flex text-blue-900 "><em>{assets.personal_assets.emailid}</em></p>
        <p className="ml-80 flex text-blue-900 "><em>{assets.personal_assets.contact_number}</em></p>
        <div className="flex justify-center space-x-6 text-2xl">
          <a href={assets.personal_assets.linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-blue-600 text-2xl hover:text-blue-800" />
            </a>
        
          <a href={assets.personal_assets.mail} className="text-blue-700 hover:text-blue-900">
            <FaEnvelope className="text-gray-600 text-2xl hover:text-blue-800" />
          </a>
        </div>
        </div>
    </div>
  );
}

export default ContactUs;

