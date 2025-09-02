import Settings from '../settings/Settings'
import './App.css'
import Button from './Button'
import Image from './Image'
import List from './List'

function App() {
    return (
        <>
            <Settings />
            <Button hebrew='לחץ עלי!' english='Click Me!' />
            <Image url={'https://www.z-zol.co.il/images/itempics/59030_large.jpg'} hebrew='כדור' english='Ball' />
            <List
                hebrew={['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי', 'שישי', 'שבת']}
                english={['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']} />
        </>
    )
}

export default App
