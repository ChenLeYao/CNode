import list from './list.js';
import book from './book.js';
import details from './details.js';
import user from './user.js';
import { combineReducers } from 'redux';
let reducer = combineReducers({
    list ,
    book ,
    details ,
    user
});
export default reducer;

