import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import AnnouncementPage from './Pages/AnnouncementPage'
import EventPage from './Pages/EventPage'
import ActivityPage from './Pages/ActivityPage'
import NotFoundPage from './Pages/NotFoundPage'
import NavBar from './components/NavBar/NavBar'


function App() {
 

  return (
    <>
    <NavBar />
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/news" element={<AnnouncementPage />}/>
      <Route path="/event" element={<EventPage />}/>
      <Route path="/activities" element={<ActivityPage />}/>
      <Route path="*" element={<NotFoundPage />}/>
    </Routes>
    </>
  )
}

export default App
