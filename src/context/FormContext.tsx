import { createContext, useContext, useState } from "react";

interface Prop {
  children: React.ReactNode;
}
interface Context {
  monthly: boolean;
  handleToggle: () => void;
}

const formContext = createContext<undefined | Context>(undefined);

function FormProvider({ children }: Prop) {
  const [monthly, setMonthly] = useState(true);

  function handleToggle() {
    setMonthly((m) => !m);
  }

  return (
    <formContext.Provider value={{ monthly, handleToggle }}>
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
