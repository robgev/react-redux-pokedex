export const filter = (list, filter) => {
  return {
    type: 'FILTER_POKEDEX',
    filter,
    list
  }
}

export const filterByType = (list, name) => {
  return {
    type: 'FILTERBYTYPE_POKEDEX',
    name,
    list
  }
}

export const handleClick = (list, id) => {
  return {
    type: 'PAGINATION',
    list,
    id
  }
}
