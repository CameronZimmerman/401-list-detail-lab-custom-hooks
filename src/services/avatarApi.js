export const fetchCharacters = async () => {
  const charactersRaw = await fetch('https://last-airbender-api.herokuapp.com/api/v1/characters')
  const characters = await charactersRaw.json();

  return characters.map(character => (
    {
      name: character.name,
      photoUrl: character.photoUrl,
      id: character._id
    }
  ))
}