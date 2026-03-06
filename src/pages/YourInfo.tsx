import PersonalInfoForm from "../components/PersonalInfoForm";
import SideBar from "../components/SideBar";

function YourInfo() {
  return (
    <div className="bg-Blue100 md:w-[80%] md:h-[80%] rounded-lg p-[1rem] flex gap-[4rem]">
      <SideBar />
      <PersonalInfoForm />
    </div>
  );
}

export default YourInfo;
