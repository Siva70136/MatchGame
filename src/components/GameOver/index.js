import {Component} from 'react'
import './index.css'
import NavBar from '../NavBar'
import TabItem from '../tabItem'
import ImageItem from '../imageItem'

class MatchGame extends Component {
  state = {score: 0}

  render() {
    const {tabsList, imagesList} = this.props
    const {score} = this.state

    return (
      <div className="app-container">
        <NavBar score={score} />
        <div className="main-container">
          <ul className="tab-container">
            {tabsList.map(each => (
              <TabItem item={each} key={each.id} />
            ))}
          </ul>
          <ul className="images-list">
            {imagesList.map(each => (
              <ImageItem each={each} key={each} />
            ))}
          </ul>

          <div className="">
            <h1>hi</h1>
          </div>
        </div>
      </div>
    )
  }
}

export default MatchGame
