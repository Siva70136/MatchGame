import './index.css'

const ImageItem = props => {
  const {each, getId} = props
  const {thumbnailUrl, id} = each
  const onSend = () => {
    getId(id)
  }

  return (
    <li className="image-item">
      <button type="button" className="button" onClick={onSend}>
        <img src={thumbnailUrl} alt="thumbnail" className="image" />
      </button>
    </li>
  )
}

export default ImageItem
