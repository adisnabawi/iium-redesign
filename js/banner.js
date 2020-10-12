class Banner extends React.Component {
  render() {
    return <div className="ban row">
              <div className="banleft col-md-8">
                <ul>
                  <li><a href="#">About IIUM</a></li>
                  <li><a href="#">Roadmap</a></li>
                  <li><a href="#">Admissions</a></li>
                  <li><a href="#">Academics</a></li>
                  <li><a href="#">FAQ</a></li>
                </ul>
              </div>
              <div className="banright col-md-4">
                <img src="img/iium_rce_greater_gombak_logo.png" className="logo" />
              </div>
            </div>



  }
}

ReactDOM.render(<Banner />, document.getElementById('banner'))
