import s from "./style.module.css"
export function DisplayDifficulty(props){
    return <div className={s.container}>
        { props.difficulty ? "Difficulty is set to: "+props.difficulty:"No difficulty is set"}
    </div>;
}