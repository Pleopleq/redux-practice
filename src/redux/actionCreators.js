import { ADD_TO_CART, GET_COURSES, REMOVE_FROM_CART } from './actions'
import axios from "axios"

const addToCart = (id) => ({
    type: ADD_TO_CART,
    id
})

const deleteFromCart = (id) => ({
    type: REMOVE_FROM_CART,
    id
})

const getCourses = () => dispatch => {
    axios.get('http://my-json-server.typicode.com/betoquiroga/json-db/cursos')
    .then(response => {
        return dispatch({
            type: GET_COURSES,
            courses: response.data
        })
    })
}

export { addToCart, deleteFromCart, getCourses }