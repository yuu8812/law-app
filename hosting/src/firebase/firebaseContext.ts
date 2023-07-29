import { Analytics } from "firebase/analytics";
import { Auth } from "firebase/auth";
import { createContext } from "react";

type FirebaseContextState = {
  analytics: Analytics | null;
  auth: Auth;
  config: {
    isMaintenanceMode: boolean;
    maintenanceDateString: string;
  };
};

const FirebaseContext = createContext({} as FirebaseContextState);

export default FirebaseContext;
