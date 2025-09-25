import { useSelector } from "react-redux"
import './NotFound.css';

export default function NotFound() {
    const { language } = useSelector(state => state.settings)

  return (
      <div className="NotFound" style={{ direction: language === 'he' ? 'rtl' : 'ltr' }}>
          {language === 'en' ? 'Page Not Found' : 'הדף לא נמצא'}
      </div>
  )
}
