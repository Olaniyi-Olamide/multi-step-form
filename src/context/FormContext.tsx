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
  addons: Addons[];
  handleChecked: (id: string) => void;
  activeAddon: string[];
  //   currentPlan: ;
  //   setCurrentPlan: React.Dispatch<React.SetStateAction<[]>>;
}

type Plan = {
  id: number;
  plan: string;
  price: string;
  icon: string;
};

type Addons = {
  id: string;
  service: string;
  moreInfo: string;
  price: string;
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

  const addons = [
    {
      id: "1",
      service: "Online service",
      moreInfo: "Access to multiplayer games",
      price: !monthly ? " +$1/mo" : "+$10/yr",
    },
    {
      id: "2",
      service: "Larger storage",
      moreInfo: "  Extra 1TB of cloud save",
      price: !monthly ? "+$2/mo" : "+$20/yr",
    },
    {
      id: "3",
      service: "Customizable profile",
      moreInfo: "Custom theme on your profile",
      price: !monthly ? "+$2/mo" : "+$20/yr",
    },
  ];

  const [currentPlan, setCurrentPlan] = useState<Plan>(plans[0]);
  const [activeAddon, setActiveAddon] = useState<string[]>(["1", "2"]);

  function handleChecked(id: string) {
    setActiveAddon((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  }
  function handleToggle() {
    setMonthly((m) => !m);
  }

  return (
    <formContext.Provider
      value={{
        monthly,
        handleToggle,
        plans,
        currentPlan,
        setCurrentPlan,
        addons,
        handleChecked,
        activeAddon,
      }}
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
