import { createContext, ReactNode } from "react";
import useUserNumber from "../Hooks/useUserNumbers";
import NumberData from "../interfaces/NumberData";

interface UserNumberContextType {
    numberData: NumberData;
    setUserNumber: (numberData: NumberData | {}) => void;
}

export const UserNumberContext = createContext<UserNumberContextType | null>(null);

function UserNumberPrivider({ children }: { children: ReactNode}) {
    const { numberData, setUserNumber} = useUserNumber();

    return(
<UserNumberContext.Provider value={{ numberData,setUserNumber}}>
{children}
</UserNumberContext.Provider>
); 


}

export default UserNumberPrivider;