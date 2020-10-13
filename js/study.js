class Study extends React.Component {
  render() {
    return <div className="study">
              <div className="search">
                <input type="text" placeholder="What do you want to study?" />
                <button id="searchbtn">Search</button>
              </div>

            </div>
  }
}

ReactDOM.render(<Study />, document.getElementById('study'))
