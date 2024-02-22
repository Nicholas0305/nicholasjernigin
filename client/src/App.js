import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
