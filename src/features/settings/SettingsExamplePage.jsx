import Button from "../app/Button";
import Image from "../app/Image";
import CustomList from "../app/CustomList";
import { Box, Grid } from "@mui/material";

export default function SettingsExamplePage() {
    return (<Grid container direction='column' spacing={2} sx={{ p: 2 }} justifyContent={'center'} alignItems='center'>
        <Button hebrew='לחץ עלי!' english='Click Me!' />
        <br />
        <Image url={'https://www.z-zol.co.il/images/itempics/59030_large.jpg'} hebrew='כדור' english='Ball' />
        <CustomList
            hebrew={['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי', 'שישי', 'שבת']}
            english={['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']} />
    </Grid>)
}
