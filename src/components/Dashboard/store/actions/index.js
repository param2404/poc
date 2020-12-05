export const LOGOUT = "LOGOUT"

function logOut() {
    localStorage.removeItem('token')
    return (dispatch => {
        dispatch({ type: LOGOUT})
    })
}

export { logOut }