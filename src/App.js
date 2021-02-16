import { results } from './rickandmortyapi.json'
import './App.css'
import Card from './Card'

function App() {
  return (
    <div className="App">
      {results.map(
        ({ name, species, image, gender, status, origin, location, id }) => (
          <Card
            key={id}
            name={name}
            species={species}
            image={image}
            gender={gender}
            status={status}
            origin={origin.name}
            location={location.name}
          />
        )
      )}
    </div>
  )
}

export default App
