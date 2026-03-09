import Addon from "../components/Addon";
import SideBar from "../components/SideBar";

function AddOns() {
  return (
    <div className="bg-Blue200 md:bg-Blue100 md:w-[80%] md:h-[80%] rounded-lg md:p-[1rem] flex flex-col md:flex-row md:gap-[4rem]">
      <SideBar />
      <Addon />
    </div>
  );
}

export default AddOns;
