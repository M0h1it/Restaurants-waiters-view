import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username === "waiter@123" && password === "1234") {
      localStorage.setItem(
        "WAITER_AUTH",
        JSON.stringify({ username, role: "WAITER" })
      );
      navigate("/dashboard");
    } else {
      alert("Invalid credentials"); 
    }
  };
//   // Actual API call for login
//   const res = await apiMain.post("/auth/login", {
//   username,
//   password,
// });

// localStorage.setItem(
//   "WAITER_AUTH",
//   JSON.stringify({
//     token: res.data.token,
//     role: res.data.role,
//   })
// );


  return (
    <div
      className="vh-100 d-flex justify-content-center align-items-center p- "
      style={{ background: "#ffffff" }}
    >
      <div style={{ width: "350px" }}>
        {/* Title */}
        <h3 className="fw-bold mb-4" style={{ color: "#B90009" }}>
          Staff Login
        </h3>

        {/* Username Field */}
        <div className="mb-3">
          <label className="fw-semibold mb-1">Username</label>
          <input
            type="text"
            className="form-control rounded-3 border-secondary-subtle"
            placeholder="Enter Username"
            onChange={(e) => setUsername(e.target.value)}
            style={{ padding: "10px" }}
          />
        </div>

        {/* Password Field */}
        <div className="mb-4">
          <label className="fw-semibold mb-1">Password</label>
          <input
            type="password"
            className="form-control rounded-3 border-secondary-subtle"
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
            style={{ padding: "10px" }}
          />
        </div>

        {/* Login Button */}
        <button
          onClick={handleLogin}
          className="btn w-100 fw-bold"
          style={{
            background: "#B90009",
            color: "white",
            padding: "12px",
            fontSize: "16px",
          }}
        >
          Login
        </button>
        <div>
          <span>waiter@123</span>
          <span>1234</span>
        </div>
      </div>
    </div>
  );
}
