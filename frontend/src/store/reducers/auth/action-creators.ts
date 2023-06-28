import { AuthActionEnum, SetUserAction,  SetAuthAction, SetIsLoadingAction, SetErrorAction } from './types';
import { IUser } from '../../../models/IUser';
import { AppDispatch } from '../../index';
// import axios from 'axios';
import UserService from '../../../api/UserService';

export const AuthActionCreators = {
    setUser: (user: IUser): SetUserAction => ({type: AuthActionEnum.SET_USER, payload: user}),
    setIsAuth: (auth: boolean): SetAuthAction => ({type: AuthActionEnum.SET_AUTH, payload: auth}),
    setIsLoading: (payload: boolean): SetIsLoadingAction => ({type: AuthActionEnum.SET_IS_LOADING, payload}),
    setError: (payload: string): SetErrorAction => ({type: AuthActionEnum.SET_ERROR, payload}),
    login: (username: string, password: string) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AuthActionCreators.setIsLoading(true));
           setTimeout(async () => {
            // const response = await axios.get<IUser[]>('./users.json');
            const response = await UserService.getUsers();
            const mockUsers = response.data.find(user => user.username === username && user.password === password)
            if (mockUsers) {
                localStorage.setItem('auth', 'true');
                localStorage.setItem('username', mockUsers.username);
                dispatch(AuthActionCreators.setUser(mockUsers));
                dispatch(AuthActionCreators.setIsAuth(true));
            }
            else {
                dispatch(AuthActionCreators.setError('Некорректные данные'));
            }
            dispatch(AuthActionCreators.setIsLoading(false));
           }, 1000)
        } catch (error) {
            dispatch(AuthActionCreators.setError('Ошибка...'));
        }
    },
    logout: () => async (dispatch: AppDispatch) => {
            localStorage.removeItem('auth');
            localStorage.removeItem('username');
            dispatch(AuthActionCreators.setUser({} as IUser));
            dispatch(AuthActionCreators.setIsAuth(false));
    }
}