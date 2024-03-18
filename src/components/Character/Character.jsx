import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import './Character.css'
import RotateOneEighty from '../RotateOneEighty/RotateOneEighty'

const CreateCharacter = () => {
  const [character, setCharacter] = useState('Morty')

  useEffect(() => {
    const getCharacters = async () => {
      const characters = await fetch(
        'https://rickandmortyapi.com/api/character/1,2,3'
      )
      const characterList = await characters.json()
      return characterList
    }
    getCharacters().then((character) => setCharacter([character]))
  }, [])
  console.log(character)
  const characterObj = character[0]

  return (
    <div className='charactersDiv'>
      <div>
        <h1>{characterObj[0].name}</h1>
        {/* <img src={characterObj[0].image} alt='Rick' onClick={rotateOneEighty} /> */}
        <RotateOneEighty src={characterObj[0].image} alt='Rick' />
      </div>
      <div>
        <h1>{characterObj[1].name}</h1>
        <RotateOneEighty src={characterObj[1].image} alt='Morty' />
      </div>
      <div>
        <h1>{characterObj[2].name}</h1>
        <RotateOneEighty src={characterObj[2].image} alt='Summer' />
      </div>
    </div>
  )
}

export default CreateCharacter
