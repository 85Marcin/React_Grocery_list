function SingleItem({ item, removeItem }) {
  return (
    <div className="single-item">
      <input type="checkbox" />
      <p className="item-name">{item.name}</p>
    </div>
  )
}

export default SingleItem
