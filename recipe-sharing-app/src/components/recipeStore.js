import create from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],

  setSearchTerm: (term) => set(state => {
    const filtered = state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(term.toLowerCase())
    );
    return { searchTerm: term, filteredRecipes: filtered };
  }),

  setRecipes: (recipes) => set(state => ({
    recipes: recipes,
    filteredRecipes: recipes // Initialize filtered recipes with all recipes
  })),
}));

export default useRecipeStore;



