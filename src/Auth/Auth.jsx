import { useContext } from 'react';
import { AuthContext } from './Provider';

export function useAuth() {
    return useContext(AuthContext);
}