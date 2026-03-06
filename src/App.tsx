import { Route, Router, Routes } from "react-router-dom";
import YourInfo from "./pages/YourInfo";
import SelectPlan from "./pages/SelectPlan";

function App() {
  return (
    <div className="bg-Blue200 min-h-[100vh] flex items-center justify-center">
      <Router>
        <Routes>
          <Route path="/" element={<YourInfo />} />
          <Route path="/selectplan" element={<SelectPlan />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
