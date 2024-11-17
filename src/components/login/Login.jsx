// Importing Axios for making HTTP requests and the useState hook from React to manage component state
import axios from "axios";
import { useState } from "react";

// Define the Login component
const Login = () => {
  // State to manage error message visibility
  const [error, setError] = useState(false);
  // State to manage loading status when making API requests
  const [loading, setLoading] = useState(false);
  // State to store the entered username
  const [username, setUsername] = useState("");
  // State to store the entered password
  const [password, setPassword] = useState("");
  // State to store the fetched user data
  const [user, setUser] = useState({});

  // Function that is triggered when the login button is clicked
  const handleClick = async (e) => {
    e.preventDefault(); // Prevents the default form submission behavior
    setLoading(true); // Start loading when login attempt begins
    try {
      // Simulate an API call to fetch user data
      const { data } = await axios.get("https://jsonplaceholder.typicode.com/users/1");
      setUser(data); // Store the fetched user data in the state
      setError(false); // Reset any error message if the API call succeeds
    } catch {
      setError(true); // Show an error message if the API call fails
    }
    setLoading(false); // Stop loading after the API call completes
  };

  // Render the login form
  return (
    <div className="container">
      {/* Display the user's name if available */}
      <span className="user">{user.name}</span>
      <form>
        {/* Input for the username */}
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)} // Update username state on input change
        />
        {/* Input for the password */}
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // Update password state on input change
        />
        {/* Login button, disabled if username or password is missing */}
        <button disabled={!username || !password} onClick={handleClick}>
          {loading ? "please wait" : "Login"} {/* Show "please wait" while loading */}
        </button>
        {/* Error message displayed only when there is an error */}
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

export default Login; // Export the component for use in other files
