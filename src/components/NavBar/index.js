import './index.css'

const NavBar = props => {
  const {score, time} = props

  return (
    <nav className="nav-container">
      <div className="inner-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
          alt="website logo"
          className="logo"
        />
        <div className=" score-container">
          <p className="score">Score:&nbsp;{score}</p>
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="timer"
          />
          <p className="time">{time}&nbsp;sec</p>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
