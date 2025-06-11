import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function SignInForm() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });

        // Live validation while typing
        setErrors(validateForm({ ...formData, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate before submitting
        const formErrors = validateForm(formData);
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        }
        
        try {
            const response = await axios.post("http://localhost:3000/api/member/login", formData);
            console.log("API Response:", response.data)
            setMessage(response.data.msg);
            localStorage.setItem("token", response.data.token); // Store token for authentication
            localStorage.setItem("member", JSON.stringify(response.data.member));
            navigate("/");
            window.location.reload();

            
           
           

        } catch (err) {
            console.error("Error logging in:", err);
            setMessage("Login failed. Please check your credentials.");
        }
    };

    const validateForm = (data) => {
        let newErrors = {};
        if (!data.email) newErrors.email = "Email is required";
        if (!data.password) newErrors.password = "Password is required";
        return newErrors;
    };

    

    return (
        <form onSubmit={handleSubmit} className="login-form">
            <h2>Sign In</h2>

            <div>
                <label>Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
                {errors.email && <p className="error">{errors.email}</p>}
            </div>

            <div>
                <label>Password</label>
                <input type="password" name="password" value={formData.password} onChange={handleChange} />
                {errors.password && <p className="error">{errors.password}</p>}
            </div>

            <button type="submit">Sign In</button>
            {message && <p className="message">{message}</p>}

        </form>
    );
};