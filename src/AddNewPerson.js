import React, { useRef, useState } from "react";

const AddNewPerson = ({addNewPerson}) => {
//   const [inputs, setInputs] = useState({
//     name: "",
//     email: "",
//     age: 0,
//   });


//   const handleChangeInputs = (e) => {
//         setInputs({
//             ...inputs , [e.target.name]:e.target.value
//         })
//   }

//   const submitPerson = () => {
//     addNewPerson(inputs)
//   }


    const nameRef = useRef();
    const emailRef = useRef();
    const ageRef = useRef()

   
    const submitPerson = () => {
        addNewPerson({
            name :  nameRef.current.focus(),
            email : emailRef.current.focus(),
            age : ageRef.current.focus()
        })
    }

 

  return (
    <div>
      <label> user Name </label>
      <input type="text" placeholder="user name" ref={nameRef} /* name="name" */ /* onChange={handleChangeInputs} *//> <br></br>
      <label> Email </label>
      <input type="text" placeholder="email" ref={emailRef} /* name="email" */ /* onChange={handleChangeInputs}  *//> <br></br>
      <label> Age </label>
      <input type="number" placeholder="age" ref={ageRef} /* name="age" */ /* onChange={handleChangeInputs} *//> <br></br>
      <button onClick={submitPerson}> Submit </button>
    </div>
  );
};

export default AddNewPerson;
