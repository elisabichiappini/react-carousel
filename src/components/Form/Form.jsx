import { useState } from "react";
export default function Form() {
    const [ingrediants, setIngrediants] = useState([]);
    const [ingrediantName, setIngrediantName] = useState("");

    const handelSubmit = (e) => {
        e.preventDefault();
        setIngrediants( array => {
            const copiaArray= [...array];
            copiaArray.push(ingrediantName);
            return copiaArray;
        });
        setIngrediantName("");
    }

    return (
        <form className="form-element" onSubmit={handelSubmit}>
            Inserisci ingrediente:
            <input 
                type="text" 
                value={ingrediantName} 
                onChange={(e) => setIngrediantName(e.target.value)} />
            <button 
                type="submit" 
                className="btn">
                Aggiungi
            </button>
            
            <div className="ingredient-list">
                <h4 className="ingredient-title">📋 Lista ingredienti</h4>
                <ul>
                    {ingrediants.map((ingrediant, index) => (
                        <li 
                        className="ingredient-css" 
                        key={index}>
                            {ingrediant}
                        </li>
                    ))}
                </ul>
            </div>
        </form>
    );
}