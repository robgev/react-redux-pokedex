const pagination = (list, id) => {
  const pokemonsPerPage = 9;
  const indexOfLastPokemon = id * pokemonsPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
  const currentPokemons = list.slice(indexOfFirstPokemon, indexOfLastPokemon);
  return currentPokemons;
};

const filter = (list, filter) => {
  if (!filter) {
    return list;
  }
  return list.filter(item =>
    item.name.toLowerCase().indexOf(filter.toLowerCase()) >= 0
  );
};

const filterByType = (list, name) => {
  return list.filter((item) => {
    if (item.type === name) {
      return true;
    }
    return false;
  });
};

const reducer = (state={}, action) => {
  switch (action.type) {
    case 'FILTER_POKEDEX':
      return filter(action.list, action.filter);

    case 'FILTERBYTYPE_POKEDEX':
      return filterByType(action.list, action.name);

    case 'PAGINATION':
      return pagination(action.list, action.id);

    default:
      return state
  }
}

export default reducer
