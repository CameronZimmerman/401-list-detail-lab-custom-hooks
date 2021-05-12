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

export const fetchSingleCharacter = async (charID) => {
  const characterRaw = await fetch(`https://last-airbender-api.herokuapp.com/api/v1/characters/${charID}`)
  const {name, photoUrl, id, affiliation, enemies, allies} = await characterRaw.json();

  return {
    name,
    photoUrl,
    id,
    affiliation: affiliation || 'N/A',
    enemies: enemies || [],
    allies: allies || []
  }
}