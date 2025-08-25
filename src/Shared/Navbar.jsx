import React, { useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";

const Navbar = () => {
  const [state, setState] = useState(false); // hamburger menu
  const navRef = useRef();
  const [user, setUser] = useState(null); // logged-in user
  const navigate = useNavigate();
  const auth = getAuth();

  // Theme setup
  const themes = ["bg-black"];
  const [themeIndex, setThemeIndex] = useState(() => {
    const saved = localStorage.getItem("themeIndex");
    return saved ? Number(saved) : 0;
  });
  const currentTheme = themes[themeIndex];

  // Observe auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // Scroll and sticky nav
  useEffect(() => {
    const body = document.body;
    if (state) body.classList.add("overflow-hidden");
    else body.classList.remove("overflow-hidden");

    const customStyle = ["sticky-nav", "fixed", "border-b"];
    const handleScroll = () => {
      if (window.scrollY > 80) navRef.current.classList.add(...customStyle);
      else navRef.current.classList.remove(...customStyle);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [state]);

  // Theme toggle
  useEffect(() => {
    document.body.classList.remove(...themes);
    document.body.classList.add(currentTheme);
    localStorage.setItem("themeIndex", themeIndex);
  }, [themeIndex]);

  const toggleTheme = () => setThemeIndex((prev) => (prev + 1) % themes.length);

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/Login");
  };

  const navigation = [
    { title: "Home", path: "/" },
    { title: "Course List", path: "/CourseList" },
    { title: "Branches List", path: "/BranchesList" },
    { title: "Students List", path: "/StudentsList" },
    { title: "Result", path: "/StudentResult" },
    { title: "Online Exam", path: "/OnlineExam" },
    { title: "Verified Institutes", path: "/Institutes" },
    { title: "Dashboard", path: "/AdHome" },
  ];

  return (
    <nav
      ref={navRef}
      className={`w-full top-0 z-20  rounded-2xl ${currentTheme}`}
    >
      <div className="items-center px-4 max-w-screen-xl mx-auto md:px-8 lg:flex lg:justify-between">
        {/* Logo and Hamburger */}
        <div className="flex items-center justify-between py-3 lg:py-4 w-full lg:w-auto">
          <div className="flex items-center space-x-2 p-1">
            <img
              src="https://i.ibb.co/ynzvkkT7/AT-Co0-K9-ER.png"
              className="h-12 w-12 rounded-full border-2 border-amber-400"
              alt="Artifacts Logo"
            />
            <div
              onClick={toggleTheme}
              className="rounded-md text-xs transition-colors cursor-pointer text-white whitespace-pre-line"
            >
             welcome to <br/> Bangladesh 
            </div>
          </div>

          {/* Hamburger */}
          <div className="lg:hidden">
            <button
              onClick={() => setState(!state)}
              className="p-1 rounded-md text-white btn focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-9 w-9"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={state ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Navbar content */}
        <div
          className={`lg:flex lg:items-center  text-sm lg:space-x-1 ${
            state ? "block" : "hidden"
          }`}
        >
          {/* Navigation Links */}
          <ul className="flex flex-col lg:flex-row items-center space-y-2 lg:space-y-0 lg:space-x-2  lg:mt-0">
            {navigation.map((item, idx) => (
              <li key={idx} className="rounded-lg">
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-lg font-semibold btn text-blue-600 hover:text-white border border-red-500 hover:bg-gray-800 transition ${
                      isActive ? "text-amber-400" : "text-white"
                    }`
                  }
                >
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Auth Buttons */}
          <div className="flex space-x-4 mt-6 lg:mt-0">
            {!user ? (
              <>
                <NavLink
                  to="/Login"
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-lg font-semibold btn transition ${
                      isActive ? "text-amber-400" : "text-amber-400"
                    }`
                  }
                >
                  Login
                </NavLink>
                <NavLink
                  to="/Register"
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-lg font-semibold btn transition ${
                      isActive ? "text-amber-400" : "bg-black text-white"
                    }`
                  }
                >
                  Branches
                </NavLink>
              </>
            ) : (
              <button
                onClick={handleLogout}
                className="px-4 py-2 rounded-lg font-semibold btn text-red-500 hover:text-white border border-red-500 hover:bg-red-500 transition"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
