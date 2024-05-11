// import styles from './Button.module.css'

function Button(){
    const styles = {
        backgroundColor: "hsl(200, 100%, 50%)",
        color: "white",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
    }

    return (
        // <button className="button">Click me</button> // external css
        // <button className={styles.button}>Click me</button> // module css
        <button style={styles}>Click me</button> // inline
    )
}

export default Button