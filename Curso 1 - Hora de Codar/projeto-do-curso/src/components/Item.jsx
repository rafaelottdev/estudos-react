import PropTypes from "prop-types"

function Item({ marca, anoLançamento }) {
    return (
        <>
            <li>{marca} - {anoLançamento}</li>
        </>
    )
}

// Item.propTypes = {
//     marca: PropTypes.string.isRequired,
//     anoLançamento: PropTypes.number
// }

// Item.defaultProps = {
//     marca: 'Faltou a marca',
//     anoLançamento: 0,
// }

export default Item
