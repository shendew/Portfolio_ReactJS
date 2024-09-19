import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./HomePage";
import { Confirm } from "./components/Confirm/Confirm";

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Routes>

      <Route path="/" Component={HomePage}/>
      <Route path="confirm" Component={Confirm}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
