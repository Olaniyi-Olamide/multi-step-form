import { NavLink } from "react-router-dom";

function SideBar() {
  return (
    <aside className="bg-center bg-cover basis-[30%] p-[2rem] rounded-lg bg-img flex flex-col gap-[1.5rem]">
      <div className="flex items-center gap-[1.5rem]">
        <NavLink to="/">
          <div className="border-[0.1rem] border-Blue50 text-bold rounded-full w-[2.3rem] h-[2.3rem] text-center flex items-center justify-center">
            <p className="text-[1.2rem] font-bold">1</p>
          </div>
        </NavLink>
        <div>
          <p className="text-Grey500 font-semibold">Step 1</p>
          <h2 className="font-bold text-[1rem] text-Blue50">YOUR INFO</h2>
        </div>
      </div>

      <div className="flex items-center gap-[1.5rem]">
        <NavLink to="/selectplan">
          <div className="border-[0.1rem] border-Blue50 text-bold rounded-full w-[2.3rem] h-[2.3rem] text-center flex items-center justify-center">
            <p className="text-[1.2rem] text-Blue50 font-bold">2</p>
          </div>
        </NavLink>
        <div>
          <p className="text-Grey500 font-semibold">Step 2</p>
          <h2 className="font-bold text-[1rem] text-Blue50">SELECT PLAN</h2>
        </div>
      </div>
      <div className="flex items-center gap-[1.5rem]">
        <NavLink to="/addons">
          <div className="border-[0.1rem] border-Blue50 text-bold rounded-full w-[2.3rem] h-[2.3rem] text-center flex items-center justify-center">
            <p className="text-[1.2rem] text-Blue50 font-bold">3</p>
          </div>
        </NavLink>
        <div>
          <p className="text-Grey500 font-semibold">Step 3</p>
          <h2 className="font-bold text-[1rem] text-Blue50">ADD-ONS</h2>
        </div>
      </div>
      <div className="flex items-center gap-[1.5rem]">
        <NavLink to="/summary">
          <div className="border-[0.1rem] border-Blue50 text-bold rounded-full w-[2.3rem] h-[2.3rem] text-center flex items-center justify-center">
            <p className="text-[1.2rem] text-Blue50 font-bold">4</p>
          </div>
        </NavLink>
        <div>
          <p className="text-Grey500 font-semibold">Step 4</p>
          <h2 className="font-bold text-[1rem] text-Blue50">SUMMARY</h2>
        </div>
      </div>
    </aside>
  );
}

export default SideBar;
