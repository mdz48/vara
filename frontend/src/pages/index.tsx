import { Route, Routes, useLocation } from "react-router-dom";
// import Home from "./Home";
import Home from "./home/home";
import Register from "./register/Register";

const routes = [
  { path: "/", Page: Home },
  { path: "/register", Page: Register },
  
  // { path: "/house", Page: House },
];

function Routing() {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      {routes.map(({ path, Page }) => (
        <Route key={path} path={path} element={<Page />} />
      ))}
    </Routes>
  );
}

export { Routing };
