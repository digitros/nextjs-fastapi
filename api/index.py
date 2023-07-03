from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import requests

app = FastAPI()

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_headers=["*"],
    allow_methods=["*"],
)


@app.get("/api/python")
def get_recipe(recipe_id: int, servings: int):
    url = "https://dinnerfy-ds-production.up.railway.app/recipe"
    payload = {"RecipeID": recipe_id, "Servings": servings}
    response = requests.post(url, json=payload)

    if response.status_code == 200:
        return response.json()
    else:
        return {"error": f"Request failed with status code {response.status_code}"}
