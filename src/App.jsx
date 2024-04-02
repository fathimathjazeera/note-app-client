import './App.css'
import { Routes, Route } from 'react-router-dom'
import Login from './components/Auth/Login'
import Register from './components/Auth/Register'
import CreateNote from './components/Auth/Notes/CreateNote'
import ViewNotes from './components/Auth/Notes/ViewNotes'
import UpdateNote from './components/Auth/Notes/UpdateNote'

function App() {


  return (
    <>
 
   <Routes >
   <Route  path="/" Component={Register}/>
<Route  path="/login" Component={Login}/>
<Route  path="/register" Component={Register}/>
<Route  path="/addnote" Component={CreateNote}/>
<Route  path="/viewnotes" Component={ViewNotes}></Route>
<Route path='/update/:id' Component={UpdateNote}></Route>
   </Routes>
    </>
  )
}
export default App
