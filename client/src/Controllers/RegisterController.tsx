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
            console.log(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })
        
}