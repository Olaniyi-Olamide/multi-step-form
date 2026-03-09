import ThankyouIcon from "../assets/icon-thank-you.svg";

function Confirmation() {
  return (
    <main className="flex flex-col items-center justify-center gap-[1rem] basis-[70%] px-[2rem] bg-Blue100 mx-[1.2rem] md:mx-0 py-[2rem] rounded-2xl mt-[-5rem] md:mt-0 mb-[2rem] md:mb-0">
      <div className="items-center justify-center flex flex-col gap-[1.5rem] text-center">
        <img src={ThankyouIcon} alt="Thankyou-Icon" />
        <h1 className="text-Blue950 font-bold text-[1.8rem]">Thank you!</h1>
        <p className="text-Grey500 font-semibold ">
          Thanks for confirming your subscription! We hope you have fun using
          our platform. if you ever need support please feel free to email us at
          support@lorengaming.com.
        </p>
      </div>
    </main>
  );
}

export default Confirmation;
