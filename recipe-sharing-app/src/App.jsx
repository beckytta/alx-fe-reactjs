import React from 'react';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';
import { Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <h1>Recipe Sharing App</h1>
      <RecipeList />
      <FavoritesList />
      <RecommendationsList />
    </div>
  );
};

export default App;


