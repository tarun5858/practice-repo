function CardContainer({ title, children }) {
  return (
    <div className="card-box" style={{ border: '1px solid #ccc', padding: '16px' }}>
      <h3>{title}</h3>
      <div className="card-body">
        {children} {/* This renders anything put between the tags */}
      </div>
    </div>
  );
}

export default CardContainer;