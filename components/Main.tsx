import React from "react";

export const Main = (props: { recipeDetails: any; servings: any }) => {
  const { recipeDetails, servings } = props;
  return (
    <div>
      {recipeDetails && (
        <div className="bg-slate-200 border-white rounded p-3 my-5">
          <h1 className="text-3xl font-bold">{recipeDetails.Name}</h1>
          <h2 className="mt-3 text-2xl font-semibold">Recipe Meta</h2>
          <p>
            Information Source: {recipeDetails.Recipe_Meta.informationSource}
          </p>
          <p>Description: {recipeDetails.Recipe_Meta.description}</p>
          <p>Aliases: {recipeDetails.Recipe_Meta.Aliases.join(", ")}</p>
          <p>Carbon Footprint: {recipeDetails.Recipe_Meta.carbonFootprint}</p>
          <p>Calories: {recipeDetails.Recipe_Meta.calories}</p>
          <p>
            Popular Region: {recipeDetails.Recipe_Meta.popularRegion.join(", ")}
          </p>
          <p>
            Nutrition Fact: {recipeDetails.Recipe_Meta.nutritionFact.join(", ")}
          </p>
          <p>Rating: {recipeDetails.Recipe_Meta.rating.starRating}</p>
          <p>No of Reviews: {recipeDetails.Recipe_Meta.rating.noOfReviews}</p>
          <h2 className="font-semibold mt-3 text-2xl">Interest Tags</h2>
          <p>Tags: {recipeDetails.Interest_Tags.tags.join(", ")}</p>
          <p>Confidence: {recipeDetails.Interest_Tags.confidence.join(", ")}</p>
          <h2 className="font-semibold mt-3 text-2xl">Diet Tags</h2>
          <p>{recipeDetails.Diet_Tags.join(", ")}</p>
          <h2 className="font-semibold mt-3 text-2xl">Cooking Meta</h2>
          <p>
            Ingredients ID:{" "}
            {recipeDetails.Cooking_Meta.ingredientsID.join(", ")}
          </p>
          <h3 className="mt-2 text-xl font-medium">Ingredients</h3>
          Ingredient Name:
          {recipeDetails.Cooking_Meta.ingredients.map(
            (
              ingredient: {
                ingredientName: string;
                ingredientID: string;
              },
              index: number
            ) => (
              <span className="my-3" key={index}>
                {" "}
                {ingredient.ingredientName},{" "}
              </span>
            )
          )}
          <p>Tools: {recipeDetails.Cooking_Meta.tools.join(", ")}</p>
          <p>Cook Time: {recipeDetails.Cooking_Meta.cookTime}</p>
          <p>Prep Time: {recipeDetails.Cooking_Meta.prepTime}</p>
          <p>Difficulty: {recipeDetails.Cooking_Meta.difficulty}</p>
          <p>Steps: {recipeDetails.Cooking_Meta.steps}</p>
          <h2 className="mt-3 text-2xl font-semibold">Serve {servings}</h2>
          {servings && (
            <p>
              Recipe Source: {recipeDetails[`Serve_${servings}`].recipeSource}
            </p>
          )}
          {servings && (
            <p>
              Recipe Last Updated:{" "}
              {recipeDetails[`Serve_${servings}`].lastUpdated}
            </p>
          )}
          <h3 className="mt-2 text-2xl font-bold">Instructions</h3>
          {servings &&
            recipeDetails[`Serve_${servings}`].instructions.map(
              (
                instruction: {
                  stepNumber: number;
                  stageTitle: string;
                  stepType: string;
                  instruction: string;
                  time: number;
                  tool: string;
                },
                index: number
              ) => (
                <div className="my-3" key={index}>
                  <h4 className="text-xl font-semibold">
                    {instruction.stepNumber}. {instruction.stageTitle}
                  </h4>
                  <p>Step Type: {instruction.stepType}</p>
                  <p>Instruction: {instruction.instruction}</p>
                  <p>Time: {instruction.time}</p>
                  <p>Tool: {instruction.tool}</p>
                </div>
              )
            )}
        </div>
      )}
    </div>
  );
};
