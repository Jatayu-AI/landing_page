export default function Navbar({ dark, setDark }) {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white dark:bg-gray-900 dark:text-white shadow-md">
      {/* Logo Section */}
      <div className="flex items-center gap-3">
        <img
          src="/images/logo.jpg"
          alt="Jatayuv AI Logo"
          className="w-12 h-12 rounded-md object-cover"
        />
        <h1 className="text-2xl font-bold">Jatayuv AI</h1>
      </div>

      <div className="flex items-center gap-6">
        <a href="#home" className="hover:underline">Home</a>
        <a href="#about" className="hover:underline">About</a>
        <a href="#contact" className="hover:underline">Contact</a>
        <a href="#login" className="hover:underline">Login</a>

        {/* 🌙 / ☀️ Toggle */}
        <button
          onClick={() => setDark(!dark)}
          className="px-3 py-1 border rounded border-gray-400 dark:border-gray-600"
        >
          {dark ? "☀️ Light" : "🌙 Dark"}
        </button>
      </div>
    </nav>
  );
}
