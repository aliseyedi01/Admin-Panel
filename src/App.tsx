import "./App.css";

import { MainSection, Sidebar } from "./Components";

function App() {
  return (
    <div className="background flex h-screen w-full">
      <Sidebar />
      <MainSection />
    </div>
  );
}

export default App;
