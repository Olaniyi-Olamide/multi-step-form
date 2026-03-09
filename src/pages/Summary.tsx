import FinishingUp from "../components/FinishingUp";
import SideBar from "../components/SideBar";

function Summary() {
  return (
    <div className="bg-Blue200 md:bg-Blue100 md:w-[80%] md:h-[80%] rounded-lg md:p-[1rem] flex flex-col md:flex-row md:gap-[4rem]">
      <SideBar />
      <FinishingUp />
    </div>
  );
}

export default Summary;
