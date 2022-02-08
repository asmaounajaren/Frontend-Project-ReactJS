<<<<<<< HEAD
import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import { publicRequest } from "../requestMethods";

export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
    } catch (err) {
        dispatch(loginFailure());
    }
};
=======
import {loginFailure, loginStart, loginSuccess} from "./userRedux";
import { publicRequest } from "../requestMethods";


export const login=async(dispatch,user)=>{
    dispatch(loginStart());
    try{
        const res=await publicRequest.post("/auth/login",user);
        dispatch(loginSuccess(res.data));
    }catch(err){
        dispatch(loginFailure());
    }
}
>>>>>>> 21f36d3c3d5b71f7d282e0cd6298ab99e7325601
