import { DisplayDifficulty } from "./components/DisplayDifficulty/DisplayDifficulty"
import { MenuList } from "./components/MenuList/MenuList"
import s from "./style.module.css"
import { useState } from "react"
export function App() {
    const [currentDifficulty, setCurrentDifficulty] = useState("");
    const onClickChangeCurrentStatus = (difficulty) => {
        setCurrentDifficulty(difficulty);
    }
    return <div>
        <h1>Select the difficulty level:</h1>
        <div className={s.container}>
        <MenuList onClickItemStatus = {onClickChangeCurrentStatus} difficulty= {currentDifficulty}/>
        <DisplayDifficulty difficulty= {currentDifficulty}/>
        </div>
    </div>;
}