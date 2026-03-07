import { useNavigate } from "react-router-dom";

interface Prop {
  navigate: string;
}

function Button({ navigate }: Prop) {
  const navigation = useNavigate();

  function handleNavigation(to: string) {
    navigation(to);
  }

  return (
    <div>
      <button
        className="bg-Blue950 text-Blue50 font-semibold px-[1.3rem] py-[0.6rem] rounded-lg"
        onClick={() => handleNavigation(navigate)}
      >
        Next Step
      </button>
    </div>
  );
}

export default Button;
