export default function NavBar() {
  return (
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
  )
}
