import { useState } from "react"
import axios from "axios"

export default function AdminRegistrationForm() {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        mobile: "",
        gender: "",
        DOB: ""
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
        if(!formData.mobile) newErrors.mobile = "Mobile number is required"
        if (!formData.gender) newErrors.gender = "Gender is required";
        if (!formData.DOB) newErrors.DOB = "Date of birth is required";
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
            setMessage(response.data.message)
            localStorage.setItem("token", response.data.token)
            localStorage.setItem("admin", response.data.admin)
          } catch(err) {
            console.error("Unable to register admin", err)
            setMessage("Admin registration failed")
          }
    }
    
    return (
       <form onSubmit={handleSubmit}>
            <h2>Admin Registration</h2>
            <div>
                <label>First Name</label>
                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
                <span>{errors.firstName}</span>
            </div>
            <div>
                <label>Last Name</label>
                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
                <span>{errors.lastName}</span>
            </div>
            <div>
                <label>Email</label>
                <input type="text" name="email" value={formData.email} onChange={handleChange} />
                <span>{errors.email}</span>
            </div>
            <div>
                <label>Password</label>
                <input type="password" name="password" value={formData.password} onChange={handleChange} />
                <span>{errors.password}</span>
            </div>
            <div>
                <label>Mobile</label>
                <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} />
                <span>{errors.mobile}</span>
            </div>
            <div>
                <label>Gender</label>
                <select name="gender" value={formData.gender} onChange={handleChange}>
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
                <span>{errors.gender}</span>
            </div>
            <div>
                <label>Date of Birth</label>
                <input type="date" name="DOB" value={formData.DOB} onChange={handleChange} />
                <span>{errors.DOB}</span>
            </div>
            <button type="submit">Register Admin</button>
            {message && <p>{message}</p>}
        </form>
    )
}