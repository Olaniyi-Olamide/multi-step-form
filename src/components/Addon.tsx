import GoBackButton from "./GoBackButton";
import NextStepButton from "./NextStepButton";

function Addon() {
  return (
    <section className="flex flex-col gap-[2rem] basis-[70%] px-[2rem]">
      <header>
        <h1 className="text-Blue950 font-bold text-[1.8rem]">Pick add-ons</h1>
        <p className="text-Grey500 font-semibold">
          Add-ons help enhance your gaming experience
        </p>
      </header>

      <div className="flex flex-col gap-[1rem]">
        <div className="w-[70%] rounded-lg px-[1rem] py-[1.2rem] flex justify-between items-center border-[0.12rem] border-Blue950 bg-Blue200">
          <div className="flex items-center gap-[2rem]">
            <input type="checkbox" className="h-12 w-4" checked />
            <div>
              <h4 className="text-[1rem] text-Blue950 font-bold">
                Online service
              </h4>
              <p className="text-[0.8rem] font-semibold text-Grey500">
                Access to multiplayer games
              </p>
            </div>
          </div>

          <span className="text-Purple600 text-[0.8rem]">+$10/yr</span>
        </div>

        <div className="w-[70%] rounded-lg px-[1rem] py-[1.2rem] flex justify-between items-center border-[0.12rem] border-Blue950 bg-Blue200">
          <div className="flex items-center gap-[2rem]">
            <input type="checkbox" className="h-12 w-4" checked />
            <div>
              <h4 className="text-[1rem] text-Blue950 font-bold">
                Larger storage
              </h4>
              <p className="text-[0.8rem] font-semibold text-Grey500">
                Extra 1TB of cloud save
              </p>
            </div>
          </div>

          <span className="text-Purple600 text-[0.8rem]">+$20/yr</span>
        </div>

        <div className="w-[70%] rounded-lg px-[1rem] py-[1.2rem] flex justify-between items-center border-[0.1rem] border-Grey500">
          <div className="flex items-center gap-[2rem]">
            <input type="checkbox" className="h-12 w-4" />
            <div>
              <h4 className="text-[1rem] text-Blue950 font-bold">
                Customizable profile
              </h4>
              <p className="text-[0.8rem] font-semibold text-Grey500">
                Custom theme on your profile
              </p>
            </div>
          </div>

          <span className="text-Purple600 text-[0.8rem]">+$20/yr</span>
        </div>
      </div>

      <div className="flex justify-between w-[70%] items-center">
        <GoBackButton navigate="/selectplan" />
        <NextStepButton navigate="/summary" />
      </div>
    </section>
  );
}

export default Addon;
