import React from 'react'
import { Button } from 'semantic-ui-react'

const Pagination = ({ lan,navPage,info }) => {

  const state = {
    ui: {
      en: [],
      bg: []
    }
  }

  return (
    <div className='menu-bar'>
      <Button.Group color='grey'>
        <Button as={Button} disabled={!info.prev} onClick={(e,{name}) => navPage(name)} name='prev' icon='arrow left' />
        <Button as={Button} disabled={true} content='pages' />
        <Button as={Button} disabled={!info.next} onClick={(e,{name}) => navPage(name)} name='next' icon='arrow right' />
      </Button.Group>
    </div>
  )

}

export default Pagination
