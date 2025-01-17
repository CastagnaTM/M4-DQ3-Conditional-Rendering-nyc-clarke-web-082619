import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {
// I hold state... ME!!!!!!!!!!!

state = {
  displayMode: "profile"
}

setDisplayMode = (event) =>{
  this.setState({
    displayMode: event.target.id
  })
}

  render() {

    const detailsToDisplay = () =>{
      switch (this.state.displayMode){
        case 'profile':
          return < Profile />
        case 'photo':
          return < Photos />
        case 'cocktail':
          return < Cocktails />
        case 'pokemon':
          return < Pokemon />
        default: < Profile />
      }
    } 

    return (
      <div>
        <MenuBar setDisplayMode={this.setDisplayMode}/>
        {detailsToDisplay()}
      </div>
    )
  }

}

export default MainBox
