import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipes } from './recipesSlice';
import './RecipesList.css'

export default function RecipesList() {
    const STRINGS = {
        en: {
            title: "Recipes List",
            pleaseLogin: "Please login to see the recipes.",
            loading: "Loading...",
            error: "Error loading recipes",
            ingredients: "ingredients",
            cookingTime: "Cooking time",
            minutes: "minutes",
            rating: "Rating"
        },
        he: {
            title: "רשימת מתכונים",
            pleaseLogin: "אנא התחבר כדי לראות את המתכונים.",
            loading: "טוען...",
            error: "שגיאה בטעינת המתכונים",
            ingredients: "מרכיבים",
            cookingTime: "זמן בישול",
            minutes: "דקות",
            rating: "דירוג"
        }
    };

    const { language } = useSelector(state => state.settings);
    const style = { direction: language === 'he' ? 'rtl' : 'ltr' };

    const { currentUser } = useSelector(state => state.users);
    const { recipes, status } = useSelector(state => state.recipes);
    const dispatch = useDispatch();

    useEffect(() => {
        // improve: add status check to avoid re-fetching
        if (!recipes?.length)
            dispatch(fetchRecipes());
    }, [dispatch, recipes]);

    if (!currentUser) {
        return <p style={style}>{STRINGS[language].pleaseLogin}</p>
    }

    return (<div className="RecipesList" style={style}>
        <h2>{STRINGS[language].title}</h2>
        {status === 'loading' && <p>{STRINGS[language].loading}</p>}
        {status === 'failed' && <p>{STRINGS[language].error}</p>}
        {status === 'succeeded' && <ul>
            {recipes.map(recipe => (<li key={recipe.id}>
                <h3>{recipe.name}</h3>
                <p>{recipe.ingredients.length} {STRINGS[language].ingredients}</p>
                <p>{recipe.tags.map(tag => <span key={tag} className='tag'>{tag}</span>)}</p>
                <p>{STRINGS[language].cookingTime}: {recipe.cookTimeMinutes} {STRINGS[language].minutes}</p>
                <img src={recipe.image} alt={recipe.name} width={150} />
                <p>{STRINGS[language].rating}: {new Array(Math.floor(recipe.rating)).fill(0).map((_, i) => <span key={i}>⭐</span>)}</p>
            </li>))}
        </ul>}
    </div>)
}