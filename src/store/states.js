import {getDefaultState} from "../utils/localStore";

const state = {
    token: getDefaultState().token,
    user: JSON.parse(getDefaultState().user) || {}
}
export default state
