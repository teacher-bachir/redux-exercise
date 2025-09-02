import { useSelector } from 'react-redux'

export default function List({ hebrew, english }) {
    const { theme, language, fontSize } = useSelector((state) => state.settings);

    const value = (language === 'he') ? hebrew : english;
    const dir = (language === 'he') ? 'rtl' : 'ltr';

    const style = {
        direction: dir,
        color: (theme === 'dark') ? 'darkblue' : 'lightblue',
        fontSize
    };

    return (
        <ol style={style}>
            {value.map((item, index) => <li key={index}>{item}</li>)}
        </ol>
    )
}
