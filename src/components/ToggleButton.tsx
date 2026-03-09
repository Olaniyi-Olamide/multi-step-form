import { useForm } from "../context/FormContext";

function ToggleButton() {
  const { monthly, handleToggle } = useForm();
  return (
    <button
      className="w-12 h-6 flex items-center rounded-full p-1 transition bg-Blue950"
      onClick={handleToggle}
    >
      <div
        className={`bg-Blue50 w-4 h-4 rounded-full transform transition ${
          monthly ? "translate-x-6" : ""
        }`}
      ></div>
    </button>
  );
}

export default ToggleButton;
