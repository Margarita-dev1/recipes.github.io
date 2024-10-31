

export const getRecipesFromLS =  () => {
    const data = localStorage.getItem("recipes");
    return data ? (JSON.parse(data)) : [];
}