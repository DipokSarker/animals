import { useState } from 'react';
import AnimalShow from './AnimalShow';

function getRandomAnimal() {
    const animals = ['bird', 'cat', 'cow', 'dog', 'lion', 'gator'];

    return animals[Math.floor(Math.random() * animals.length)]
}


function App() {
   const[animals, setAnimals]= useState([]);

    const handleClick = () => {
      setAnimals([...animals, getRandomAnimal()]);
    };

    const rederedAnimals = animals.map((animal, index) => {
      return <AnimalShow type={animal} key={index}/>

    });


    return (
    <div>
        <button onClick={handleClick}>Add Animal</button>
       <div>{rederedAnimals}</div>
    </div>
    );
}


export default App;