import { useSelector } from 'react-redux'

export default function Image({ url, hebrew, english }) {
    const { language } = useSelector((state) => state.settings);

    const value = (language === 'he') ? hebrew : english;

    const style = {
        width: 200
    };

    return (
        <img style={style} src={url} alt={value} />
    )
}
