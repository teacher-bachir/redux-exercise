import { useId } from "react"
import { useDispatch, useSelector } from "react-redux";
import { decFontSize, incFontSize, resetFontSize, toggleLanguage, toggleTheme } from "./settingsSlice";

export default function Settings() {
    const id = useId();

    const { theme, language, fontSize } = useSelector((state) => state.settings);
    const dispatch = useDispatch();

    return (
        <div>
            {language === 'en' ?
                (<h2>Settings</h2>) :
                (<h2>הגדרות</h2>)}
            <form>
                <div>
                    <label htmlFor={`lang${id}`}>שפה</label>
                    <select id={`lang${id}`} value={language} onChange={() => dispatch(toggleLanguage())}>
                        <option value="he">עברית</option>
                        <option value="en">English</option>
                    </select>
                </div>
                <div>
                    <label htmlFor={`theme${id}`}>ערכת עיצוב</label>
                    <button type="button" onClick={() => dispatch(toggleTheme())}>{theme}</button>
                </div>
                <div>
                    <label htmlFor={`fs${id}`}>גודל כתב</label>
                    <button type="button" onClick={() => dispatch(incFontSize())}>+</button>
                    <span>{fontSize}</span>
                    <button type="button" onClick={() => dispatch(decFontSize())}>-</button>
                    <button type="button" onClick={() => dispatch(resetFontSize())}>אפס</button>
                </div>
            </form>
        </div>
    )
}
