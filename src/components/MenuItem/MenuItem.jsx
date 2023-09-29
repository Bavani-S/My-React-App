import s from "./style.module.css";
import { useState } from "react";
export function MenuItem(props){

    const [isHovered, setIsHovered] = useState(false);
    function activate() {
        setIsHovered(true);
    }
    function deactivate() {
        setIsHovered(false);
    }
    function getBackGroundColor() {
        if (isHovered) {
            return "#a5e9ff";
        } else {
            if (props.isSelected) {
                return "#26baea"
            }else {
                return "#eff0ef";
            }
        }
    }

    function setDifficulty(){
        props.onClickItem(props.difficulty);
    }
    return <div className={s.container} onClick= {setDifficulty}
    onMouseEnter={activate} onMouseLeave={deactivate} style= {{ backgroundColor:getBackGroundColor()}}>
    Set to: {props.difficulty}
    </div>;
}