import axios from 'axios';

export const getVipcars = () =>async dispatch => {
    await axios
        .get(
            `http://localhost:3001/vipcars`
        )
        .then(res =>  dispatch({ type: 'GET_VIPCARS', payload: res.data }));

};
export const addWishList = car => {
    return {
        type: 'ADD_WISHLIST',
        payload: car,
    };
};

export const deleteWishList = id => {
    return {
        type: 'DELETE_FROM_WISHLIST',
        payload: id,
    };
};
