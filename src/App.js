import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import Header from "comps/Header/Header";
import Dashboard from "comps/Dashboard/Dashboard";
import Profile from "comps/Profile/Profile";
import Billing from "comps/Billing/Billing";
import History from "comps/History/History";
import Stuff from "comps/Stuff/Stuff";

const App = ()=>{
    return(
        <Router>
            <Header/>
            <Routes>
                <Route path='/Dashboard' element={<Dashboard/>} />
                <Route path='/Profile' element={<Profile/>} />
                <Route path='/Billing' element={<Billing/>} />
                <Route path='/History' element={<History/>} />
                <Route path='/Stuff' element={<Stuff/>} />
                <Route path="*" element={<Navigate to="/Dashboard" replace />} />
            </Routes>
        </Router>
    )
}

export default App;
