import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import _ from 'lodash'
import { Form,Button,Search,Message } from 'semantic-ui-react'

const SearchForm = ({names}) => {

  const [name,setName] = useState('')
  const [isLoading,setLoad] = useState(false)
  const [results,setResults] = useState([])
  const [char,setChar] = useState()
  const history = useHistory()

  const handleResultSelect = (e, { result,name }) => {
    setName(result.name)
    setChar(result.id)
    history.push(`/character/${char}`)
  }

  const handleSearchChange = (e,data) => {
    setLoad(true)
    setName(data.value)

    setTimeout(() => {
      if (name.length < 1) return
      //console.log(data.value)

      const r = new RegExp(_.escapeRegExp(data.value), 'i')
      const isMatch = result => r.test(result.name)

      setLoad(false)
      setResults(_.filter(names, isMatch))
    }, 300)
  }

  const onSubmit = e => {
    //e.preventDefault()
    console.log(char)
    //history.push(`/character/${char}`)
  }

  return (
      <div className='padded oval'>
        <Form.Group onSubmit={onSubmit}>
          <Form>
            <div>
              <div>
                <Search
                  fluid
                  onResultSelect={handleResultSelect}
                  onSearchChange={handleSearchChange}
                  name='name'
                  results={results}
                  value={name}
                />
              </div>
            </div>
          </Form>
        </Form.Group>
      </div>
  )
}

export default SearchForm
