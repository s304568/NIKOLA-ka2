import { useState } from "react";
import NumberData from "../interfaces/NumberData";

function useUserNumber() {
    const userNumberInt = localStorage.getItem("UserNumber")
    const userNumberObject = userNumberInt

    ? JSON.parse(userNumberInt)
    :{cookie_count: 0, cookie_multiplier: 0};
    const [numberData, setNumberData] = useState(userNumberObject);

    const saveUserNumber = (numberData: NumberData | {}) => {
        localStorage.setItem("numberData", JSON.stringify(numberData));
        setNumberData(numberData);
    };

        return{
            numberData,
            setNumberData: saveUserNumber
        };
}

export default useUserNumber;