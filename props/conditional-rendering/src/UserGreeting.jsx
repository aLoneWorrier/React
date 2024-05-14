import propTypes from 'prop-types'

function UserGreeting(props){
    const welcomeMessage = <h2 className="welcome-message">
                                Welcome {props.userName}
                            </h2>
    const loginPrompt = <h2 className="login-prompt">
                                Please login to continue..!
                        </h2>
    
    return (props.isLoggedIn ? welcomeMessage : loginPrompt)
}
UserGreeting.propTypes = {
    isLoggedIn: propTypes.bool,
    userName: propTypes.string
}

UserGreeting.defaultProps = {
    isLoggedIn: false,
    userName: "Guest"
}

export default UserGreeting