import { useId } from "react"

export default function Settings() {
    const id = useId();

    return (
        <div>
            <h2>הגדרות</h2>
            <form>
                <div>
                    <label htmlFor={`lang${id}`}>שפה</label>
                    <select id={`lang${id}`}>
                        <option value="hebrew">עברית</option>
                        <option value="english">English</option>
                    </select>
                </div>
                <div>
                    <label htmlFor={`theme${id}`}>ערכת עיצוב</label>
                    <button type="button">Dark</button>
                </div>
                <div>
                    <label htmlFor={`fs${id}`}>גודל כתב</label>
                    <button type="button">+</button>
                    16
                    <button type="button">-</button>
                    <button type="button">אפס</button>
                </div>
            </form>
        </div>
    )
}
