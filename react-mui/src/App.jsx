export default function App() {
  return (
    <>
      <nav className="bg-red-400 flex flex-row justify-between py-8 px-4 text-lg border-t-4 border-indigo-800 items-center">
        <div className="flex flex-row space-x-2 items-center">
          <p className="text-white text-2xl mx-2">Kalvium</p>
          <p className="text-green-200 hover:text-green-600 cursor-pointer">
            About Us
          </p>
          <p className="text-green-200 hover:text-green-600 cursor-pointer">
            Contacts
          </p>
          <p className="text-green-200 hover:text-green-600 cursor-pointer">
            Courses
          </p>
        </div>
        <div className="border-2 border-white p-2">
          <p className="text-white ">Login</p>
        </div>
      </nav>
      <div>
        <button className="p-4 px-5 m-8 bg-blue-600 text-white font-semibold rounded-lg">
          Button One
        </button>
      </div>
      <div className="bg-red-300/40 m-6 p-5 border-2 border-red-600 rounded-md text-red-700">
        <span className="font-bold">Alert! </span>
        <span className="font-semibold">This is awesome!</span>
      </div>
      <div className="flex content-center justify-center">
        <div className="flex flex-row space-x-6 justify-center shadow-xl w-90 m-2 p-8 items-center content-center">
          <div>
            <img
              src="https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png"
              alt="kalvium Logo"
              className="h-7"
            />
          </div>
          <div>
            <h2 className="font-bold text-xl">Kalvium Store</h2>
            <h3>You have a new course!</h3>
          </div>
        </div>
      </div>

      <footer className="bg-blue-800 text-white text-center h-72 relative top-40">
        <p className="p-20 font-semibold text-xl">© 2024 Copyright : Kalvium</p>
        <p className="font-bold text-xl">Created by Swasti ⭐</p>
      </footer>
    </>
  );
}
