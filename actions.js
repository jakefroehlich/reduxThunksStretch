const axios = require('axios');

//TYPES
const { GOT_DESSERTS_DATA, NEW_DESSERT_DATA } = require('./types');

/* YOUR CODE GOES HERE */

function gotDesserts()  {
    return {
        type : GOT_DESSERTS_DATA
    }
}

const addDessert = (dessert) => {
    return {
        type : NEW_DESSERT_DATA,
        dessert,
    }
}


const fetchDesserts = () => {
    return (dispatch) => {
        axios.get('/api/desserts')
            .then((data) => dispatch(gotDesserts, data))
    }
}

const postDessert = () => {

}
module.exports = { gotDesserts, addDessert, fetchDesserts, postDessert };
