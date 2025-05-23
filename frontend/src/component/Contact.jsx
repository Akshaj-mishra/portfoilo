
function ContactUs() {
  return (
    <div className="relative ml-64 w-[calc(100vw-16rem)] h-screen overflow-hidden">
      <div className="mb-3 ">
        <h1 className="text-6xl flex text-black underline">Contact Us</h1>
        
        <h1 label htmlFor="exampleFormControlInput1" className="form-label">
          Name 
        </h1>
        <input
          type="text"
          className="form-control"
          id="nameInput"
          placeholder=" Your Name"
        />

        <h1 label htmlFor="exampleFormControlInput1" className="form-label">
          Email address
        </h1 >
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder=" name@example.com"
        />
      </div>

      <div className="mb-3">
        <h1 label htmlFor="exampleFormControlTextarea1" className="form-label">
          Message
        </h1 >
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          placeholder=" Your message here..."
        ></textarea>
      </div>
      <div className="mt-4">
        <button className="bg-gray-800 hover:bg-blue-500 text-white font-bold py-3 px-3 rounded">
          Contact Us

        </button>
      </div>
      <div className="mb-3">
        <h1 className="text-4xl flex text-black underline">Contact</h1>
        <p  className="text-2xl flex text-black "><em>hi@example.com</em></p>
        <p className="text-2xl flex text-black "><em>6544845468</em></p>
        </div>
    </div>
  );
}

export default ContactUs;

