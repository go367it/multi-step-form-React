import "./App.css";
import AppNavbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import { Routes, Route } from "react-router-dom";
import { LoginProvider } from "./context/LoginContext";

function App() {
  return (
    <div classNameName="App">
      <LoginProvider>
        <AppNavbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </LoginProvider>
    </div>
  );
}

export default App;
