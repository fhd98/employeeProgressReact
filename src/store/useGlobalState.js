import { useReducer } from "react";

const reducer =(state,action)=>{
    switch(action.type){
        case "TOKEN":
           localStorage.setItem('token',JSON.stringify(action.data));
        return {
                ...state,
                token:action.data
            };
            default:{
                return state;
            }
    }
};

const getToken=()=>
{
 return localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')) : {token:''};
}

const useGlobalState=()=>
{
    const [globalState,globalDispatch]=useReducer(reducer,{
        token:getToken()
    });

    return {globalState,globalDispatch};
}
export default useGlobalState;