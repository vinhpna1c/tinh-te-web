import { CreateUserDTO } from "../models/CreateUserDTO";
import HttpService from "./http.service";

const USER_PATH='/user';

const createUser=async(userData:CreateUserDTO)=>{
    console.info("Body create user: "+JSON.stringify(userData));
    const result=await HttpService.post(USER_PATH,{body:userData});
    console.info(JSON.stringify(result))
    //created successfull
    return result?.status==201;
}

export{
    createUser,
}