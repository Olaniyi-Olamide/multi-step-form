import ArcadeIcon from "../assets/icon-arcade.svg";
import AdvancedIcon from "../assets/icon-advanced.svg";
import ProIcon from "../assets/icon-pro.svg";
import NextStepButton from "./NextStepButton";
import GoBackButton from "./GoBackButton";
import ToggleButton from "./ToggleButton";

function Plans() {
  return (
    <section className="flex flex-col gap-[1rem] basis-[70%] px-[2rem] bg-Blue100 mx-[1.2rem] md:mx-0 py-[2rem] rounded-2xl mt-[-5rem] md:mt-0 mb-[2rem] md:mb-0">
      <header>
        <h1 className="text-Blue950 font-bold text-[1.8rem]">
          Select your plan
        </h1>
        <p className="text-Grey500 font-semibold">
          You have the option of monthly or yearly billing.
        </p>
      </header>

      <div className="flex flex-col md:flex-row md:items-center gap-[1.5rem]">
        <figure className="flex md:flex-col rounded-lg px-[0.8rem] py-[1rem] border-[0.12rem] border-Grey500 gap-[2rem] active-plan">
          <img
            src={ArcadeIcon}
            alt="Arcade-Icon"
            className="h-[2rem] w-[2rem]"
          />

          <figcaption>
            <h5 className="font-bold text-Blue950 text-[0.85rem]">Arcade</h5>
            <p className="text-[0.75rem] text-Grey500">$90/yr</p>
            <p className="text-[0.75rem] text-Blue950 font-semibold">
              2 months free
            </p>
          </figcaption>
        </figure>
        <figure className="flex md:flex-col rounded-lg px-[0.8rem] py-[1rem] border-[0.12rem] border-Grey500 gap-[2rem]">
          <img
            src={AdvancedIcon}
            alt="Advanced-Icon"
            className="h-[2rem] w-[2rem]"
          />

          <figcaption>
            <h5 className="font-bold text-Blue950 text-[0.85rem]">Advanced</h5>
            <p className="text-[0.75rem] text-Grey500">$120/yr</p>
            <p className="text-[0.75rem] text-Blue950 font-semibold">
              2 months free
            </p>
          </figcaption>
        </figure>
        <figure className="flex md:flex-col rounded-lg px-[0.8rem] py-[1rem] border-[0.12rem] border-Grey500 gap-[2rem]">
          <img src={ProIcon} alt="Pro-Icon" className="h-[2rem] w-[2rem]" />

          <figcaption>
            <h5 className="font-bold text-Blue950 text-[0.85rem]">Pro</h5>
            <p className="text-[0.75rem] text-Grey500">$150/yr</p>
            <p className="text-[0.75rem] text-Blue950 font-semibold">
              2 months free
            </p>
          </figcaption>
        </figure>
      </div>

      <div className="bg-Blue200 flex items-center justify-center w-full py-[1rem] rounded-lg gap-[1rem]">
        <span className="font-semibold text-Grey500">Monthly</span>
        <ToggleButton />
        <span className="text-Blue950 font-semibold">Yearly</span>
      </div>

      <div className="flex justify-between w-full items-center mt-[4rem]">
        <GoBackButton navigate="/" />
        <NextStepButton navigate="/addons" />
      </div>
    </section>
  );
}

export default Plans;
