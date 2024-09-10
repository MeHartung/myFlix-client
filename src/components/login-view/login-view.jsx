import React, { useState } from "react"; // Import useState

export const LoginView = ({ onLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState(""); // Add password state

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      access: username,
      secret: password
    };

    fetch("https://openlibrary.org/account/login.json", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data) // Automatically set the correct Content-Type header
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        
        // Ensure the response contains text to be parsed
        return response.text(); // Get the response as text
      })
      .then((text) => {
        // If text is not empty, parse it as JSON
        if (text) {
          return JSON.parse(text); // Convert to JSON
        }
        throw new Error("Empty response");
      })
      .then((data) => {
        console.log("Login response: ", data);
        if (data.user) {
          localStorage.setItem("user", JSON.stringify(data.user));
          localStorage.setItem("token", data.token);
          onLoggedIn(data.user, data.token);
        } else {
          alert("No such user");
        }
      })
      .catch((e) => {
        console.error("Something went wrong", e);
        alert("Something went wrong");
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

