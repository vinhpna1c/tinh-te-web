import { User } from "firebase/auth";

interface AuthContextProps {
    user: any,
    firebaseUser: User | null,
};
export default AuthContextProps;