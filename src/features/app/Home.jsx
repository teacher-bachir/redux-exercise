import Image from './Image';
import logo from '../../assets/react.svg';

export default function Home() {
  return (<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
    <Image english='Welcome to the Home Page' hebrew='ברוך הבא לדף הבית' url={logo} />
  </div>)
}
