import { useSelector } from 'react-redux'

export default function Button({ hebrew, english }) {
    const { theme, language, fontSize } = useSelector((state) => state.settings);

    const value = (language === 'he') ? hebrew : english;
    const dir = (language === 'he') ? 'rtl' : 'ltr';

    const style = {
        direction: dir,
        color: (theme === 'dark') ? 'lightblue' : 'darkblue',
        background: (theme === 'dark') ? 'darkblue' : 'lightblue',
        fontSize
    };

    return (
        <button style={style}>{value}</button>
    )
}
