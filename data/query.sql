-- `getRecipes()`: should return a list of all recipes in the database.

select r.id as 'Recipe Number', r.name as 'Recipe Name', s.name as 'Culinary Style'
from recipes as r
join styles as s
    on r.style_id = s.id;
    
-- `getRecipesById(id)`: should return a recipe.

select r.id as 'Recipe Number', r.name as 'Recipe Name', s.name as 'Culinary Style'
from recipes as r
join styles as s
    on r.style_id = s.id;
where r.id = 1

-- `getShoppingList(recipe_id)`: should return a list of all ingredients and quantities for a given recipe

select i.name as 'Ingredient', ri.quantity as 'Quantity', ri.units as 'Units'
from ingredients as i
join recipe_ingredients as ri
    on ri.ingredient_id = i.id
join recipes as r
    on ri.recipe_id = r.id
where r.id = 1

-- `getInstructions(recipe_id)`: should return a list of step by step instructions for preparing a recipe`