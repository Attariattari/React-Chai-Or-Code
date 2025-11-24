import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Layout from "./Layout";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import User from "./Components/User/User";
import Github, { githubinfoloader } from "./Components/Github/Github";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="user/:userId" element={<User />} />
          <Route loader={githubinfoloader} path="github" element={<Github />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
