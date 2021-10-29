import React,{useReducer} from 'react'

const fullname =  localStorage.getItem('fullname');
const email = localStorage.getItem('email');
const role = localStorage.getItem('role');
const created_at = localStorage.getItem('created_at');
const isLoggedIn = localStorage.getItem('isLoggedIn')
const access_token =  localStorage.getItem('access_token');
const refresh_token =  localStorage.getItem('refresh_token');
const _id =  localStorage.getItem('_id');
const Subscribe =  localStorage.getItem('Subscribe');

const initialState = {
    isLoggedIn: isLoggedIn ? isLoggedIn : false,
    fullname: fullname? fullname: null,
    email: email ? email : null,
    role: role ? role : null,
    created_at: created_at ? created_at : null,
    access_token: access_token? access_token: null,
    refresh_token: refresh_token? refresh_token: null,
    _id: _id? _id: null,
    Subscribe: Subscribe ? Subscribe :null,
}
export const AuthContext = React.createContext(initialState);

const reducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                isLoggedIn: action.payload.isLoggedIn, 
                fullname: action.payload.fullname, 
                email: action.payload.email, 
                role: action.payload.role, 
                created_at: action.payload.created_at, 
                access_token: action.payload.access_token, 
                refresh_token: action.payload.refresh_token, 
                _id: action.payload._id, 
                Subscribe: action.payload.Subscribe, 
            }
            
        case 'LOGOUT':
            localStorage.clear();
            localStorage.removeItem('access_token');
            localStorage.removeItem('refresh_token');
            localStorage.removeItem('isLoggedIn');
            localStorage.removeItem('fullname');
            localStorage.removeItem('email');    
            localStorage.removeItem('_id');    
            localStorage.removeItem('Subscribe'); 
            localStorage.clear();   
            return {
                ...state,
                isLoggedIn: false,
                fullname: null,
                email: null,
                access_token: null,
                refresh_token: null,
                _id: null,
                Subscribe:null,
            }    
        case 'SUBSCRIBE':
            return {
                ...state,
                Subscribe: true,
            } 
        case 'UNSUBSCRIBE':
            return {
                ...state,
                Subscribe: false,
            } 
        default:
            return state;
    }  
}

function AuthProvider({children}){
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <AuthContext.Provider value={{ state, dispatch}}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;
