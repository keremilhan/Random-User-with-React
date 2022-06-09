import React from 'react'

const SingleUser = ({user}) => {
  return (
    <div className='single-user'>
        <img className='user-photo' src={user.picture.large} alt=''></img>
        <div className='user-info'>
            <h3>{user.name.first} {user.name.last}</h3>
            <p className='user-gender'>{user.gender}</p>
            <p className='user-mail'>{user.email}</p>
            <p className='user-location'>{user.location.country}</p>
        </div>
    </div>
  )
}

export default SingleUser