import { Link } from "react-router-dom";
import GoBackButton from "./GoBackButton";
import ConfirmButton from "./ConfirmButton";

function FinishingUp() {
  return (
    <main className="flex flex-col gap-[2rem] basis-[70%] px-[2rem]">
      <header>
        <h1 className="text-Blue950 font-bold text-[1.8rem]">Finishing up</h1>
        <p className="text-Grey500 font-semibold">
          Double-check everything looks OK before confirming.
        </p>
      </header>

      <section className="w-[70%] p-[1rem] bg-Blue200 rounded-lg">
        <div className="flex justify-between items-center mb-[1rem]">
          <div>
            <h4 className="text-[1rem] text-Blue950 font-bold">
              Arcade (Yearly)
            </h4>

            <Link to="/selectplan">
              <span className="text-[0.8rem] font-semibold text-Grey500 underline">
                Change
              </span>
            </Link>
          </div>

          <span className="text-Blue950 font-bold">$90/yr</span>
        </div>

        <hr className="text-Grey500 opacity-[0.5]" />

        <div className="flex items-center justify-between mt-[1rem]">
          <span className="text-Grey500 text-[0.8rem] font-semibold">
            Online service
          </span>
          <span className="text-Blue950 text-[0.8rem] font-semibold">
            +$10/yr
          </span>
        </div>
        <div className="flex items-center justify-between mt-[1rem]">
          <span className="text-Grey500 text-[0.8rem] font-semibold">
            Larger storage
          </span>
          <span className="text-Blue950 text-[0.8rem] font-semibold">
            +$20/yr
          </span>
        </div>
      </section>

      <div className="w-[70%] flex items-center justify-between ">
        <span className="text-Grey500 text-[0.8rem] font-semibold">
          Total (per year)
        </span>
        <span className="text-Purple600 text-[1rem] font-bold">+$120/yr</span>
      </div>

      <footer className="flex justify-between w-[70%] items-center mt-[3rem]">
        <GoBackButton navigate="/addons" />
        <ConfirmButton navigate="*" />
      </footer>
    </main>
  );
}

export default FinishingUp;
