"use client";
import React, { useState } from "react";
import axios from "axios";
import { Main } from "./Main";
const Form = () => {
  const [recipeId, setRecipeId] = useState("");
  const [servings, setServings] = useState("");
  const [recipeDetails, setRecipeDetails] = useState<{
    RecipeID: number;
    Name: string;
    Recipe_Meta: {
      informationSource: string;
      description: string;
      Aliases: string[];
      carbonFootprint: number;
      calories: number;
      popularRegion: string[];
      nutritionFact: string[];
      rating: {
        starRating: number;
        noOfReviews: number;
      };
    };
    Interest_Tags: {
      tags: string[];
      confidence: number[];
    };
    Diet_Tags: string[];
    Cooking_Meta: {
      ingredientsID: string[];
      ingredients: {
        ingredientName: string;
        ingredientID: string;
        quantity: string[];
        unit: string;
        optional: boolean;
      }[];
      tools: string[];
      cookTime: number;
      prepTime: number;
      difficulty: string;
      steps: number;
    };
    Serve_1: {
      recipeSource: string;
      lastUpdated: string;
      instructions: {
        stepNumber: number;
        stageTitle: string;
        stepType: string;
        instruction: string;
        time: number;
        tool: string;
      }[];
    };
    Serve_2: {
      recipeSource: string;
      lastUpdated: string;
      instructions: {
        stepNumber: number;
        stageTitle: string;
        stepType: string;
        instruction: string;
        time: number;
        tool: string;
      }[];
    };
    Serve_3: {
      recipeSource: string;
      lastUpdated: string;
      instructions: {
        stepNumber: number;
        stageTitle: string;
        stepType: string;
        instruction: string;
        time: number;
        tool: string;
      }[];
    };
    Serve_4: {
      recipeSource: string;
      lastUpdated: string;
      instructions: {
        stepNumber: number;
        stageTitle: string;
        stepType: string;
        instruction: string;
        time: number;
        tool: string;
      }[];
    };
    Serve_5: {
      recipeSource: string;
      lastUpdated: string;
      instructions: {
        stepNumber: number;
        stageTitle: string;
        stepType: string;
        instruction: string;
        time: number;
        tool: string;
      }[];
    };
    Serve_6: {
      recipeSource: string;
      lastUpdated: string;
      instructions: {
        stepNumber: number;
        stageTitle: string;
        stepType: string;
        instruction: string;
        time: number;
        tool: string;
      }[];
    };
  } | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  //
  const resetFn = () => {
    setRecipeId("");
    setServings("");
    setRecipeDetails(null);
  };
  //
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const recipeID = parseInt(recipeId);
    const servings_ = parseInt(servings);
    setIsLoading(true);
    axios({
      method: "GET",
      url: "http://localhost:8000/api/python",
      params: { recipe_id: recipeID, servings: servings_ },
    })
      .then((response) => {
        setRecipeDetails(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  };

  return (
    <div className="w-4/5 mx-auto rounded">
      <form onSubmit={onSubmit} className="w-1/3 mx-auto">
        <div className="flex flex-col my-3">
          <label>Recipe ID:</label>
          <input
            className="border-2 border-gray-500 rounded"
            type="text"
            placeholder="Enter Recipe ID"
            value={recipeId}
            onChange={(e) => setRecipeId(e.target.value)}
          />
        </div>
        <div className="flex flex-col my-3">
          <label>Servings:</label>
          <input
            className="border-2 border-gray-500 rounded"
            type="number"
            min={1}
            max={6}
            placeholder="Enter Servings"
            value={servings}
            onChange={(e) => setServings(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-green-600 p-3 rounded hover:bg-green-400 hover:text-white"
        >
          Submit
        </button>
        <button
          className="bg-yellow-600 rounded hover:bg-yellow-200 p-3 ml-2"
          onClick={resetFn}
        >
          Reset
        </button>
      </form>
      {isLoading ? (
        <div className="text-center text-2xl my-3 justify-center">
          Loading...
        </div>
      ) : (
        recipeDetails && (
          <Main recipeDetails={recipeDetails} servings={servings} />
        )
      )}
    </div>
  );
};

export default Form;
