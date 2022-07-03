import './App.css';
import Layout from './components/Layout';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Signup from './components/Signup';
import TasksView from './components/TasksView';

import LeavesStatus from './components/LeavesStatus';
import ApplyLeaves from './components/ApplyLeave';
import { WrongLogin } from './components/WrongLogin';
import { PendingLogin } from './components/PendingLogin';
import Welcome from './components/Welcome';
import AdminProfile from './components/AdminProfile';
import AddProfile from './components/AddProfile';
import ViewTeam from './components/ViewTeam';


function App() {
  return (
    <>
   
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
         <Route path ="/"element={<Home />} />
         <Route path ="/about-us"element={<About />} />
         <Route path ="/login"element={<Login />} />
         <Route path ="/signup"element={<Signup />} />
         <Route path ="/tasks-view"element={<TasksView />} />
         
         <Route path ="/leaves-status"element={<LeavesStatus />} />
         <Route path ="/apply-leave"element={<ApplyLeaves />} />
         <Route path ="/error-login"element={<WrongLogin />} />
         <Route path ="/pending-login"element={<PendingLogin />} />
         <Route path ="/welcome"element={<Welcome />} />
         <Route path ="/admin-profile"element={<AdminProfile />} />
         <Route path ="/update-profile"element={<AddProfile />} />
         <Route path ="/team-profiles"element={<ViewTeam />} />

         
        
        
      </Route>
    </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
