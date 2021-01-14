class MainMenu extends React.Component {
  render() {
    return <div className="mainmenu">
              <div className="menu">
                <div className="content">
                  <a href="https://www.sustainabilityexchange.ac.uk/2020_sustainability_institution_of_the_year_fin2">
                    <img src="img/hb1.png" />
                  </a>
                  </div>
              </div>
              <div className="menu">
                <div className="content">
                  <a href="https://rce2g.iium.edu.my/">
                    <img src="img/hb2.png" />
                  </a>
                  </div>
              </div>
              <div className="menu">
                <div className="content">
                  <a href="https://flagship.iium.edu.my/eps/">
                    <img src="img/hb3.png" />
                  </a>
                  </div>
              </div>
              <div className="menu">
                <div className="content">
                  <a href="https://www.iium.edu.my/page/roadmap">
                    <img src="img/hb4.png" />
                  </a>
                  </div>
              </div>
              <div className="menu">
                <div className="content">
                  <a href="#">
                    <img src="img/hb5.png" />
                  </a>
                  </div>
              </div>
            </div>
  }
}

ReactDOM.render(<MainMenu />, document.getElementById('mainmenu'))
