import { useNavigate } from "react-router-dom";

interface Prop {
  navigate: string;
}

function ConfirmButton({ navigate }: Prop) {
  const navigation = useNavigate();

  function handleNavigation(to: string) {
    navigation(to);
  }

  return (
    <div>
      <button
        className="bg-Purple600 text-Blue50 font-semibold px-[1.3rem] py-[0.5rem] rounded-lg"
        onClick={() => handleNavigation(navigate)}
      >
        Confirm
      </button>
    </div>
  );
}

export default ConfirmButton;
