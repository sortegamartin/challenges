import { IState, Screens } from "../model/IState";
import { CREATE_NEW_CHALLENGE, DID_SAVE_CHALLENGE, WILL_SAVE_CHALLENGE, WILL_GET_CHALLENGES, DID_GET_CHALLENGES } from "../actions";

export function reducer(state: IState, action: any): any {
    switch (action.type) {
        case CREATE_NEW_CHALLENGE:
            return Object.assign({}, state, { screen: Screens.CREATE_NEW_CHALLENGE })
        case WILL_SAVE_CHALLENGE:
            return Object.assign({}, state, { isLoading: true })
        case DID_SAVE_CHALLENGE:
            return Object.assign({}, state, { screen: Screens.CHALLENGES_LIST, isLoading: false })
        case WILL_GET_CHALLENGES:
            return Object.assign({}, state, { isLoading: true, screen: Screens.CHALLENGES_LIST })
        case DID_GET_CHALLENGES:
            return Object.assign({}, state, { isLoading: false, challenges: action.challenges })
        default:
            return state;
    }
}