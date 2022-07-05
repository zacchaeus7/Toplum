import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
//import AsyncStorage from '@react-native-community/async-storage';
import { userReducer } from './reducers/userReducer';
import { joinCommunityReducer } from './reducers/joinCommunityReducer'


// const persistConfig = {
//     key: 'root',
//     storage: AsyncStorage
// }

const rootReducer = combineReducers({
    userReducer,
    joinCommunityReducer
});

export const Store = createStore(rootReducer);
export const Persistor = persistStore(Store);