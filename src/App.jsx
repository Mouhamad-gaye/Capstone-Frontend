import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import AnnouncementPage from './Pages/AnnouncementPage'
import EventPage from './Pages/EventPage'
import ActivityPage from './Pages/ActivityPage'
import NotFoundPage from './Pages/NotFoundPage'
import NavBar from './components/NavBar/NavBar'

import RegistrationForm from './components/Form/RegistrationForm'



function App() {
 

  return (
    <>
    <NavBar />
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/news" element={<AnnouncementPage />}/>
      <Route path="/events" element={<EventPage />}/>
      <Route path="/activities" element={<ActivityPage />}/>
      <Route path="/register" element={<RegistrationForm />}/>
      {/* <Route path="/signin" element={<LoginForm />}/> */}
      <Route path="*" element={<NotFoundPage />}/>

    </Routes>
    </>
  )
}

export default App
