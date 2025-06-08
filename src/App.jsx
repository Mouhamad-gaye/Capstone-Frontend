import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import AnnouncementPage from './Pages/AnnouncementPage'
import EventPage from './Pages/EventPage'
import EntertainmentPage from './Pages/EntertainmentPage'
import NotFoundPage from './Pages/NotFoundPage'

function App() {
 

  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/news" element={<AnnouncementPage />}/>
      <Route path="/event" element={<EventPage />}/>
      <Route path="/ent" element={<EntertainmentPage />}/>
      <Route path="*" element={<NotFoundPage />}/>
    </Routes>
    </>
  )
}

export default App
