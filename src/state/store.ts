import thunk, { ThunkDispatch } from "redux-thunk";
import { tasksReducer } from "./tasks-reducer";
import { todolistsReducer } from "./todolists-reducer";
import { combineReducers, AnyAction, createStore, legacy_createStore, applyMiddleware } from "redux";
import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const rootReducer = combineReducers({
  tasks: tasksReducer,
  todolists: todolistsReducer,
});
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export type AppDispatchType = ThunkDispatch<AppRootStateType, any, AnyAction>;

export const useAppDispatch = () => useDispatch<AppDispatchType>();
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector;
export type AppRootStateType = ReturnType<typeof rootReducer>;

// @ts-ignore
window.store = store;
