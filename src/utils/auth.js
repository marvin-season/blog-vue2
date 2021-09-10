const TokenKey = 'TOKEN'
const UserKey = 'USER'

export function getToken() {
    return localStorage.getItem(TokenKey)
}

export function setToken(token) {
    localStorage.setItem(TokenKey, token)
}

export function removeToken() {
    localStorage.removeItem(TokenKey)
}

export function getUser() {
    return localStorage.getItem(UserKey)
}

export function setUser(user) {
    localStorage.setItem(UserKey, user)

}

export function removeUser() {
    localStorage.removeItem(UserKey)
}

export function getDefaultState() {
    return {
        token: getToken(),
        user: getUser()
    }
}
