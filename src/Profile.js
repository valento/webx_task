import React from 'react'
import { Button } from 'semantic-ui-react'

const Profile = ({item,closeModal}) => {
  return (
    <div className='modal'>
      <h2>{item.name}</h2>
      <Button onClick={() => closeModal()} content='Close'/>
    </div>
  )
}

export default Profile
