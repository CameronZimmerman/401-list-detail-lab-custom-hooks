import {useState, useEffect, withRouter} from 'react'
import {useParams} from 'react-router'
import fetchCharacters from '../services/avatarApi'

const useGallery = () => {
  const [characters, setCharacters] = useState()
  const [loading, setLoading] = useState(true)
  const { id = '' } = useParams();
  console.log(id)

  useEffect(() => {
    const apiData =  fetchCharacters(id)
      .then(apiData => setCharacters(apiData))
      .finally(() => setLoading(false))
  }, [])

  return {characters, loading}
}

export default useGallery