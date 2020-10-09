import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchSmurfInfo, addSmurf } from "../actions/smurfActions";
import "./App.css";

const App = (props) => {
  // const { fetchSmurfInfo } = props;

  const [formValues, setFormValues] = useState({
    name: "",
    height: "",
    age: "",
  });
  const [isClicked, setClick] = useState(false);

  const onChange = (e) => {
    const newSmurfData = {
      ...formValues,
      [e.target.name]: e.target.value,
    };
    setFormValues(newSmurfData);
    console.log("These are the new form values:", formValues);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    props.addSmurf(formValues);
    if (isClicked === false) {
      setClick(true);
    } else {
      setClick(false);
    }
  };

  useEffect(() => {
    props.fetchSmurfInfo();
    console.log("test");
  }, [isClicked]);

  return (
    <div className="App">
      <h1>
        Welcome to the Smurf Village! See who lives here and feel free to add
        more friends!
      </h1>
      {props.smurfs.map((smurf) => (
        <div key={smurf.id}>
          Name: {smurf.name} <br />
          Age: {smurf.age} <br />
          Height: {smurf.height} <br /> <br />
        </div>
      ))}

      <form onSubmit={onSubmit}>
        {" "}
        <h2>Add a smurf to the village!</h2> <br />
        <label>
          {" "}
          Name
          <input
            type="text"
            name="name"
            value={formValues.name}
            onChange={onChange}
          />
        </label>{" "}
        <br />
        <label>
          {" "}
          Age
          <input
            type="text"
            name="age"
            value={formValues.age}
            onChange={onChange}
          />
        </label>{" "}
        <br />
        <label>
          {" "}
          Height(in CM)
          <input
            type="text"
            name="height"
            value={formValues.height}
            onChange={onChange}
          />
        </label>{" "}
        <br />
        <button
          type="submit"
          value={isClicked}
          onClick={() => setClick(!isClicked)}
        >
          Add Smurf/Smurfette
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
    newSmurf: state.newSmurf,
  };
};

export default connect(mapStateToProps, { addSmurf, fetchSmurfInfo })(App);
