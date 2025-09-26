import { useId } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup"

import './Login.css';
import { login } from './usersSlice';
import Button from '../app/Button';

const schema = yup
    .object({
        name: yup.string().trim().required(),
        password: yup.string().min(6).required(),
    })
    .required();

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

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const id = useId();

    const { language } = useSelector(state => state.settings);
    const direction = (language === 'he') ? 'rtl' : 'ltr';
    const dispatch = useDispatch();

    const onSubmit = ({ name, password }) => {
        dispatch(login({ name, password }));
    };

    return (
        <div className='Login' style={{ direction }}>
            <h2>{STRINGS[language].title}</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor={`name${id}`}>{STRINGS[language].name}: </label>
                    <input type="text" name="name" id={`name${id}`} {...register("name", { required: true })} />
                    {errors.name && <span className='error'>{errors.name.message}</span>}
                </div>
                <div>
                    <label htmlFor={`password${id}`}>{STRINGS[language].password}: </label>
                    <input type="password" name="password" id={`password${id}`} {...register("password", { required: true })} />
                    {errors.password && <span className='error'>{errors.password.message}</span>}
                </div>
                <Button hebrew={STRINGS.he.button} english={STRINGS.en.button} />
            </form>
        </div>
    )
}
