import GoBackButton from "./GoBackButton";
import NextStepButton from "./NextStepButton";
import { useForm } from "../context/FormContext";

function Addon() {
  const { addons, handleChecked, activeAddon } = useForm();

  return (
    <section className="flex flex-col gap-[1rem] basis-[70%] px-[2rem] bg-Blue100 mx-[1.2rem] md:mx-0 py-[2rem] rounded-2xl mt-[-5rem] md:mt-0 mb-[2rem] md:mb-0">
      <header>
        <h1 className="text-Blue950 font-bold text-[1.8rem]">Pick add-ons</h1>
        <p className="text-Grey500 font-semibold">
          Add-ons help enhance your gaming experience
        </p>
      </header>

      <div className="flex flex-col gap-[1rem]">
        {addons.map(
          (addon: {
            id: string;
            service: string;
            moreInfo: string;
            price: string;
          }) => {
            return (
              <div
                key={addon.id}
                className={`w-full rounded-lg px-[1rem] py-[1.2rem] flex justify-between items-center border-[0.12rem] ${
                  activeAddon.includes(addon.id)
                    ? "border-Blue950 bg-Blue200"
                    : "border-Grey500"
                }`}
              >
                <div className="flex items-center gap-[2rem]">
                  <input
                    type="checkbox"
                    className="h-12 w-4"
                    checked={activeAddon.includes(addon.id)}
                    onChange={() => handleChecked(addon.id)}
                  />
                  <div>
                    <h4 className="text-[1rem] text-Blue950 font-bold">
                      {addon.service}
                    </h4>
                    <p className="text-[0.8rem] font-semibold text-Grey500">
                      {addon.moreInfo}
                    </p>
                  </div>
                </div>

                <span className="text-Purple600 text-[0.8rem]">
                  {addon.price}
                </span>
              </div>
            );
          }
        )}
      </div>

      <div className="flex justify-between w-full items-center mt-[2rem] md:mt-0">
        <GoBackButton navigate="/selectplan" />
        <NextStepButton navigate="/summary" />
      </div>
    </section>
  );
}

export default Addon;
