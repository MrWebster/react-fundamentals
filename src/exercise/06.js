// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const [username, setUsername] = React.useState('')
  // const [error, setError] = React.useState(false)

  const inputRef = React.useRef(null)

  const handleSubmit = event => {
    event.preventDefault()

    // if (error) return

    // onSubmitUsername(event.target.elements.username.value)
    onSubmitUsername(username)
  }

  const handleChange = () => {
    const {value} = inputRef.current
    setUsername(value.toLowerCase())

    // setError(
    //   inputRef.current.value === inputRef.current.value.toLowerCase()
    //     ? false
    //     : true,
    // )
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          onChange={handleChange}
          value={username}
          ref={inputRef}
          id="username"
          type="text"
        />
        {
          // error ? (
          //   <div style={{color: 'red'}} role="alert">
          //     Username must be lowercase
          //   </div>
          // ) : null
        }
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => {
    return alert(`You entered: ${username}`)
  }
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
