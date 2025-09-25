import Button from "../app/Button";
import Image from "../app/Image";
import List from "../app/List";

export default function SettingsExamplePage() {
    return (<>
        <Button hebrew='לחץ עלי!' english='Click Me!' />
        <Image url={'https://www.z-zol.co.il/images/itempics/59030_large.jpg'} hebrew='כדור' english='Ball' />
        <List
            hebrew={['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי', 'שישי', 'שבת']}
            english={['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']} />
    </>)
}
