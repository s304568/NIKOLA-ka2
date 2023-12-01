import { useContext } from "react";
import { UserNumberPrivider } from "./UserNumberProvider";
import { number } from "prop-types";

function UserNumberDisplay() {

const numberContext = useContext(UserNumberPrivider);


    return(
        <>
        <ul>
            <li>User's name is {numberContext?.userNumber?.number}</li>
        </ul>
        <>
    )
}
