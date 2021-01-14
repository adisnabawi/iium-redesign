class Banner extends React.Component {
  handleClick = () => {

    if(this.state.showMenu){
      $('.hamnav').show();
      this.setState({ showMenu: false });
    }else {
      $('.hamnav').hide();
      this.setState({ showMenu: true });
    }

  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenToScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenToScroll)
  }

  listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight

    const scrolled = winScroll / height
    if(scrolled > 0.07){
      this.setState({
        theposition: true,
      })
    }else {
      this.setState({
        theposition: false,
      })
    }
  }

  constructor(props){
    super(props);
    this.state = { showMenu: true, theposition: false };
  }

  render() {
    return <div className={"ban row " + (this.state.theposition ? 'green' : '')}>
              <div className="hamburger col-md-12">
                <a className="burger" href="#" onClick={this.handleClick}>
                <i class={"fa fa-" + (this.state.showMenu ? "bars" : "times")}></i>
                </a>
              </div>
              <div className="col-md-12 hamnav">
               <ul>
                  <li><a href="https://www.iium.edu.my/page/about-iium">About IIUM</a></li>
                  <li><a href="https://www.iium.edu.my/page/roadmap">Roadmap</a></li>
                  <li><a href="https://www.iium.edu.my/page/admission-information">Admissions</a></li>
                  <li><a href="https://www.iium.edu.my/page/academics-1">Academics</a></li>
                  <li><a href="#">FAQ</a></li>
                  <li><a href="https://www.iium.edu.my/contact"><i class="fa fa-phone"></i> Contact Us</a></li>
                </ul>
              </div>
              <div className="banleft col-md-8">
                <ul className="menu">
                  <li><a href="https://www.iium.edu.my/page/about-iium">About IIUM</a></li>
                  <li><a href="https://www.iium.edu.my/page/roadmap">Roadmap</a></li>
                  <li><a href="https://www.iium.edu.my/page/admission-information">Admissions</a></li>
                  <li><a href="https://www.iium.edu.my/page/academics-1">Academics</a></li>
                  <li><a href="#">FAQ</a></li>
                  <li><a href="https://www.iium.edu.my/contact" data-toggle="tooltip" title="Contact Us"><i class="fa fa-phone"></i></a></li>
                </ul>
              </div>
              <div className="banright col-md-4">
                <img src="img/iium_rce_greater_gombak_logo.png" className="logo" />
              </div>
            </div>

  }
}

ReactDOM.render(<Banner />, document.getElementById('banner'))
