import GoBackButton from "./GoBackButton";
import NextStepButton from "./NextStepButton";
import { useForm } from "../context/FormContext";

function Addon() {
  const { monthly } = useForm();

  return (
    <section className="flex flex-col gap-[1rem] basis-[70%] px-[2rem] bg-Blue100 mx-[1.2rem] md:mx-0 py-[2rem] rounded-2xl mt-[-5rem] md:mt-0 mb-[2rem] md:mb-0">
      <header>
        <h1 className="text-Blue950 font-bold text-[1.8rem]">Pick add-ons</h1>
        <p className="text-Grey500 font-semibold">
          Add-ons help enhance your gaming experience
        </p>
      </header>

      <div className="flex flex-col gap-[1rem]">
        <div className="w-full rounded-lg px-[1rem] py-[1.2rem] flex justify-between items-center border-[0.12rem] border-Blue950 bg-Blue200">
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

          <span className="text-Purple600 text-[0.8rem]">
            {!monthly ? " +$1/mo" : "+$10/y"}
          </span>
        </div>

        <div className="w-full rounded-lg px-[1rem] py-[1.2rem] flex justify-between items-center border-[0.12rem] border-Blue950 bg-Blue200">
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

          <span className="text-Purple600 text-[0.8rem]">
            {!monthly ? " +$2/mo" : "+$20/y"}
          </span>
        </div>

        <div className="w-full rounded-lg px-[1rem] py-[1.2rem] flex justify-between items-center border-[0.1rem] border-Grey500">
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

          <span className="text-Purple600 text-[0.8rem]">
            {!monthly ? " +$2/mo" : "+$20/y"}
          </span>
        </div>
      </div>

      <div className="flex justify-between w-full items-center mt-[2rem] md:mt-0">
        <GoBackButton navigate="/selectplan" />
        <NextStepButton navigate="/summary" />
      </div>
    </section>
  );
}

export default Addon;
