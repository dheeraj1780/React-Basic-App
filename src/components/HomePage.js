import React from 'react'
import Header from './Header'

const HomePage = ({session}) => {
  const title = "Welcome "+session.role+" "+session.username;
  return (
    <>

    <Header title = {title}/>
    </>
  )
}

export default HomePage