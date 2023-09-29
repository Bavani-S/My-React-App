import { DisplayDifficulty } from "./components/DisplayDifficulty/DisplayDifficulty"
import { MenuList } from "./components/MenuList/MenuList"
import s from "./style.module.css"
export function App() {
    return <div>
        <h1>Select the difficulty level:</h1>
        <div className={s.container}>
        <MenuList/>
        <DisplayDifficulty difficulty="Low"/>
        </div>
    </div>;
}