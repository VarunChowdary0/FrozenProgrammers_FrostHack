import axios from "axios";
import { v4 as uuidv4 } from 'uuid'

const server = "http://localhost:1800/";

export const create_my_Account = (name:string,email:string,password:string) =>{
    const USER_UID = uuidv4();
    return  axios
        .post(server+"signup",{
            name ,
            email,
            password,
            USER_UID
        })
        .then((res)=>{
            return {status:true,data:res.data.data}
        })
        .catch((err)=>{
            return {status:false,data:"NO"}
        })       
}

export const login_to_account = (email:string,password:string) => {
    return axios
        .post(server+"login",{
            email,
            password
        })
        .then((res)=>{
            return {status:true,data:res.data.data}
        })
        .catch((err)=>{
            return {status:false,data:"NO"}
        })  
}