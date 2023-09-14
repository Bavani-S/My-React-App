import { useState } from "react";
import { AgeDisplay } from "./AgeDisplay";

export function AgeCounter(){
    //let age = 23; won't update since variable is not reactive
    const [ age, setAge] = useState(23); // state is reactive
    function increaseAge() {
      //  age++;
        setAge(age + 1);
    }
    return (
        <div>
            <button onClick = {increaseAge}>
                Increase Age
            </button>
           <p>Your current age is {age}</p>
            <AgeDisplay age={age}/>
        </div>
    );
}