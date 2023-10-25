import './index.css'

const GameOver = props => {
  const {score, restart} = props

  const play = () => {
    console.log('hi')
    restart()
  }

  return (
    <div className="game-over">
      <div className="s-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png "
          alt="trophy"
          className="trophy"
        />
        <p>YOUR SCORE</p>
        <h1>{score}</h1>
        <div className="button-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
            alt="reset"
            className="reset"
          />
          <div>
            <button type="button" className="play" onClick={play}>
              PLAY AGAIN
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GameOver
