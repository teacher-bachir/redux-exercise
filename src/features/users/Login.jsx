import { useId, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { login } from './usersSlice';
import Button from '../app/Button';

// uncontrolled form
export default function Login() {
    const STRINGS = {
        en: {
            title: 'Login',
            name: 'name',
            password: 'password',
            button: 'OK'
        },
        he: {
            title: 'התחברות',
            name: 'שם משתמש',
            password: 'סיסמא',
            button: 'אישור'
        }
    };

    const id = useId();
    const nameRef = useRef();
    const passwordRef = useRef();

    const { language } = useSelector(state => state.settings);
    const direction = (language === 'he') ? 'rtl' : 'ltr';
    const dispatch = useDispatch();

    const handleSubmit = (ev) => {
        ev.preventDefault();
        const name = nameRef.current.value;
        const password = passwordRef.current.value;
        dispatch(login({ name, password }));
    };

    return (
        <div style={{ direction }}>
            <h2>{STRINGS[language].title}</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor={`name${id}`}>{STRINGS[language].name}: </label>
                    <input type="text" name="name" id={`name${id}`} ref={nameRef} />
                </div>
                <div>
                    <label htmlFor={`password${id}`}>{STRINGS[language].password}: </label>
                    <input type="password" name="password" id={`password${id}`} ref={passwordRef} />
                </div>
                <Button hebrew={STRINGS.he.button} english={STRINGS.en.button} />
            </form>
        </div>
    )
}
