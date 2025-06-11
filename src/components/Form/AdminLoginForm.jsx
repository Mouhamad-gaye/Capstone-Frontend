import { useState } from "react"
import axios from "axios"


export default function AdminLoginForm() {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const [message, setMessage] = useState("");

    function handleChange(e) {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:3000/api/member/admin-login", formData);
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("role", response.data.role);
            setMessage(response.data.msg)
            window.location.href = "/"
        } catch (err) {
            console.error("Error logging in", err)
            setMessage("Login failed. Invalid credentials")
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Admin Login</h2>
            <div>
                <label>Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required></input>
            </div>
            <div>
                <label>Password</label>
                <input type="password" name="password" value={formData.password} onChange={handleChange} required></input>
            </div>
            <button type="submit">Sign In</button>
        </form>
    )
}