import s from "./style.module.css";
import { MenuItem } from "../MenuItem/MenuItem"
export function MenuList(props){
    return <div className={s.container}>
        <MenuItem difficulty="Low"/>
        <MenuItem difficulty="Medium"/>
        <MenuItem difficulty="High"/>
        <MenuItem difficulty="Insane"/>
    </div>;
}