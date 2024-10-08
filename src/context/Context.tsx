import React, {createContext, FC, useState} from 'react';

const InitContext = {
    auth: false,
    changeAuth: () => {}
}

export const UserContext = createContext<typeof InitContext>(InitContext)

interface IContext {
    children: React.ReactNode
}

const Context: FC<IContext> = ({children}) => {
    const [auth, setAuth] = useState<boolean>(false)

    const changeAuth = () => {
        setAuth(prev => !prev)
    }

    const value = {
        auth,
        changeAuth
    }
    return (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    );
};

export default Context;