export default function Navbar() {
  return (
    <header className="bg-white w-screen px-6 py-4 flex items-center justify-between shadow-md">
      {/* Sol Taraf */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full">
          <span className="text-lg font-bold">F</span>
        </div>
      </div>

      {/* Navigasyon Linkleri */}
      <nav className="flex items-center space-x-6">
        <a href="#" className="text-gray-600 font-medium hover:text-black">
          Skills
        </a>
        <a href="#" className="text-gray-600 font-medium hover:text-black">
          Projects
        </a>
        <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">
          Hire Me
        </button>
      </nav>

      {/* Dil Değiştirici */}
      <button className="text-gray-600 font-medium">TÜRKÇE'YE GEÇ</button>
      <button className="text-gray-600 font-medium">Dark Mode</button>
    </header>
  );
}
