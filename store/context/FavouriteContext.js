import { createContext, useContext, useState } from "react";

const FavouriteContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

export const FavouriteContextProvider = ({ children }) => {
  const [favIds, setFavId] = useState([]);

  const addFavorite = (id) => {
    setFavId((currentFav) => [...currentFav, id]);
  };

  const removeFavorite = (id) => {
    setFavId((currentFav) =>
      currentFav.filter((currentId) => currentId !== id)
    );
  };

  return (
    <FavouriteContext.Provider
      value={{ ids: favIds, addFavorite, removeFavorite }}
    >
      {" "}
      {children}{" "}
    </FavouriteContext.Provider>
  );
};

export const useFavouriteContext = () => {
  const context = useContext(FavouriteContext);

  if (!context)
    throw new Error(" Favourite context was used outside its context provider");

  return context;
};
