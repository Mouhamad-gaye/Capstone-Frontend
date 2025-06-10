import { useState } from "react"
import axios from "axios"

export default function AdminRegistrationForm() {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    });

    const [message, setMessage] = useState("");
    const [errors, setErrors] = useState({});

    function handleChange(e) {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    function validateForm() {
        let newErrors = {}
        if(!formData.firstName) newErrors.firstName = "First mane is required";
        if(!formData.lastName) newErrors.lastName = "Lats name is required";
        if(!formData.email) newErrors.email = "Email is required";
        if(!formData.password || formData.password.length < 6) newErrors.password = "Password must be at least 6 characters ";
        return newErrors;
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const formErrors = validateForm();
        if(Object.keys(formErrors).length > 0) {
            setErrors(formErrors)
            return
        }
          try {
            const response = await axios.post("http://localhost:3000/api/member/admin-register", formData);
            setMessage(response.data.msg)
          } catch(err) {
            console.errors("Unable to register admin", err)
            setMessage("Admin registration failed")
          }
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <h2>Admin Registration</h2>
                <div>
                    <label>First Name</label>
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleChange}></input>
                </div>
                <div>
                    <label>Last  Name</label>
                    <input type="text" name="firstName" value={formData.lastName} onChange={handleChange}></input>
                </div>
                <div>
                    <label>Email</label>
                    <input type="text" name="firstName" value={formData.email} onChange={handleChange}></input>
                </div>
                <div>
                    <label>Password</label>
                    <input type="text" name="firstName" value={formData.password} onChange={handleChange}></input>
                </div>
                <button type="submit">Register Admin</button>
            
        </form>
    )
}