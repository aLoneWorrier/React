function Button(){

    // let count = 0
    // const handleClick = (name) => {
    //     if (count < 3) {
    //         count += 1
    //         console.log(`${name} clicked me {count} number of time/s`)
    //     }
    //     else{
    //         console.log(`${name} stop clicking me`)
    //     }
    // }

    const handleClick = (event) => event.target.textContent = "OUCH!"

    return (
        <button onClick={(e) => handleClick(e)}>Click me 😀</button>
    )
}

export default Button