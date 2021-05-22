import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'semantic-ui-react'

const Paginattion = ({ lan }) => {

  const state = {
    ui: {
      en: [],
      bg: []
    }
  }

  const onPageClick = (e,{name}) => {
    console.log(name)
  }

  return (
    <div className='menu-bar'>
      <Button.Group color='grey'>
        <Button as={Button} name='prev' icon='arrow left' />
        <Button as={Button} disabled={true} content='pages' />
        <Button as={Button} name='next' icon='arrow right' />
      </Button.Group>
    </div>
  )

}

const mapStateToProps = state => ({
  lan: state.settings.lan,
  prv: state.collection.info.prev,
  nxt: state.collection.info.next
})

export default connect(mapStateToProps)(Paginattion)
