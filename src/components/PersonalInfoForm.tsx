import Button from "./Button";

function PersonalInfoForm() {
  return (
    <div className="flex flex-col gap-[1rem] basis-[70%] px-[2rem]">
      <header>
        <h1 className="text-Blue950 font-bold text-[1.5rem]">Personal info</h1>
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
          className="border-2 border-Purple200 bg-transparent outline-none px-[1.2rem] py-[0.8rem] w-[70%] rounded-lg font-bold mb-[1rem]"
          placeholder="e.g Stephen King"
        />
        <label htmlFor="email" className="text-Blue950 font-semibold">
          Email Address
        </label>
        <input
          type="text"
          id="email"
          className="border-2 border-Purple200 bg-transparent outline-none px-[1.2rem] py-[0.8rem] w-[70%] rounded-lg font-bold mb-[1rem]"
          placeholder="e.g stephenking@lorem.com"
        />
        <label htmlFor="phone-no" className="text-Blue950 font-semibold">
          Phone Number
        </label>
        <input
          type="text"
          id="phone-no"
          className="border-2 border-Purple200 bg-transparent outline-Blue950 px-[1.2rem] py-[0.8rem] w-[70%] rounded-lg font-bold mb-[1rem]"
          placeholder="e.g +234 9068295157"
        />
      </form>

      <div className="flex md:justify-end w-[70%]">
        <Button navigate="/selectplan" />
      </div>
    </div>
  );
}

export default PersonalInfoForm;
