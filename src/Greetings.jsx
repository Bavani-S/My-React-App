export function Greetings(props) {
  console.log(props);
  return (
    <>
      <h1>how are you! {props.firstName}</h1>
      <ul>
        <li>
          welcome - {props.firstName} {props.lastName}{" "}
        </li>
        <li>Your age is {props.age}</li>
        <li>your car details are {props.car.brand},{props.car.age} years old</li>
      </ul>
      {props.image}
      <input type="checkbox" onChange = {props.doFunction}/>
      <input type="text" />
      {props.children}
    </>
  );
}
