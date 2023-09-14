import {Greetings} from "./components/greetings/Greetings";
import {Car} from "./components/car/Car";
import "./global.css";
export function App(){
   return (
    //   <div style = {{backgroundColor: "yellow"}}>
      <div className="box">
       <Car/>
       <Greetings/>
       </div>
   );
}