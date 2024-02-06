import { useState } from "react";
import logo from './logo.svg';

const Form = (props) => {
    const [name, setName] = useState("");
    const [age, setAge] = useState(null);
    const [email, setEmail] = useState("");

    const submit = (event) => {
        event.preventDefault();
        props.onSubmit(name, age, email);
    };

    return (
        <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
            Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            >
            Learn React
            </a>
        </header>
        <form style={{ display: "flex", flexDirection: "column" }} onSubmit={submit}>
            <label>Name: </label>
            <input
                type={"text"}
                value={name}
                onChange={(e) => setName(e.target.value)}
            ></input>
            <label>Age: </label>
            <input
                type={"int"}
                value={age}
                onChange={(e) => setAge(e.target.value)}
            ></input>
            <label>Email: </label>
            <input
                type={"email"}
                style={{ marginBottom: 20 }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            ></input>
            <button type={"submit"}>Submit</button>
            </form>
        </div>
    );
};

export default Form;