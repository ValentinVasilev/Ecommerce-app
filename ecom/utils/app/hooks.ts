import {
  TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from 'react-redux';
import type {
  AppDispatch,
  RootState,
} from './store';

// TODO to fix useDispatch type
export const useAppDispatch = () => useDispatch<AppDispatch & any>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;