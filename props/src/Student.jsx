// propstypes -> proptypes are a mechanism that ensures the passed value is of
//               correct datatype.
//               age: propTypes.Number

// defaultProps -> default values for props incase they are not passed in the 
//               parent component.
//               name: "Guest"

import propTypes from 'prop-types'

function Student(props){
    return (
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    )
}
Student.propTypes = {
    name: propTypes.string,
    age: propTypes.number,
    isStudent: propTypes.bool
}

Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false
}

export default Student