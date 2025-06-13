import { useEffect, useState } from "react"
import axios from "axios"
import styles from './EventPage.module.css'





export default function EventPage() {
    const [events, setEvents] = useState([]);
    const [memberRole, setMemberRole] = useState(null);
    const [formData, setFormData] = useState({ title: "", date: new Date(), location: "" })
    const [editingEvent, setEditingEvent] = useState(null)


    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get("http://localhost:3000/api/event");
                setEvents(response.data);
                let token = localStorage.getItem("token")
                console.log(token)
                // Handle authorization failure
                try {
                    const member = await axios.get("http://localhost:3000/api/member", {
                        headers: { Authorization: token }
                    });
                    setMemberRole(member.data.role);
                } catch (authErr) {
                    console.error("Unauthorized access to member API:", authErr.message);
                    setMemberRole(null); // Prevent crashes if unauthorized
                }

            } catch (err) {
                console.error("Error requesting event", err.message);
            }
        };
        getData();
    }, []);

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    };

    // function formatDate(isoString) {
    //     return new Date(isoString).toISOString().split("T")[0]
    // }

    async function createEvent(formData) {
        try {
            let token = localStorage.getItem("token");
            const response = await axios.post("http://localhost:3000/api/event", formData, {
                headers: { Authorization: token }
            });
            console.log("Event created successfully:", response.data);
            return response.data;
        } catch (error) {
            console.error("Error creating event:", error.message);
        }
    };

    async function updateEvent(eventId, formData) {
        try {
            let token = localStorage.getItem("token");
            if (!eventId) {
                console.error("Error: Missing event ID for update!");
                return;
            }
            const response = await axios.put(`http://localhost:3000/api/event/${eventId}`, formData, {
                headers: { Authorization: token }
            });
            console.log("Event updated successfully:", response.data);
            return response.data;
        } catch (error) {
            console.error("Error updating event:", error.message);
        }
    };

    async function handleSubmit(e) {
        e.preventDefault();
        if (editingEvent) {
            await updateEvent(editingEvent.id, formData);
        } else {
            await createEvent(formData);
        }
        setEditingEvent(null);
        setFormData({ title: "", date: "", location: "" });
    }


    function handleEdit(eventId) {
        setEditingEvent(eventId);
        setFormData(eventId);
    };

    async function handleDelete(eventId) {
        if (!eventId) {
            console.error("Error: Cannot delete event without a valid ID!");
            return;
        }

        console.log("Attempting to delete event ID:", eventId);
        let token = localStorage.getItem("token");

        try {
            await axios.delete(`http://localhost:3000/api/event/${eventId}`, {  
                headers: { Authorization: token }
            });

            setEvents(prevEvents => prevEvents.filter(event => event.id !== eventId));
            console.log("Event deleted successfully!");
        } catch (err) {
            console.error("Error deleting event:", err);
        }
    }





    return (
        <div className={styles.eventContainer}>
            <h2>Notable Events</h2>
            <ul className={styles.eventList}>
                {events.map(event => (
                    <li key={event.id} className={styles.eventItem}>
                        <strong>{event.title}</strong>
                        <p>{event.date} @ {event.location}</p>
                        {memberRole === "admin" && (
                            <>
                                <button onClick={() => handleEdit(event.id)}>Edit</button>
                                <button onClick={() => handleDelete(event._id)}>Delete</button>
                            </>
                        )}
                    </li>
                ))}
            </ul>

            {memberRole === "admin" && (
                <form onSubmit={handleSubmit} className={styles.eventForm}>
                    <h3>{editingEvent ? "Edit Event" : "Create Event"}</h3>
                    <input type="text" name="title" placeholder="Title" value={formData.title} onChange={handleChange} required />
                    <input type="date" name="date" value={(formData.date)} onChange={handleChange} required />
                    <input type="text" name="location" placeholder="Location" value={formData.location} onChange={handleChange} required />
                    <button type="submit">{editingEvent ? "Update" : "Create"}</button>
                </form>
            )}
        </div>

    )
}