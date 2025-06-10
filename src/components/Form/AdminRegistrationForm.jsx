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

    
    return (
        <form>
            <h2>Admin Registration</h2>
                <div>
                    <label>First Name</label>
                    <input type="text" name="firstName" value={formData.firstName}></input>
                </div>
                <div>
                    <label>Last  Name</label>
                    <input type="text" name="firstName" value={formData.lastName}></input>
                </div>
                <div>
                    <label>Email</label>
                    <input type="text" name="firstName" value={formData.email}></input>
                </div>
                <div>
                    <label>Password</label>
                    <input type="text" name="firstName" value={formData.password}></input>
                </div>
            
        </form>
    )
}