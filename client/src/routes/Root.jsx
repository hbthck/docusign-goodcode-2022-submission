import { Route, Routes } from "react-router-dom"
import App from "../App"
import AppLayout from "../layouts/AppLayout/Shell"
import ImageGallery from "../pages/ImageGallery"
import LandingPage from "../pages/LandingPage"
import UserErrorPage from "../pages/error/UserErrorPage"
import GuestOrApiErrorPage from "../pages/error/GuestOrApiErrorPage"
import Dashboard from "../pages/Dashboard"
import Analytics from "../pages/Analytics"
import Settings from "../pages/Settings"
import Identity from "../pages/Identity"
import Contacts from "../pages/Contacts"
import Schedule from "../pages/Schedule"

const Root = () => {
    return (  
    <Routes>
        <Route index element={<LandingPage />} />
        <Route path="app" element={<AppLayout />}>
          <Route index  element={<ImageGallery />} />
          <Route path="dashboard" element={<Dashboard/>} />
          <Route path="analytics" element={<Analytics/>} />
          <Route path="schedules" element={<Schedule/>} />
          <Route path="contacts" element={<Contacts/>} />
          <Route path="admin-iam" element={<Identity/>} />
          <Route path="settings" element={<Settings/>} />
          <Route path="*" element={<UserErrorPage />} />
        </Route>
         <Route path="*" element={<GuestOrApiErrorPage/>} />
      </Routes>
    )
}

export default Root