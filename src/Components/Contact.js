import ContactUs from "../assets/Images/contact_us.png";

const Contact = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-around gap-4 lg:items-center lg:mx-auto mt-10 mb-10">
      <img
        className="scale-110 mx-auto h-72 md:scale-125 md:h-96 lg:pl-8"
        src={ContactUs}
        alt="Contact us"
      />

      <div className="relative mx-auto flex flex-col justify-center w-4/6 lg:w-3/6 overflow-hidden">
        <div className="w-full p-6 m-auto rounded-md bg-purple-200 hover:shadow-xl hover:shadow-purple-400 ring-purple-600 lg:max-w-xl transition ease-in-out duration-500">
          <h1 className="text-3xl font-semibold text-center text-purple-100 bg-purple-700 p-4 m-4 rounded-md uppercase">
            Contact Us
          </h1>
          <form className="mt-6">
            <div className="mb-2">
              <label>
                <span className="text-gray-700">Your name</span>
                <input
                  type="text"
                  name="name"
                  className="
            w-full
            block px-5 py-2 mt-2
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40
          "
                  placeholder="XYZ"
                />
              </label>
            </div>
            <div className="mb-2">
              <label>
                <span className="text-gray-700">Email address</span>
                <input
                  name="email"
                  type="email"
                  className="
            block
            w-full
            mt-2 px-5 py-2
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40
          "
                  placeholder="xyz@example.com"
                  required
                />
              </label>
            </div>
            <div className="mb-2">
              <label>
                <span class="text-gray-700">Message</span>
                <textarea
                  name="message"
                  className="
            block
            w-full
            mt-2 px-5 py-8
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40
          "
                  placeholder="Type your message here..."
                  rows="5"
                ></textarea>
              </label>
            </div>

            <div class="mb-2 py-2">
              <button type="submit">
                <a
                  href="/"
                  class="rounded relative inline-flex group items-center justify-center px-3.5 py-2 mt-2 cursor-pointer border-b-4 border-l-2 active:border-purple-600 active:shadow-none shadow-lg bg-gradient-to-tr from-purple-600 to-purple-500 border-purple-700 text-white"
                >
                  <span class="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-16 group-hover:h-16 sm:group-hover:w-20 sm:group-hover:h-20 md:group-hover:w-24 md:group-hover:h-24 lg:group-hover:w-32 lg:group-hover:h-32 opacity-10"></span>
                  <span class="relative">Submit</span>
                </a>
              </button>
            </div>
            <div></div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
