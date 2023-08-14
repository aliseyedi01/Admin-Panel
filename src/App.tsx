import { AdminRoute, AuthRoute } from "./Routes";
import "./App.css";
import useAuth from "./Hooks/useAuth";

function App() {
  const { user } = useAuth();
  console.log("user exist", user);

  return <div>{user ? <AdminRoute /> : <AuthRoute />}</div>;
}

export default App;
