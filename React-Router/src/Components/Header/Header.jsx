import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  const [hoveredLink, setHoveredLink] = useState(null);
  const [githubData, setGithubData] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch GitHub data when hovering over GitHub link
  useEffect(() => {
    if (hoveredLink === "/github" && !githubData) {
      setLoading(true);
      fetch("https://api.github.com/users/hiteshchoudhary")
        .then((res) => res.json())
        .then((data) => {
          setGithubData(data);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }
  }, [hoveredLink, githubData]);
  // Preview content for each route
  const previews = {
    "/": {
      title: "Home",
      description: "Welcome to our homepage with latest updates and features",
      image:
        "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=400&h=250&fit=crop",
    },
    "/about": {
      title: "About Us",
      description: "Learn more about our team, mission, and values",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=250&fit=crop",
    },
    "/contact": {
      title: "Contact",
      description: "Get in touch with us for any queries or support",
      image:
        "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=400&h=250&fit=crop",
    },
  };

  const renderGithubPreview = () => {
    if (loading) {
      return (
        <div className="flex items-center justify-center h-48">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-600"></div>
        </div>
      );
    }

    if (!githubData) return null;

    return (
      <div className="bg-gradient-to-br from-slate-800 via-purple-800 to-slate-800 p-4">
        {/* Mini Profile Card */}
        <div className="flex items-center gap-4 mb-3">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-md opacity-50"></div>
            <img
              src={githubData.avatar_url}
              alt="avatar"
              className="relative w-12 h-12 rounded-full border-2 border-white/50"
            />
          </div>
          <div>
            <h4 className="text-white font-bold text-sm">{githubData.name}</h4>
            <p className="text-gray-300 text-xs">@{githubData.login}</p>
          </div>
        </div>

        {/* Mini Stats */}
        <div className="grid grid-cols-4 gap-2 mb-3">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 text-center border border-white/20">
            <div className="text-white font-bold text-sm">
              {githubData.followers}
            </div>
            <div className="text-gray-300 text-xs">Followers</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 text-center border border-white/20">
            <div className="text-white font-bold text-sm">
              {githubData.following}
            </div>
            <div className="text-gray-300 text-xs">Following</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 text-center border border-white/20">
            <div className="text-white font-bold text-sm">
              {githubData.public_repos}
            </div>
            <div className="text-gray-300 text-xs">Repos</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 text-center border border-white/20">
            <div className="text-white font-bold text-sm">
              {githubData.public_gists}
            </div>
            <div className="text-gray-300 text-xs">Gists</div>
          </div>
        </div>

        {/* Bio */}
        {githubData.bio && (
          <p className="text-gray-200 text-xs mb-3 line-clamp-2">
            {githubData.bio}
          </p>
        )}

        {/* Location & Company */}
        <div className="flex gap-2 flex-wrap">
          {githubData.location && (
            <span className="bg-white/10 px-2 py-1 rounded-full text-xs text-white border border-white/20">
              📍 {githubData.location}
            </span>
          )}
          {githubData.company && (
            <span className="bg-white/10 px-2 py-1 rounded-full text-xs text-white border border-white/20">
              🏢 {githubData.company}
            </span>
          )}
        </div>
      </div>
    );
  };

  const renderPreview = (path) => {
    const preview = previews[path];
    return (
      <>
        <div className="relative h-32 overflow-hidden">
          <img
            src={preview.image}
            alt="Preview"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-bold text-gray-800 mb-2">
            {preview.title}
          </h3>
          <p className="text-sm text-gray-600">{preview.description}</p>
        </div>
      </>
    );
  };

  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img
              src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
              className="mr-3 h-12"
              alt="Logo"
            />
          </Link>
          <div className="flex items-center lg:order-2">
            <Link
              to="#"
              className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Log in
            </Link>
            <Link
              to="#"
              className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Get started
            </Link>
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li
                className="relative"
                onMouseEnter={() => setHoveredLink("/")}
                onMouseLeave={() => setHoveredLink(null)}
              >
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } hover:text-orange-600`
                  }
                >
                  Home
                </NavLink>

                {hoveredLink === "/" && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden z-50 animate-fadeIn">
                    {renderPreview("/")}
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-l border-t border-gray-200"></div>
                  </div>
                )}
              </li>

              <li
                className="relative"
                onMouseEnter={() => setHoveredLink("/about")}
                onMouseLeave={() => setHoveredLink(null)}
              >
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } hover:text-orange-600`
                  }
                >
                  About
                </NavLink>

                {hoveredLink === "/about" && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden z-50 animate-fadeIn">
                    {renderPreview("/about")}
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-l border-t border-gray-200"></div>
                  </div>
                )}
              </li>

              <li
                className="relative"
                onMouseEnter={() => setHoveredLink("/contact")}
                onMouseLeave={() => setHoveredLink(null)}
              >
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } hover:text-orange-600`
                  }
                >
                  Contact
                </NavLink>

                {hoveredLink === "/contact" && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden z-50 animate-fadeIn">
                    {renderPreview("/contact")}
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-l border-t border-gray-200"></div>
                  </div>
                )}
              </li>

              <li
                className="relative"
                onMouseEnter={() => setHoveredLink("/github")}
                onMouseLeave={() => setHoveredLink(null)}
              >
                <NavLink
                  to="/github"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } hover:text-orange-600`
                  }
                >
                  Github
                </NavLink>

                {hoveredLink === "/github" && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden z-50 animate-fadeIn">
                    {renderGithubPreview()}
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-l border-t border-gray-200"></div>
                  </div>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
