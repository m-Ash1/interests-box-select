function Box(props) {
  return (
    <div className="card">
      <input type="checkbox" class="check-border" />
      <div className="check">
        <input type="checkbox" className="check-box"></input>
      </div>
      <i class={props.class}></i>
      <div className="card-title">{props.title}</div>
    </div>
  );
}

export default Box;
