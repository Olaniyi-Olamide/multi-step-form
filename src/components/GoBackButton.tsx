import { useNavigate } from "react-router-dom";

interface Prop {
  navigate: string;
}

function GoBackButton({ navigate }: Prop) {
  const navigation = useNavigate();

  function handleNavigation(to: string) {
    navigation(to);
  }
  return (
    <div>
      <button
        className="bg-transparent text-Grey500 font-semibold"
        onClick={() => handleNavigation(navigate)}
      >
        Go Back
      </button>
    </div>
  );
}

export default GoBackButton;
