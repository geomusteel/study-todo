// src/app/hooks.ts
import {TypedUseSelectorHook, useSelector, useDispatch} from 'react-redux';
import {RootState, AppDispatch} from './store';

// `useSelector` 훅에 타입을 명시적으로 적용
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
