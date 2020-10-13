class MainMenu extends React.Component {
  render() {
    return <div className="mainmenu">
              <div className="menu">
                <div className="content">
                    <img src="https://www.greengownawards.org/nav/logo.png" />
                    <p>Green Gown Asia Coordinator</p>
                  </div>
              </div>
              <div className="menu">
                <div className="content">
                    <img src="https://www.iium.edu.my/img/logo-square.png" />
                    <p>IIUM Regional Centre of Expertise (RCE)</p>
                  </div>
              </div>
              <div className="menu">
                <div className="content">
                    <img src="https://www.iium.edu.my/img/logo-square.png" />
                    <p>Covid-19 Mental Health</p>
                  </div>
              </div>
              <div className="menu">
                <div className="content">
                    <img src="https://www.iium.edu.my/img/logo-square.png" />
                    <p>IIUM Transformation</p>
                  </div>
              </div>
              <div className="menu">
                <div className="content">
                    <img src="https://www.iium.edu.my/img/logo-square.png" />
                    <p>Campus Life</p>
                  </div>
              </div>
            </div>
  }
}

ReactDOM.render(<MainMenu />, document.getElementById('mainmenu'))
