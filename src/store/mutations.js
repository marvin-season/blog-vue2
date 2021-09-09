import * as TYPES from './types'
import {getDefaultState} from "../utils/auth";

const mutations = {
    [TYPES.SET_TOKEN]: (state, token) => state.token = token,
    [TYPES.RESET_STATE]: state => Object.assign(state, getDefaultState()),
}
export default mutations
