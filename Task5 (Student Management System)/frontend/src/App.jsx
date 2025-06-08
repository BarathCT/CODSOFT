import React from 'react'
import StudentManagement from './components/StudentManagement'
import { ToastContainer } from 'react-toastify'

const App = () => {
  return (
    <>
      <StudentManagement />
      <ToastContainer position="bottom-right" autoClose={3000} />
    </>
  )
}

export default App