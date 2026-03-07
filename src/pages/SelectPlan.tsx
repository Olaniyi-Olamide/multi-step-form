import Plans from "../components/Plans";
import SideBar from "../components/SideBar";

function SelectPlan() {
  return (
    <div className="bg-Blue100 md:w-[80%] md:h-[80%] rounded-lg p-[1rem] flex gap-[4rem]">
      <SideBar />
      <Plans />
    </div>
  );
}

export default SelectPlan;
