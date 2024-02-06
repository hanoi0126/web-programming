import './App.css';
import Form from './Form';

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         {count}
//         <button onClick={() => setCount(count + 1)}>Button</button>
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// function App() {
//   const [name, setName] = useState("");
//   const [age, setAge] = useState(null);
//   const [email, setEmail] = useState("");

//   const handleSubmit = (submit) => {
//     submit.preventDefault();
//     console.log("onSubmit: ", name, age, email);
//   };

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//       <form style={{ display: "flex", flexDirection: "column" }} onSubmit={handleSubmit}>
//           <label>Name: </label>
//           <input
//             type={"text"}
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           ></input>
//           <label>Age: </label>
//           <input
//             type={"int"}
//             value={age}
//             onChange={(e) => setAge(e.target.value)}
//           ></input>
//           <label>Email: </label>
//           <input
//             type={"email"}
//             style={{ marginBottom: 20 }}
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           ></input>
//           <button type={"submit"}>Submit</button>
//         </form>
//     </div>
//   );
// }

function App() {
  const handleSubmit = (name, age, email) => {
    console.log("onSubmit: ", name, age, email);
  };

  return (
    <div className="App">
      <Form onSubmit={handleSubmit}/>
    </div>
  )
}


export default App;
