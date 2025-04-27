import { create } from "zustand";

interface LoginState {
  isLogin: boolean;
  loginAt: Date | null;
  refreshAt: Date | null;
}

interface TokenState {
  accessToken: string;
  refreshToken: string;
}

interface UserState {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
}

interface AuthState {
    login: LoginState,
    token: TokenState,
    user: UserState,
}

interface AuthAction {
  signIn: (credential: {
    username: string;
    password: string;
    expiresInMins?: number;
  }) => void;
  signOut: () => void,
  me: () => void;
  refresh: () => void;
}

const authStore = create<AuthState & AuthAction>((set, get) => ({
    login: {
        isLogin: false,
        loginAt: null,
        refreshAt: null,
    },
    token: {
        accessToken: "",
        refreshToken: "",
    },
    user: {
        id: 0,
        username: "",
        email: "",
        firstName: "",
        lastName: "",
        gender: "",
        image: "",
    },
    signIn: ({ username, password, expiresInMins }) => {
        fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              username: username,
              password: password,
              expiresInMins: expiresInMins, 
            }),
            credentials: 'include'
          })
          .then(res => res.json())
          .then(auth => {
            set(() => ({ 
                user: {
                    ...auth,
                },
                token: {
                    ...auth,
                },
                login: {
                    isLogin: true,
                    loginAt: new Date,
                    refreshAt: null,
                }
             }));
          })
          .then(console.log);
    },
    signOut: () => {},
    me: () => {},
    refresh: () => {},
//   updateFirstName: (firstName) => set(() => ({ firstName: firstName })),
//   updateLastName: (lastName) => set(() => ({ lastName: lastName })),
}));
