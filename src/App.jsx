import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import TaskBoard from "./pages/TaskBoard.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
      <Route path="/task-board" element={<TaskBoard />} />
      </Routes>
    </Router>
  );
}

export default App;
