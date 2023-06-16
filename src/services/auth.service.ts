import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "./firebase.service";
import HttpService from "./http.service";

export enum SignInStatus {
    SUCCESS,
    AUTH_FIREBASE_FAIL,
    AUTH_1C_FAIL,

}

const AUTH_PATH = "/auth";

const signInWithCredentials = async (email: string, password: string) => {
    let firebaseUser = null;
    //firebase auth
    try {
        firebaseUser = await signInWithEmailAndPassword(auth, email, password);
        if (!firebaseUser) {
            return SignInStatus.AUTH_FIREBASE_FAIL
        }
    } catch (error) {
        return SignInStatus.AUTH_FIREBASE_FAIL;
    }
    //1C auth
 
      const result=await  HttpService.post('/auth', {
            body: {
                UUID:firebaseUser.user.uid
            }
        });
        if(result?.status!==200)
        {
            return SignInStatus.AUTH_1C_FAIL;
        }

        //TODO: handle success data later


    return SignInStatus.SUCCESS;

}

export  {
   signInWithCredentials,
}