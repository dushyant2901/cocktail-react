import React from "react";
import Cocktail from "./Cocktail";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

const CocktailList = () => {
 const{ cockTails,loading} =useGlobalContext()
 
  if (loading) {
    return <Loading/>
  }
  if (cockTails.length <1) {
    return (
      <div>
        <h2 className="section-title">No Cocktails Matched Your Search Criteria</h2>
      </div>
    );
  }
  return (
    <section className="section">
      <h2 className="section-title">Cocktail</h2>
    <div className="cocktail-center">
      {cockTails.map((item) => {
        return <Cocktail key={item.id} {...item} />;
      })}
    </div></section>
  );
};

export default CocktailList;
