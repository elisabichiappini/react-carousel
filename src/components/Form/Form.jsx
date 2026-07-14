import { useState } from "react";
export default function Form() {
    const [ingredients, setingredients] = useState([]);
    const [ingredientName, setingredientName] = useState("");

    const handelSubmit = (e) => {
        e.preventDefault();
        setingredients( array => {
            const copiaArray= [...array];
            copiaArray.push(ingredientName);
            return copiaArray;
        });
        setingredientName("");
    };

    const removeIngredient = (indexDaEliminare) => {
        setingredients(array => array.filter((_, i) => i !== indexDaEliminare));
    }

    return (
        <form className="form-element" onSubmit={handelSubmit}>
            Inserisci ingrediente:
            <input 
                type="text"     
                value={ingredientName} 
                onChange={(e) => setingredientName(e.target.value)} />
            <button 
                type="submit" 
                className="btn">
                Aggiungi
            </button>
            
            <div className="ingredient-list">
                <h4 className="ingredient-title">📋 Lista ingredienti</h4>
                <ul>
                    {ingredients.map((ingredient, index) => (
                        <li 
                        className="ingredient-css" 
                        key={index}
                        onClick={() => removeIngredient(index)}>
                            {ingredient}</li>
                    ))}
                </ul>
            </div>
        </form>
    );
}