import { List, ListItem } from '@mui/material';
import { useSelector } from 'react-redux'

export default function CustomList({ hebrew, english }) {
    const { theme, language, fontSize } = useSelector((state) => state.settings);

    const value = (language === 'he') ? hebrew : english;
    const dir = (language === 'he') ? 'rtl' : 'ltr';

    const style = {
        direction: dir,
        color: (theme === 'dark') ? 'darkblue' : 'lightblue',
        fontSize
    };

    return (
        <List style={style}>
            {value.map((item, index) => <ListItem key={index}>{item}</ListItem>)}
        </List>
    )
}
