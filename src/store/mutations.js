import * as TYPES from './types'
import {getDefaultState} from "../utils/auth";

const mutations = {
    [TYPES.SET_TOKEN]: (state, token) => state.token = token,
    [TYPES.SET_USER]: (state, user) => state.user = user,
    [TYPES.RESET_STATE]: state => Object.assign(state, getDefaultState()),
}
export default mutations
