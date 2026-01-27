import { useState } from "react";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import Footer from "./components/layout/Footer";

const App = () => {
  const [authType, setAuthType] = useState(null);

  return (
    <>
      <Navbar authType={authType} setAuthType={setAuthType} />
      <Home authType={authType} />
      <Footer />
    </>
  );
};

export default App;
