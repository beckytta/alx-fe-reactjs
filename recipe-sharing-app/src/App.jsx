import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import AddRecipeForm from './components/AddRecipeForm';

const App = () => {
  return (
    <div>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/add-recipe">Add Recipe</Link>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
          <Route path="/add-recipe" element={<AddRecipeForm />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;

