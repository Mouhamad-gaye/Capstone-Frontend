import { useEffect, useState } from "react"
import axios from "axios"
import styles from './EventPage.module.css'



export default function EventPage() {
    const [events, setEvents] = useState([]);
    const [memberRole, setMemberRole] = useState(null);
    const [formData, setFormData] = useState({title: "", date: "", location: "" })
    const [editingEvent, setEditingEvent] = useState(null)

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get("http://localhost:3000/api/event")
                setEvents(response.data)
                const member = await axios.get("http://localhost:3000/api/member")
                setMemberRole(member.data.role)
            } catch (err) {
                console.error("Error requesting event", err.message)
            }
        };
        getData();

    }, []);

    function handleChange(e) => {
        setformData({...formData, [e.target.name]: e.target.value})
    };

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            const endpoint = editingEvent ? `http://localhost:3000/api/event/${editingEvent.id}` : "http://localhost:3000/api/event";
            const method = editingEvent ? "put" : "post";

            await axios[method](endpoint, formData);

            setformData({title: "", date: "", location: ""});
            setEditingEvent(null);
            window.location.reload()
        } catch(err) {
            console.error("Error saving event", err)

        }
    }

    function handleEdit(event) {
        setEditingEvent(event);
        setFormData(event);
    };

    

    // const createEvent = async (eventData) => {
    //     try {
    //         const response = await axios.post("http://localhost:3000/api/event", eventData)
    //         console.log("Event created", response.data)
    //     } catch(err) {
    //         console.error("Error creating event", err)
    //     }
    // };

    // const updateEvent = async (eventId, updateData) => {
    //     try {
    //         const response = await axios.put(`http://localhost:3000/api/event/${eventId}`, updateData)
    //         console.log("Event updated", response.data)
    //     } catch(err) {
    //         console.error("Error creating event", err)
    //     }
    // };

    // const deleteEvent = async (eventId) => {
    //     try {
    //         const response = await axios.delete(`http://localhost:3000/api/event/${eventId}`);
    //         console.log("Event deleted successfully")

    //     } catch(err) {
    //         console.error("Error deleting event")
    //     }
    // }
    return (
        <div className={styles.eventContainer}> 
        <h2>Events</h2>
        <ul className={styles.eventList}> 
            {events.length > 0 ? (
                events.map(event => (
                    <li key={event._id} className={styles.eventItem}> 
                        <strong>{event.title}</strong>
                        <p>{event.date} @ {event.location}</p>
                    </li>
                ))
            ) : (
                <p className={styles.loadingMessage}>Loading events...</p> 
            )}
        </ul>
    </div>

    )
}