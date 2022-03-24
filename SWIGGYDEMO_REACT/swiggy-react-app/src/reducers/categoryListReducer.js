import { sideMenu } from '../models/menu';

const initialState = sideMenu;

function categoryListReducer(state = initialState, action) {
    switch (action.type) {
        case 'categoryList/updated': {
            return action.payload;
        }
        default: {
            return state;
        }
    }
}

export default categoryListReducer;
