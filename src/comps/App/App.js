import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import Header from "comps/Header/Header";
import Dashboard from "comps/Dashboard/Dashboard";
import './App.css';

const App = ()=>{
    return(
        <Router>
            <Header/>
            <Routes>
                <Route path='/dashboard' element={<Dashboard/>} />
                <Route path='/profile' element={<Dashboard/>} />
                <Route path='/billing' element={<Dashboard/>} />
                <Route path='/history' element={<Dashboard/>} />
                <Route path='/stuff' element={<Dashboard/>} />
                <Route path='/' element={<Dashboard/>} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </Router>
    )
}

export default App;
