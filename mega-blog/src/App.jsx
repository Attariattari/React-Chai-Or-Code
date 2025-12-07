import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./Store/AuthSlice";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return !loading ? (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />

      <main className="flex-1 w-full max-w-6xl mx-auto px-4 py-6">
        <div className="min-h-[60vh] bg-white shadow-md rounded-xl p-6">
          <Outlet /> {/* 👈 CHILD ROUTES RENDER HERE */}
        </div>
      </main>

      <Footer />
    </div>
  ) : null;
}

export default App;
