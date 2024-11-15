import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import App from "./App";
import Works from "./components/page/Works";
import Discord from "./components/page/Discord";
// import { useEffect } from "react";

function AppWithNavbar() {
  // const location = useLocation();

  // useEffect(() => {
  //   console.log('ReRender');
  // }, [location.pathname]);

  return (
    <div>
      {/* {location.pathname !== '/' && <Navbar />} */}
      <Routes>
        <Route index element={<App />} />
        <Route path="/works" element={<Works />} />
        <Route path="/discord" element={<Discord />}/>
      </Routes>
    </div>
  );
}

export default function Root() {
  return (
    <Router>
      <AppWithNavbar />
    </Router>
  );
}
