// Importing Axios for HTTP requests and useState hook from React to manage component state
import axios from "axios";
import { useState } from "react";

const Login = () => {
  // State for handling potential errors, loading status, and storing username, password, and user data
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({});

  // Function that handles login button click
  const handleClick = async (e) => {
    e.preventDefault(); // Prevents page reload on form submit
    setLoading(true); // Sets loading state to true when login starts
    try {
      // Simulating an API call to retrieve user data (mocked endpoint)
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users/1"
      );
      setUser(data); // Updates user state with fetched data
    } catch {
      setError(true); // Sets error state to true if API call fails
    }
    setLoading(false); // Resets loading state once API call completes
  };

  return (
    <div className="container">
      {/* Displaying user's name if available */}
      <span className="user">{user.name}</span>
      <form>
        {/* Input for username */}
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)} // Updates username state on input change
        />
        {/* Input for password */}
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // Updates password state on input change
        />
        {/* Login button, disabled if username or password is missing */}
        <button disabled={!username || !password} onClick={handleClick}>
          {loading ? "please wait" : "Login"} {/* Displays loading text if loading */}
        </button>
        {/* Error message displayed only when error state is true */}
        <span
          data-testid="error"
          style={{ visibility: error ? "visible" : "hidden" }}
        >
          Something went wrong!
        </span>
      </form>
    </div>
  );
};

export default Login;
