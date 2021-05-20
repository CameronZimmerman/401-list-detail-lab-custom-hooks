import react, {useState, useEffect, withRouter} from 'react'
import { useParams } from 'react-router'
import fetchCharacters from '../services/avatarApi'

const useGallery = () => {
  const [characters, setCharacters] = useState()
  const [loading, setLoading] = useState(true)
  const { id } = useParams() || ""

  useEffect(() => {
    const characters =  fetchCharacters(id)
      .then(characters => setCharacters(characters))
      .finally(() => setLoading(false))
  }, [])

  return {characters, loading}
}