import { createContext, useContext, useState } from "react";
import ArcadeIcon from "../assets/icon-arcade.svg";
import AdvancedIcon from "../assets/icon-advanced.svg";
import ProIcon from "../assets/icon-pro.svg";

interface Prop {
  children: React.ReactNode;
}
interface Context {
  monthly: boolean;
  handleToggle: () => void;
  plans: Plan[];
  currentPlan: Plan;
  setCurrentPlan: React.Dispatch<React.SetStateAction<Plan>>;

  //   currentPlan: ;
  //   setCurrentPlan: React.Dispatch<React.SetStateAction<[]>>;
}

type Plan = {
  id: number;
  plan: string;
  price: string;
  icon: string;
};

const formContext = createContext<undefined | Context>(undefined);

function FormProvider({ children }: Prop) {
  const [monthly, setMonthly] = useState(true);
  const plans = [
    {
      id: 1,
      plan: "Arcade",
      price: !monthly ? "$9/mo" : "$90/yr",
      icon: `${ArcadeIcon}`,
    },
    {
      id: 2,
      plan: "Advanced",
      price: !monthly ? "$12/mo" : "$120/yr",
      icon: `${AdvancedIcon}`,
    },
    {
      id: 3,
      plan: "Pro",
      price: !monthly ? "$15/mo" : "$150/yr",
      icon: `${ProIcon}`,
    },
  ];

  const [currentPlan, setCurrentPlan] = useState<Plan>(plans[0]);

  function handleToggle() {
    setMonthly((m) => !m);
  }

  return (
    <formContext.Provider
      value={{ monthly, handleToggle, plans, currentPlan, setCurrentPlan }}
    >
      {children}
    </formContext.Provider>
  );
}

function useForm() {
  const context = useContext(formContext);

  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { FormProvider, useForm };
