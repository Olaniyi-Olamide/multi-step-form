import NextStepButton from "./NextStepButton";

function PersonalInfoForm() {
  return (
    <section className="flex flex-col gap-[1rem] basis-[70%] px-[2rem] bg-Blue100 mx-[1.2rem] md:mx-0 py-[2rem] rounded-2xl mt-[-5rem] md:mt-0">
      <header>
        <h1 className="text-Blue950 font-bold text-[1.8rem]">Personal info</h1>
        <p className="text-Grey500 font-semibold">
          Please provide your name, email address and phone number.
        </p>
      </header>

      <form className="flex flex-col gap-[0.5rem]">
        <label htmlFor="name" className="text-Blue950 font-semibold">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="border-2 border-Purple200 bg-transparent outline-none px-[1.2rem] py-[0.8rem] w-full  rounded-lg font-bold mb-[1rem]"
          placeholder="e.g Stephen King"
        />
        <label htmlFor="email" className="text-Blue950 font-semibold">
          Email Address
        </label>
        <input
          type="text"
          id="email"
          className="border-2 border-Purple200 bg-transparent outline-none px-[1.2rem] py-[0.8rem] w-full  rounded-lg font-bold mb-[1rem]"
          placeholder="e.g stephenking@lorem.com"
        />
        <label htmlFor="phone-no" className="text-Blue950 font-semibold">
          Phone Number
        </label>
        <input
          type="text"
          id="phone-no"
          className="border-2 border-Purple200 bg-transparent outline-Blue950 px-[1.2rem] py-[0.8rem] w-full rounded-lg font-bold mb-[1rem]"
          placeholder="e.g +234 9068295157"
        />
      </form>

      <div className="flex justify-end w-full">
        <NextStepButton navigate="/selectplan" />
      </div>
    </section>
  );
}

export default PersonalInfoForm;
