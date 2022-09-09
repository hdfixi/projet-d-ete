import Dashboard from './pages/Dashboard'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './pages/Login';
import New from './pages/New';
import ListUser from './pages/ListUser';
import Single from './pages/Single';
import ListOccupation from './pages/ListOccupation';
import ProfileAdmin  from './pages/ProfileAdmin';
import { occupationInput, profileAdmin } from './formSource';
import Ads from './pages/Ads';
import Comments from './pages/Comments'

import { Navigate } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';

function App() {
  const {currentUser} = useContext(AuthContext)


  const RequireAuth = ({children}) => {
    return currentUser ? (children) : <Navigate to="/login"/> //if there is user go to children elso go to login page
    
  }
  return (
    <>
       <BrowserRouter>
          <Routes>
            <Route path='/'>
            <Route path='login' element={<Login/>} />
              <Route index element={<RequireAuth><Dashboard/></RequireAuth>} />
              
              <Route path='profile' element={<RequireAuth><ProfileAdmin inputs= {profileAdmin} title="Edit profile"/></RequireAuth>} />
              <Route path='users'>
                <Route index element={<RequireAuth><ListUser/></RequireAuth>} />
                <Route path=':userId' element={<RequireAuth><Single/></RequireAuth>} />
                <Route path='new' element={<RequireAuth><New/></RequireAuth>} />
              </Route>
              <Route path='occupation'>
                <Route index element={<RequireAuth><ListOccupation/></RequireAuth>}></Route>
                <Route path=':id' element={<RequireAuth><Single/></RequireAuth>}></Route>
                <Route path='new' element={<RequireAuth><ProfileAdmin inputs={occupationInput} title="Add new category"/></RequireAuth>}></Route>
              </Route>
              <Route path='ads' element= {<RequireAuth><Ads/></RequireAuth>}></Route>
              <Route path='profile/:id' element={<RequireAuth><ProfileAdmin inputs= {occupationInput} title="Edit category"/></RequireAuth>} />
              <Route path='comments' element= {<RequireAuth><Comments/></RequireAuth>}></Route>
              
              
              
              
            </Route>
          </Routes>
        </BrowserRouter>
     </>
  )
}

export default App
