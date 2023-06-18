import { CreateUserDTO } from './../models/CreateUserDTO';
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth"
import { auth } from "./firebase.service";
import HttpService from "./http.service";
import { createUser } from "./user.service";

enum SignInStatus {
    SUCCESS,
    AUTH_FIREBASE_FAIL,
    AUTH_1C_FAIL,

}
enum SignInMethod {
    CREDENTIAL,
    FACEBOOK,
    GOOGLE,
    APPLE,

}

const AUTH_PATH = "/auth";

const signIn = async (method: SignInMethod, data?: { email: string, password: string }) => {
    let firebaseUser = null;

    //1: auth with firebase (check method)
    switch (method) {
        case SignInMethod.GOOGLE:
            firebaseUser=await signInWithGoogle();
            break;
        default:
            //check data passing is exist
            if (data) {
                firebaseUser = await signInWithCredentials(data.email,data.password);
            }
            break;
    }
    //handle fail with firebase
    if (!firebaseUser) {
        return SignInStatus.AUTH_FIREBASE_FAIL
    }
    //2: auth with 1C
    const result = await HttpService.post(AUTH_PATH, {
        body: {
            UUID: firebaseUser?.uid
        }
    });
    console.log("Auth result: "+JSON.stringify(result))
    //check user data is created
    if (result?.status !== 200) {
        const user_1C:CreateUserDTO={
                Username:firebaseUser.email??'',
                Fullname:'',
                UUID:firebaseUser.uid,
                Password:data?.password,
                Email:firebaseUser.email??undefined,
                Avatar:firebaseUser.photoURL??undefined,
        };
        createUser(user_1C).then((result)=>console.info("created new user information profile: "+result));
    }


    //3: handle result
    //TODO: handle success data later
    return SignInStatus.SUCCESS;
}

//sign in with credential
const signInWithCredentials = async (email: string, password: string) => {
    const firebaseUser = await signInWithEmailAndPassword(auth, email, password);
    if (!firebaseUser) {
        return null;
    }
    return firebaseUser.user;
}
// sign in with google
const signInWithGoogle = async () => {
    const googleProvider = new GoogleAuthProvider();
    const firebaseUser= await signInWithPopup(auth, googleProvider);
    if(!firebaseUser){
        return null;
    }
    return firebaseUser.user;
}
// sign in with facebook


export {
    SignInStatus,
    SignInMethod,
    signIn,
}