import thunk, { ThunkDispatch } from 'redux-thunk';
import { tasksReducer } from './tasks-reducer';
import { todolistsReducer } from './todolists-reducer';
import {combineReducers, AnyAction, createStore, legacy_createStore, applyMiddleware} from 'redux';
import { TypedUseSelectorHook, useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

// объединяя reducer-ы с помощью combineReducers,
// мы задаём структуру нашего единственного объекта-состояния
const rootReducer = combineReducers({
    tasks: tasksReducer,
    todolists: todolistsReducer
})
// непосредственно создаём store
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));


export type AppDispatchType = ThunkDispatch<AppRootStateType, any, AnyAction> 

export const useAppDispatch = () => useDispatch<AppDispatchType>()
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector
// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<typeof rootReducer>

// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store;
