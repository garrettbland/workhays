import { useState, useEffect } from 'react'
import { CognitoUserPool, CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [user, setUser] = useState(null)
    const [requiresPasswordChange, setRequirePassword] = useState(false)
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        const poolData = {
            UserPoolId: 'us-east-2_7YURt6cFs',
            ClientId: '4ebv9u9d0s6bpioe5h4sclqurj',
        }

        const userPool = new CognitoUserPool(poolData)
        const currentUser = userPool.getCurrentUser()

        if (currentUser) {
            currentUser.getSession((err, session) => {
                if (err) {
                    console.log(err)
                } else {
                    setIsLoggedIn(true)
                    setUser(currentUser)
                }
            })
        }
    }, [])

    const handleLogin = (e) => {
        e.preventDefault()

        const poolData = {
            UserPoolId: 'us-east-2_7YURt6cFs',
            ClientId: '4ebv9u9d0s6bpioe5h4sclqurj',
        }

        const userPool = new CognitoUserPool(poolData)

        const authenticationData = {
            Username: email,
            Password: password,
        }

        const authenticationDetails = new AuthenticationDetails(authenticationData)

        const userData = {
            Username: email,
            Pool: userPool,
        }

        const cognitoUser = new CognitoUser(userData)

        setUser(cognitoUser)

        cognitoUser.authenticateUser(authenticationDetails, {
            onSuccess: (session) => {
                console.log(session)
                console.log('Authentication successful')
                // Do something after successful login, such as redirecting to another page
            },
            onFailure: (err) => {
                console.log('Authentication failed')
                console.log(err)
                // Handle the authentication error
            },
            newPasswordRequired: (user) => {
                console.log('a new password is required')
                setRequirePassword(true)
                console.log(user)
            },
        })
    }

    const handlePasswordChange = (e) => {
        e.preventDefault()

        user.completeNewPasswordChallenge(newPassword, null, {
            onSuccess: (session) => {
                console.log('done')
                console.log(session)
            },
            onFailure: (err) => {
                console.log('nope nope')
                console.log(err)
            },
        })

        // user.changePassword(password, newPassword, (err, result) => {
        //     if (err) {
        //         console.log(err)
        //         console.log('there was an error changing passwords')
        //         return
        //     }
        //     console.log(result)
        //     console.log('password changed successfully')
        // })
    }

    const handleSignOut = () => {
        user.signOut(() => {
            console.log('signed out yo')
        })
    }

    return (
        <>
            {isLoggedIn && (
                <div>
                    USER IS LOGGED IN<button onClick={handleSignOut}>Sign out</button>
                </div>
            )}
            {!requiresPasswordChange && (
                <form onSubmit={handleLogin}>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit">Login</button>
                </form>
            )}
            {requiresPasswordChange && (
                <form onSubmit={handlePasswordChange}>
                    <div>
                        <label htmlFor="newPassword">New password:</label>
                        <input
                            type="newPassword"
                            id="newPassword"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit">Change password & login</button>
                </form>
            )}
        </>
    )
}

export default Login
