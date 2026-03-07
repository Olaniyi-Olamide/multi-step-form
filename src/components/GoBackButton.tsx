import { useNavigate } from "react-router-dom";

function GoBackButton() {
  const navigation = useNavigate();

  function handleNavigation() {
    navigation(-1);
  }

  return (
    <div>
      <button
        className="bg-transparent text-Grey500 font-semibold"
        onClick={handleNavigation}
      >
        Go Back
      </button>
    </div>
  );
}

export default GoBackButton;
