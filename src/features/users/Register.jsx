import { useId, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { register } from './usersSlice';
import Button from '../app/Button';

// controlled form
export default function Register() {
    const STRINGS = {
        en: {
            title: 'Register',
            name: 'name',
            password: 'password',
            email: 'email',
            button: 'OK'
        },
        he: {
            title: 'הרשמה',
            name: 'שם משתמש',
            password: 'סיסמא',
            email: 'אימייל',
            button: 'אישור'
        }
    };

    const id = useId();
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const { language } = useSelector(state => state.settings);
    const direction = (language === 'he') ? 'rtl' : 'ltr';
    const dispatch = useDispatch();

    const handleSubmit = (ev) => {
        ev.preventDefault();
        dispatch(register({ name, password, email }));
    };

    return (
        <div style={{ direction }}>
            <h2>{STRINGS[language].title}</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor={`name${id}`}>{STRINGS[language].name}: </label>
                    <input type="text" name="name" id={`name${id}`} value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor={`password${id}`}>{STRINGS[language].password}: </label>
                    <input type="password" name="password" id={`password${id}`} value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <label htmlFor={`email${id}`}>{STRINGS[language].email}: </label>
                    <input type="email" name="email" id={`email${id}`} value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <Button hebrew={STRINGS.he.button} english={STRINGS.en.button} />
            </form>
        </div>
    )
}
