import { useId, useRef } from 'react'
import { useDispatch } from 'react-redux';

import { login } from './usersSlice';

// uncontrolled form
export default function Login() {
    const id = useId();
    const nameRef = useRef();
    const passwordRef = useRef();

    const dispatch = useDispatch();

    const handleSubmit = (ev) => {
        ev.preventDefault();
        const name = nameRef.current.value;
        const password = passwordRef.current.value;
        dispatch(login({ name, password }));
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor={`name${id}`}>name: </label>
                    <input type="text" name="name" id={`name${id}`} ref={nameRef} />
                </div>
                <div>
                    <label htmlFor={`password${id}`}>password: </label>
                    <input type="text" name="password" id={`password${id}`} ref={passwordRef} />
                </div>
                <button>OK</button>
            </form>
        </div>
    )
}
