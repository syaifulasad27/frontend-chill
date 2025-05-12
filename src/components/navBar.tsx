import { useState, useRef, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"

const NavBar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [user, setUser] = useState<{ name: string } | null>(null)
    const [isProfileOpen, setProfileOpen] = useState(false)
    const [isMobileOpen, setMobileOpen] = useState(false)
  
    const profileRef = useRef<HTMLDivElement>(null)
    const navigate = useNavigate()
  
    useEffect(() => {
      const storedUser = localStorage.getItem("user")
      if (storedUser) {
        setUser(JSON.parse(storedUser))
        setIsLoggedIn(true)
      }
    }, [])
  
    const handleLogout = () => {
      localStorage.removeItem("user")
      setIsLoggedIn(false)
      setUser(null)
      navigate("/login")
    }
  
    useEffect(() => {
      const handleClickOutside = (e: MouseEvent) => {
        if (profileRef.current && !profileRef.current.contains(e.target as Node)) {
          setProfileOpen(false)
        }
      }
      document.addEventListener("click", handleClickOutside)
      return () => document.removeEventListener("click", handleClickOutside)
    }, [])

  return (
    <>
      <nav className="px-4 lg:px-14 py-3 flex justify-between items-center bg-[#181A1C]">
        <div className="flex items-center">
          <Link to="/">
            <img src={'/assets/img/logo-chill.webp'} alt="Chill Logo" className="h-10 mr-6 lg:mr-10" />
          </Link>
          <div className="hidden md:flex space-x-4">
            <Link to="#series" className="text-gray-300 hover:text-white">Series</Link>
            <Link to="/film" className="text-gray-300 hover:text-white">Film</Link>
            {isLoggedIn && <Link to="/favorite" className="text-gray-300 hover:text-white">Daftar Saya</Link>}
          </div>
        </div>
        <div className="flex items-center">
          <div className="relative hidden lg:block" ref={profileRef}>
          {isLoggedIn ? (
            <>
            <button onClick={() => setProfileOpen(!isProfileOpen)} className="flex items-center focus:outline-none cursor-pointer">
              <img src={'/assets/img/avatar.webp'} alt={user?.name} className="rounded-full w-8 h-8 lg:w-10 lg:h-10" />
              <svg className="w-4 h-4 lg:w-5 lg:h-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isProfileOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-[#181A1C] text-white rounded-lg shadow-lg z-20">
                <Link className="block px-4 py-2 text-sm hover:bg-gray-600" to="/profile">Profil Saya</Link>
                <Link className="block px-4 py-2 text-sm hover:bg-gray-600" to="/subscription">Ubah Ke Premium</Link>
                <Button onClick={handleLogout} className="block px-4 py-2 text-sm hover:bg-gray-600 w-full text-left">Keluar</Button>
              </div>
            )}
            </>
            ) : (
              <Link to="/login" className="bg-[#0F1E93] text-white text-sm px-3 py-1.5 rounded-full hover:bg-[#0c187a] transition">Masuk</Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button onClick={() => setMobileOpen(!isMobileOpen)} className="focus:outline-none text-white">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {isMobileOpen && (
        <div className="md:hidden bg-[#181A1C] px-4 py-2 space-y-2">
          <Link to="#series" className="block text-gray-300 hover:text-white">Series</Link>
          <Link to="/film" className="block text-gray-300 hover:text-white">Film</Link>
          {isLoggedIn ? (
            <>
          <Link to="/favorite" className="block text-gray-300 hover:text-white">Daftar Saya</Link>
          <div className="py-2 space-y-2 border-t border-gray-700">
            <Link to="/profile" className="block text-gray-300 hover:text-white">Profil Saya</Link>
            <Link to="/subscription" className="block text-gray-300 hover:text-white">Ubah Ke Premium</Link>
            <button onClick={handleLogout} className="block text-gray-300 hover:text-white w-full text-left">Keluar</button>
          </div>
          </>
            ) : (
              <Link to="/login" className="block text-gray-300 hover:text-white">Masuk</Link>
            )}
        </div>
      )}
    </>
  )
}

export default NavBar