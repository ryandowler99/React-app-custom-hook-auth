import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function Register(props) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log("authenticated!", { email, password });
  }

  return (
    <div className="container">
      <h1>Register Here</h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={e => setEmail(e.target.value)}
          name="email"
          value={email}
          autoComplete="off"
          placeholder="Your email address"
        />
        <input
          onChange={e => setPassword(e.target.value)}
          name="password"
          type="password"
          value={password}
          placeholder="Choose a safe password"
        />
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Register />, rootElement);
