import React from "react";

// function Greet(){
//     return <h1>Hello, World!</h1>;
// }

const Greet = (names)=> {
    console.log(names);
    //JSX can return only one HTML tag, so wrap evrything under one tag
    return (
    <div>
        <h1>Hello, {names.name} aka {names.heroname} </h1>
        {names.children}
    </div>
    )
}

// named exports
// export const Greet =() => <h1>Hello, World!</h1>

//default exporting the class
export default Greet;