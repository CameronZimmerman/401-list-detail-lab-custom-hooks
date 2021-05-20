const fetchCharacters = async (id) => {
  const charactersRaw = await fetch(`https://last-airbender-api.herokuapp.com/api/v1/characters/${id}`)
  const characters = await charactersRaw.json();
  if(!characters.length) return ({
      name: characters.name,
      photoUrl: characters.photoUrl,
      id: characters._id,
      affiliation: characters.affiliation || 'N/A',
      enemies: characters.enemies || [],
      allies: characters.allies || [] 
  })
  return characters.map(character => (
    {
      name: character.name,
      photoUrl: character.photoUrl,
      id: character._id
    }
  ))
}

export default fetchCharacters