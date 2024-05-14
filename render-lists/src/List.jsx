import propTypes from 'prop-types'

function List(props){

    const itemList = props.items
    const category = props.category

    // fruits.sort((a, b) => a.name.localeCompare(b.name)) // Alphabetical
    // fruits.sort((a, b) => b.name.localeCompare(a.name)) // Reverse Alphabetical
    // fruits.sort((a, b) => a.calories - b.calories) // Numeric
    // fruits.sort((a, b) => b.calories - a.calories) // Reverse Numeric

    // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100)
    // const highCalFruits = fruits.filter(fruit => fruit.calories >= 100)

    const listItems = itemList.map(item => <li key={item.id}>
                                                {item.name}: &nbsp;
                                                <b>{item.calories}</b>
                                            </li>)

    return (
        <>
            <h2 className="list-category">{category}</h2>
            <ol className="list-items">{listItems}</ol>
        </>
    )
}

List.propTypes = {
    category: propTypes.string,
    items: propTypes.arrayOf(propTypes.shape({
        id: propTypes.number,
        name: propTypes.string,
        calories: propTypes.number
    }))
}

List.defaultProps = {
    category: "Category",
    items: []
}

export default List