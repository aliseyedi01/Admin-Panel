import { AdminRoute, AuthRoute } from "./Routes";
import "./App.css";
import useAuth from "./Hooks/useAuth";

function App() {
  const { userState: user } = useAuth();

  return <div>{!user ? <AuthRoute /> : <AdminRoute />}</div>;
}

export default App;
