import { useState } from 'react'
import LoginForm from './components/LoginForm.jsx'
import Blogs from './components/Blogs.jsx'
import { getFromLocalStorage } from './utils/methods.js'


const App = () => {
  const [user, setUser] = useState(getFromLocalStorage('USER'))
  return (
    <div>
      {
        user && user.token ?
          <Blogs user={user} emitUserChanges={(data) => setUser(data)}/>
          : <LoginForm emitUser={(data) => setUser(data)}/>
      }

    </div>
  )
}

export default App