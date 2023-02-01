import './index.css'

const TabItem = props => {
  const {item, onTabChange, isActive} = props
  const {displayText, tabId} = item
  const className = isActive ? 'active' : ''
  const update = () => {
    onTabChange(tabId)
  }

  return (
    <li className="item">
      <button type="button" className="tab-button">
        <p className={`tab ${className}`} onClick={update}>
          {displayText}
        </p>
      </button>
    </li>
  )
}

export default TabItem
