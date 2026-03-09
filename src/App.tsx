import { Route, Routes } from "react-router-dom";
import YourInfo from "./pages/YourInfo";
import SelectPlan from "./pages/SelectPlan";
import AddOns from "./pages/AddOns";
import Summary from "./pages/Summary";
import { FormProvider } from "./context/FormContext";

function App() {
  return (
    <div className="bg-Blue200 md:flex md:justify-center md:items-center h-[100vh]">
      <FormProvider>
        <Routes>
          <Route path="/" element={<YourInfo />} />
          <Route path="/selectplan" element={<SelectPlan />} />
          <Route path="/addons" element={<AddOns />} />

          <Route path="/summary" element={<Summary />} />
        </Routes>
      </FormProvider>
    </div>
  );
}

export default App;
