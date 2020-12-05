export const REGISTER = 'REGISTER'
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const REGISTER_ERROR = 'REGISTER_ERROR'



const register = (data) => (dispatch) => {
    console.log(data)
    dispatch({
        type: REGISTER_SUCCESS,
        registeredUser: { firstName: 'ParamJeet', lastName: 'Kaur' },
    })
    // const request = apiPost('register', data);
    // dispatch({ type: REGISTER })
    // request.then((response) => {
    //     const { data } = response.data;
    //     dispatch({
    //         type: REGISTER_SUCCESS,
    //         user: data,
    //     })
    // }).catch((err) => {
    //     dispatch({
    //         type: REGISTER_ERROR,
    //         err: err.response.data.message
    //     })
    // }).catch((e) => {
    //     console.log(e)
    // });
};


export { register }