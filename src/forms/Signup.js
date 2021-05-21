import React, { useState } from 'react'
import { connect } from 'react-redux'
import PropType from 'prop-types'
import Validator from 'validator'
import { Message,Button,Form } from 'semantic-ui-react'

const SignupForm = ({ lan }) => {

console.log(lan)

  const state = {
    ui: {
      en: ['Save','my username'],
      bg: ['Запази','моето потребителско име']
    },
    errors: {}
  }

  const [ uname, setUser ] = useState('')
  const [ errors, setErr ] = useState({})

  const onSubmit = () => {
    localStorage.webxUser = uname
  }

  const onInput = e => {
    validate()
    setUser(e.target.value)
  }

  const validate = () => {
    if(!Validator.isAlpha(uname)) {
      setErr({msg: 'Latin alphabet only, please...'})
    } else if (uname === '') {
      setErr({})
    } else {
      setErr({})
    }
  }

  return (
      <div className='custom-form oval-but'>
        <h2>Please, Sign Up First:</h2>
        <Form onSubmit={onSubmit}>
          <Form.Input fluid required inline centered focus
            onChange={onInput}
            name='uname'
            placeholder={state.ui[lan][1]}
          />
          {Object.keys(errors).length>0 && <Message negative>
              <Message.Header>Incorrect username:</Message.Header>
              <p>{errors.msg}</p>
            </Message>
          }
          <Button type='submit' fluid={true} color='blue'>{state.ui[lan][0]}</Button>
        </Form>
      </div>
  )
}

SignupForm.propType = {
  lan: PropType.string.isRequired
}

const mapStateToProps = state => ({
  lan: state.settings.lan
})

export default connect(mapStateToProps)(SignupForm)
