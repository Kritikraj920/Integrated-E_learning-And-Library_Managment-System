import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import SignUp from './SignUp/SignUp';
import Home from './Home/Home';
import History from './About/History';
import Profile from './Profile/Profile';
import BookReg from './Admin/BookRegister';
import BookFind from './Admin/BookFind';
import Bookisue from './Admin/Bookisue';
import BookSubmit from './Admin/BookSubmit';
import BookPanding from './Admin/BookPending';
import Dashboard from './Admin/Dashboard';
import ProtectedRoute from './Protected';
import Upload from '../Components/Upload/Upload';
import NewUpload from './Admin/NewUpload';
import Notes from '../Components/Notes/Notes'
import Books from '.././Components/Books/Books'
import Pyq from './PYQ/pyq'
import Journal from './Journal/Journal'
import Resourse from './Resource/Resource';
import Resource2 from './ResourseShare/Resourse'
import BookBank from './Services/BookBank';
import Team from './About/Team'
export default function UserRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Navbar />}>
          <Route path="/" element={<Home />} />
          <Route path="/history"element={<History />}/>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/books" element={<Books />} />
          <Route path="/pyq" element={<Pyq />} />
          <Route path="/resourceshare" element={<Resource2/>} />
          <Route path="/bookbank" element={<BookBank/>} />
          <Route path="/team" element={<Team/>} />

          {/* User Protected Routes */}
          <Route path="/profile" element={<ProtectedRoute role="user"><Profile /></ProtectedRoute>}/>
          <Route path="/resource" element={<ProtectedRoute role="user"><Resourse /></ProtectedRoute>} />
          <Route path="/upload" element={<ProtectedRoute role="user"><Upload /></ProtectedRoute>}/>
        </Route>

        {/* Admin Routes */}
        <Route path="/dashboard" element={<ProtectedRoute role="admin"><Dashboard /></ProtectedRoute>}>
          <Route path="adminUpload" element={<NewUpload/>} />
          <Route path="bookreg" element={<BookReg />} />
          <Route path="bookisue" element={<Bookisue />} />
          <Route path="booksubmit" element={<BookSubmit />} />
          <Route path="bookpanding" element={<BookPanding />} />
          <Route path="bookshow" element={<BookFind />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
