import React, {useEffect} from "react"
import CharacterRepository from "../../api/Characters/CharacterRepository"

const Characters = () => {
  useEffect(() => {
    CharacterRepository.getAllCharacters();
  }, [])







  return (






    <div>hahahaha</div>
  )
}

export default Characters;
