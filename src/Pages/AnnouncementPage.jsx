import { useState, useEffect } from "react";
import axios from "axios";
import Announcement from './Announcement.module.css'

export default function AnnouncementsPage() {
    const [announcements, setAnnouncements] = useState([]);
    const [memberRole, setMemberRole] = useState(null);
    const [formData, setFormData] = useState({ title: "", content: "" });
    const [editingAnnouncement, setEditingAnnouncement] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:3000/api/comm");
                setAnnouncements(response.data);
                
               
                let token = localStorage.getItem("token");
                
                
                const memberResponse = await axios.get("http://localhost:3000/api/member", {
                    headers: { Authorization: token }
                });
                setMemberRole(memberResponse.data.role);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    async function createAnnouncement(formData) {
        try {
            let token = localStorage.getItem("token");
            const response = await axios.post("http://localhost:3000/api/comm", formData, {
                headers: { Authorization: token}
            });
    
            console.log("Announcement created successfully:", response.data);
            return response.data;
        } catch (error) {
            console.error("Error creating announcement:", error);
        }
    };

    async function updateAnnouncement(announcementId, formData) {
        try {
            let token = localStorage.getItem("token");
    
            if (!announcementId) {
                console.error("Error: Missing announcement ID for update!");
                return;
            }
    
            const response = await axios.put(`http://localhost:3000/api/comm/${announcementId}`, formData, {
                headers: { Authorization: token }
            });
    
            console.log("Announcement updated successfully:", response.data);
            return response.data;
        } catch (error) {
            console.error("Error updating announcement:", error);
        }
    }

    async function handleSubmit(e) {
        e.preventDefault();
    
        if (editingAnnouncement) {
            await updateAnnouncement(editingAnnouncement._id, formData);
        } else {
            await createAnnouncement(formData);
        }
    
        setEditingAnnouncement(null);
        setFormData({ title: "", content: "" });
        window.location.reload();
    };

    function handleEdit(announcementId) {
        setEditingAnnouncement(announcementId);
        setFormData(announcementId);
    };

    async function handleDelete(announcementId) {
        try {
            let token = localStorage.getItem("token");
            await axios.delete(`http://localhost:3000/api/comm/${announcementId}`, {
                headers: { Authorization: token }
            });

            setAnnouncements(prevAnnouncements => prevAnnouncements.filter(a => a._id !== announcementId));
        } catch (error) {
            console.error("Error deleting announcement:", error);
        }
    }

    return (
        <div>
            <h2>Announcements</h2>
            <ul>
                {announcements.map(announcement => (
                    <li key={announcement._id}>
                        <strong>{announcement.title}</strong>
                        <p>{announcement.content}</p>
                        {memberRole === "admin" && (
                            <>
                                <button onClick={() => handleEdit(announcement)}>Edit</button>
                                <button onClick={() => handleDelete(announcement._id)}>Delete</button>
                            </>
                        )}
                    </li>
                ))}
            </ul>

            {memberRole === "admin" && (
                <form onSubmit={handleSubmit}>
                    <h3>{editingAnnouncement ? "Edit Announcement" : "Create Announcement"}</h3>
                    <input type="text" name="title" placeholder="Title" value={formData.title} onChange={handleChange} required />
                    <textarea name="content" placeholder="Content" value={formData.content} onChange={handleChange} required />
                    <button type="submit">{editingAnnouncement ? "Update" : "Create"}</button>
                </form>
            )}
        </div>
    );
}
