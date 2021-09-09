const TokenKey = 'TOKEN'

export function getToken() {
    return localStorage.getItem(TokenKey)
}

export function setToken(token) {
    localStorage.setItem(TokenKey, token)
}

export function removeToken() {
    localStorage.removeItem(TokenKey)
}

export function getDefaultState() {
    return {
        token: getToken(),
        user: {}
    }
}
