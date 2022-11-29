import AuthContext from './AuthContext';
import { useState } from 'react';

const AuthState = (props) => {

    const [isLogged, setIsLogged] = useState(false);

    return (
        <div>
            <AuthContext.Provider value={{ isLogged, setIsLogged }}>
                {props.children}
            </AuthContext.Provider>
        </div>
    )
}

export default AuthState;