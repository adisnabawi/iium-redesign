class Banner extends React.Component {
  handleClick = () => {
    console.log('this is:', this);
  }
  
  render() {
    return <div className="ban row">
              <div className="hamburger col-md-12">
                <a className="burger" href="#" onClick={this.handleClick}>
                  <i class="fa fa-bars"></i>
                </a>
              </div>
              <div className="col-md-12 hamnav">
               <ul>
                  <li><a href="#">About IIUM</a></li>
                  <li><a href="#">Roadmap</a></li>
                  <li><a href="#">Admissions</a></li>
                  <li><a href="#">Academics</a></li>
                  <li><a href="#">FAQ</a></li>
                </ul>
              </div>
              <div className="banleft col-md-8">
                <ul className="menu">
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
