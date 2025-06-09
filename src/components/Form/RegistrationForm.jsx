import { useState } from "react";
import axios from "axios";

export default function RegistrationForm() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        sex: "",
        mobile: "",
        DOB: "",
        isAdmin: false
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

   

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3000/api/member/register", formData);

            alert(response.data.msg)
        } catch(err) {
            console.error("Error registering user", err)
        };

        const formErrors = validateForm();
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
        } else {
            console.log("Form submitted:", formData);
        }
    };
    const validateForm = () => {
        let newErrors = {};
        if (!formData.firstName) newErrors.firstName = "First name is required";
        if (!formData.lastName) newErrors.lastName = "Last name is required";
        if (!formData.email) newErrors.email = "Email is required";
        if (!formData.password) newErrors.password = "Password is required";
        if(!formData.mobile) newErrors.mobile = "Mobile number is required";
        if(!formData.sex) newErrors.sex = "Please select your gender";
        if(!formData.DOB || isNaN(Date.parse(formData.DOB))) newErrors.DOB = "Valid date of birth is required";        
        
        return newErrors;
    };

    return (
        <form onSubmit={handleSubmit} className="register-form">
            <h2>Registration</h2>
            
            <div>
                <label>First Name</label>
                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
                {errors.firstName && <p className="error">{errors.firstName}</p>}
            </div>

            <div>
                <label>Last Name</label>
                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
                {errors.lastName && <p className="error">{errors.lastName}</p>}
            </div>

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
            <div>
                <label>Mobile</label>
                <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} />
                {errors.mobile && <p className="error">{errors.mobile}</p>}
            </div>
            <div>
                <label>Gender</label>
                <select name="sex" value={formData.sex} onChange={handleChange}>
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
                {errors.sex && <p className="error">{errors.sex}</p>}
            </div>
            <div>
                <label>Date of Birth</label>
                <input type="date" name="DOB" value={formData.DOB} onChange={handleChange} />
                {errors.DOB && <p className="error">{errors.DOB}</p>}
            </div>


            <button type="submit">Register</button>
        </form>
    );
};