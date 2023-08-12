import "./App.css";
import { useLocation } from "react-router-dom";
import { AdminRoute, AuthRoute } from "./Routes";

function App() {
  const location = useLocation();

  return <div>{!location.pathname.includes("/auth") ? <AuthRoute /> : <AdminRoute />}</div>;
}

export default App;
