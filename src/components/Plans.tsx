import ArcadeIcon from "../assets/icon-arcade.svg";
import AdvancedIcon from "../assets/icon-advanced.svg";
import ProIcon from "../assets/icon-pro.svg";
import NextStepButton from "./NextStepButton";
import GoBackButton from "./GoBackButton";

function Plans() {
  return (
    <section className="flex flex-col gap-[2rem] basis-[70%] px-[2rem]">
      <header>
        <h1 className="text-Blue950 font-bold text-[1.8rem]">
          Select your plan
        </h1>
        <p className="text-Grey500 font-semibold">
          You have the option of monthly or yearly billing.
        </p>
      </header>

      <div className="flex flex-row items-center gap-[1.5rem]">
        <figure className="flex flex-col rounded-lg px-[0.8rem] py-[1rem] border-[0.12rem] border-Grey500 gap-[2rem] active-plan">
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
        <figure className="flex flex-col rounded-lg px-[0.8rem] py-[1rem] border-[0.12rem] border-Grey500 gap-[2rem]">
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
        <figure className="flex flex-col rounded-lg px-[0.8rem] py-[1rem] border-[0.12rem] border-Grey500 gap-[2rem]">
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

      <div className="bg-Blue300 flex items-center justify-center w-[60%] py-[1rem] rounded-lg"></div>

      <div className="flex justify-between w-[60%] items-center mt-[4rem]">
        <GoBackButton />
        <NextStepButton navigate="/addons" />
      </div>
    </section>
  );
}

export default Plans;
