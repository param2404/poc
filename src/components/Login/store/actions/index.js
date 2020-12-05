export const LOGIN_USER = 'LOGIN_USER'
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS'
export const LOGIN_USER_ERROR = 'LOGIN_USER_ERROR'



const login = (data) => (dispatch) => {
    localStorage.setItem('token', 'ecvbnfghjkKFTYGHCFVBdtfh3456')
    dispatch({
            type: LOGIN_USER_SUCCESS,
            user: {firstName:'ParamJeet',lastName:'Kaur'},
    })
    // const request = apiPost('login', data);
    // dispatch({ type: LOGIN_USER })
    // request.then((response) => {
    //     const { data } = response.data;
    //     dispatch({
    //         type: LOGIN_USER_SUCCESS,
    //         user: data,
    //     })
    // }).catch((err) => {
    //     dispatch({
    //         type: LOGIN_USER_ERROR,
    //         err: err.response.data.message
    //     })
    // }).catch((e) => {
    //     console.log(e)
    // });
};


export { login }