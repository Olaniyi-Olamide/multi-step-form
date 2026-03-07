import { Route, Routes } from "react-router-dom";
import YourInfo from "./pages/YourInfo";
import SelectPlan from "./pages/SelectPlan";
import AddOns from "./pages/AddOns";

function App() {
  return (
    <div className="bg-Blue200 flex justify-center items-center h-[100vh]">
      <Routes>
        <Route path="/" element={<YourInfo />} />
        <Route path="/selectplan" element={<SelectPlan />} />
        <Route path="/addons" element={<AddOns />} />
      </Routes>
    </div>
  );
}

export default App;
