import s from "./style.module.css";
import { MenuItem } from "../MenuItem/MenuItem"
export function MenuList(props){
    return <div className={s.container}>
        <MenuItem onClickItem={props.onClickItemStatus} difficulty="Low" isSelected={props.difficulty === "Low"}/>
        <MenuItem onClickItem={props.onClickItemStatus} difficulty="Medium" isSelected={props.difficulty === "Medium"}/>
        <MenuItem onClickItem={props.onClickItemStatus} difficulty="High" isSelected={props.difficulty === "High"}/>
        <MenuItem onClickItem={props.onClickItemStatus} difficulty="Insane" isSelected={props.difficulty === "Insane"}/>
    </div>;
}