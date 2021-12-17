import * as TYPES from './types'
import {getDefaultState, setToken, setUser} from "../utils/localStore";

const mutations = {
    [TYPES.SET_TOKEN]: (state, token) => {
        setToken(token)
        state.token = token
    },

    [TYPES.SET_USER]: (state, user) => {
        setUser(JSON.stringify(user))
        state.user = user
    },

    [TYPES.RESET_STATE]: state => Object.assign(state, getDefaultState()),
}
export default mutations
