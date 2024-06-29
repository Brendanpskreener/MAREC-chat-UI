import './App.css'
import { awsExports } from "./aws-exports"
import { Amplify } from "aws-amplify"
import { Authenticator } from "@aws-amplify/ui-react"
import '@aws-amplify/ui-react/styles.css'

Amplify.configure({
  Auth: {
    Cognito: {
      userPoolWebClientId: awsExports.USER_POOL_APP_CLIENT_ID,
      userPoolId: awsExports.USER_POOL_ID,
    }
  }
})

export default function App() {

  return (
    <Authenticator>
      {({ signOut, user }) => {
        <>
          <p>Welcome {user.username}</p>
          <button onClick={signOut}>Logout</button>
        </>
      }}
    </Authenticator>
    // <>
    //   <div className="centered-form">
    //     <div className="centered-form__box">
    //       <h1>MAREC Chat</h1>
    //       <button>Login</button>
    //     </div>
    //   </div>
    // </>
  )
}

