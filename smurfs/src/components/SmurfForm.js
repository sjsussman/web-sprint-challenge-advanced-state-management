// import React, { useState } from "react";
// import { connect } from "react-redux";
// import { addSmurf } from "../actions/smurfActions";

// const SmurfForm = (props) => {
//   const [formValues, setFormValues] = useState({
//     name: "",
//     height: "",
//     age: "",
//   });
//   const [isClicked, setClick] = useState(false);

//   const onChange = (e) => {
//     const newSmurfData = {
//       ...formValues,
//       [e.target.name]: e.target.value,
//     };
//     setFormValues(newSmurfData);
//     console.log("These are the new form values:", formValues);
//   };

//   const onSubmit = (e) => {
//     e.preventDefault();
//     props.addSmurf(formValues);
//     if (isClicked === false) {
//       setClick(true);
//     } else {
//       setClick(false);
//     }
//   };

//   return (
//     <form onSubmit={onSubmit}>
//       {" "}
//       <h2>Add a smurf to the village!</h2> <br />
//       <label>
//         {" "}
//         Name
//         <input
//           type="text"
//           name="name"
//           value={formValues.name}
//           onChange={onChange}
//         />
//       </label>{" "}
//       <br />
//       <label>
//         {" "}
//         Age
//         <input
//           type="text"
//           name="age"
//           value={formValues.age}
//           onChange={onChange}
//         />
//       </label>{" "}
//       <br />
//       <label>
//         {" "}
//         Height(in CM)
//         <input
//           type="text"
//           name="height"
//           value={formValues.height}
//           onChange={onChange}
//         />
//       </label>{" "}
//       <br />
//       <button
//         type="submit"
//         value={isClicked}
//         onClick={() => setClick(!isClicked)}
//       >
//         Add Smurf/Smurfette
//       </button>
//     </form>
//   );
// };

// const mapStateToProps = (state) => {
//   return {
//     smurfs: state.smurfs,
//     newSmurf: state.newSmurf,
//   };
// };

// export default connect(mapStateToProps, { addSmurf })(SmurfForm);
