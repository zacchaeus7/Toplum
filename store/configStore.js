import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { userReducer } from './reducers/userReducer';
import { joinCommunityReducer } from './reducers/joinCommunityReducer';
import { favoriteMemberReducer } from './reducers/favoritMemberReducer';
import storage from 'redux-persist/lib/storage'


const persistConfig = {
    key: 'root',
     storage: AsyncStorage
}

const rootReducer = combineReducers({
    userReducer,
    joinCommunityReducer,
    favoriteMemberReducer: persistReducer(persistConfig, favoriteMemberReducer),

});

export const Store = createStore(rootReducer);
export const Persistor = persistStore(Store);