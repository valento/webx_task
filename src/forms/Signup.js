import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import PropType from 'prop-types'
import Validator from 'validator'
import { Message,Button,Form } from 'semantic-ui-react'
import { userSignsUp } from '../actions/user'
import { haveCollection } from '../actions/collection'

const SignupForm = ({ lan,userSignsUp,haveCollection }) => {
  const state = {
    ui: {
      en: ['Save','my username','Incorrect username:','Latin alphabet only, please...','Please, Sign Up First:'],
      bg: ['Запази','моето потребителско име','Неправилно име:','Латински букви, моля...','Регистрирайте се, моля:']
    },
    errors: {}
  }

  const [ uname, setUser ] = useState('')
  const [ errors, setErr ] = useState({})
  let history = useHistory()

  const onSubmit = () => {
    let user = {}
    user.logged = true
    user.username = uname
    localStorage.webxUser = uname
    userSignsUp(user)
    .then( res => {
      haveCollection(res)
      history.push('/')
    })
    .catch( err => setErr( {msg: err.msg}) )
  }

  const onInput = e => {
    validate(e.target.value)
    setUser(e.target.value)
  }

  const validate = name => {
    if(name!=='' && !Validator.isAlpha(name)) {
      setErr({msg: state.ui[lan][3]})
    } else {
      setErr({})
    }
  }

  return (
    <div className='init central padded'>
      <div className='custom-form oval-but'>
        <h2>{state.ui[lan][4]}</h2>
        <Form onSubmit={onSubmit}>
          <Form.Input fluid required inline centered focus
            onChange={onInput}
            name='uname'
            placeholder={state.ui[lan][1]}
          />
          {Object.keys(errors).length>0 && <Message negative>
              <Message.Header>{state.ui[lan][2]}</Message.Header>
              <p>{errors.msg}</p>
            </Message>
          }
          <Button type='submit' disabled={uname==='' || Object.keys(errors).length>0} color='blue'>{state.ui[lan][0]}</Button>
        </Form>
      </div>
    </div>
  )
}

SignupForm.propType = {
  lan: PropType.string.isRequired
}

const mapStateToProps = state => ({
  lan: state.settings.lan
})

export default connect(mapStateToProps, { userSignsUp,haveCollection })(SignupForm)
