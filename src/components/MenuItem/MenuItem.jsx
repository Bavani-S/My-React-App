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
        }else{
            return "#eff0ef";
        }
    }
    return <div className={s.container} onMouseEnter={activate} onMouseLeave={deactivate} style= {{ backgroundColor:getBackGroundColor()}}>
    Set to: {props.difficulty}
    </div>;
}