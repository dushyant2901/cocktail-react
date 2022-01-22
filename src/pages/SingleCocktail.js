import React from "react";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = () => {
  const [cocktail, setCocktail] = useState(null);
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    async function getCocktail() {
      setLoading(true);
      try {
        const response = await fetch(`${url}${id}`);
        const data = await response.json();
        if (data.drinks) {
         
          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = data.drinks[0]
          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ]
          const newCocktail = {
            name,
            image,
            info,
            category,
            glass,
            instructions,
            ingredients,
          }

          setCocktail(newCocktail)
        } else {
          setCocktail(null);
        }
  
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    getCocktail();
  }, [id]);
 
const {name,image,category,glass,instructions,ingredients}=cocktail
  if (loading) {
    return <Loading />;
  }
  if (!cocktail) {
    return <h2 className="section-title">
    no result found</h2>;
  }
  return (
    <section className="section cocktail-section">
      <Link to='/' className="btn btn-primary">Back Home</Link>
      <h2 className="section-title">{name}</h2>
      <div className="drinks">
        <img src={image} alt={name} />
        <p className="drink-info">
          <span>Name:</span>
          {name}
        </p><p className="drink-info">
          <span>Category:</span>
          {category}
        </p><p className="drink-info">
          <span>Glass:</span>
          {glass}
        </p><p className="drink-info">
          <span>Instructions:</span>
          {instructions}
        </p> <p className="drink-info">
          <span>Ingredients:</span>
          {ingredients.map((item,index)=>{
            return item? <span key={index}>{item}</span>:null
          })}
        </p>
      </div>
    </section>
  );
};

export default SingleCocktail;
