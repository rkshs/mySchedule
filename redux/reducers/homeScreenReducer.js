import {ADD_NEW_RECORD} from '../constants'

export const homeScreenReducer = (state = {records: []}, action) => {
    switch (action.type) {
        case ADD_NEW_RECORD: {
            const newRecord = {name: 'Новая запись', oneTimeMax: 0};
            return {
                ...state,
                records: [
                    ...state.records, newRecord
                ]
            }
        }
        default: {
            return state;
        }
    }
};