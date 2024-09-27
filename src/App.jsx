import CardHeader from './components/CardHeader'
import CardImage from './components/CardImage'
import TypeTag from './components/TypeTag'
import PokeInfo from './components/PokeInfo'
import CardDescription from './components/CardDescription'
import TitleStat from './components/TitleStat'
import PokeStat from './components/PokeStat'
import './styles.css'
import Finder from './components/Finder'

function App() {

  return (
    <>
    <Finder/>
      <div className="card">
        <div className="header">
          <CardHeader/>
        </div>
        <CardImage/>
        <div className="poke-info">
          <div className="types-container">
            <TypeTag/>
          </div>
          <PokeInfo/>
          <CardDescription/>
          <div className="base-stats">
            <TitleStat/>
            <PokeStat/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
