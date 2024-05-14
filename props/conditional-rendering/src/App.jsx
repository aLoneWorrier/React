// conditional-rendering ->  allows you to control what renders in the application
//                          based on certain conditions.
//                          (show, hide, or change components)

import UserGreeting from "./UserGreeting"

function App() {
  return (
    <>
      <UserGreeting isLoggedIn={true} userName="Krishna"/>
    </>
  )
}

export default App
