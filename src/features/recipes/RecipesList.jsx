import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipes } from './recipesSlice';
import './RecipesList.css'

export default function RecipesList() {
    const { currentUser } = useSelector(state => state.users);
    const { recipes, status } = useSelector(state => state.recipes);
    const dispatch = useDispatch();

    useEffect(() => {
        // improve: add status check to avoid re-fetching
        if (!recipes?.length)
            dispatch(fetchRecipes());
    }, [dispatch, recipes]);

    if (!currentUser) {
        return <p>Please login to see the recipes.</p>
    }

    return (<div className="RecipesList">
        <h2>Recipes List</h2>
        {status === 'loading' && <p>Loading...</p>}
        {status === 'failed' && <p>Error loading recipes</p>}
        {status === 'succeeded' && <ul>
            {recipes.map(recipe => (<li key={recipe.id}>
                <h3>{recipe.name}</h3>
                <p>{recipe.ingredients.length} ingredients</p>
                <p>{recipe.tags.map(tag => <span key={tag} className='tag'>{tag}</span>)}</p>
                <p>Cooking time: {recipe.cookTimeMinutes} minutes</p>
                <img src={recipe.image} alt={recipe.name} width={150} />
                <p>Rating: {new Array(Math.floor(recipe.rating)).fill(0).map((_, i) => <span key={i}>⭐</span>)}</p>
            </li>))}
        </ul>}
    </div>)
}