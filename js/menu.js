class Menu extends React.Component {
  handleClick = value => () => {
      // this.state = { showMenu: value };
      this.setState({showMenu: value});
      console.log('showMenu' + value);
      this.renderSwitch(value);
  }

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.renderSwitch = this.renderSwitch.bind(this);
    this.state = { error: null, showMenu: 'news', isLoaded: false, news: [] };
  }

  componentDidMount() {
    fetch("https://my.iium.edu.my/iiummobile/news.php")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            news: result
          });
          console.log(this.state.news);

        },
        (error) => {
          this.setState({
            error
          });
        }
      )
  }

  renderSwitch(param) {
    console.log('render:' + param);
    switch(param) {
      case 'news':
      console.log('return:' + param);
        return(<News news={this.state.news}/>);
      case 'events':
        return(<Events />);
      case 'announcement':
        return(<Announcement />);
      case 'staff':
        return(<Staff />);
      default:
        break;
    }
  }


  render() {
    return <div className="info container">
              <div className="row">
                <div className="col-md-3">
                   <button className="btn btn-iium btninfo" onClick={this.handleClick('news')}>News</button>
                   <button className="btn btn-iium btninfo" onClick={this.handleClick('events')}>Events</button>
                   <button className="btn btn-iium btninfo" onClick={this.handleClick('announcement')}>Announcement</button>
                   <button className="btn btn-iium btninfo" onClick={this.handleClick('staff')}>Staff</button>
                   <button className="btn btn-iium btninfo">Students</button>
                   <button className="btn btn-iium btninfo">International Students</button>
                   <button className="btn btn-iium btninfo">Research</button>
                </div>
               <div className="col-md-9 content">
                {this.renderSwitch(this.state.showMenu)}
                </div>
              </div>
          </div>
  }
}
class News extends React.Component {
  render() {
      return <div className="news">
                <div className="row">
                  <div className="col-sm-8 newsTitle"><h4>Latest News</h4></div>
                  <div className="col-sm-4 newsMore text-right">
                    <a href="https://www.iium.edu.my/news">
                      More News <i class="fa fa-angle-double-right"></i>
                    </a>
                  </div>
                </div>
                <br />
                <div className="row">
                <div className="col-md-8">
                {this.props.news.map((item, i) => {
                  if(i < 3) {
                  return( <div className="latestNews" key={item.id}>
                    <a href={item.link}>
                      <div className="card">
                              <div className="card-horizontal">
                                  <div className="img-square-wrapper col-md-5">
                                      <img src={item.url} alt={item.title} />
                                  </div>
                                  <div className="card-body col-md-7">
                                      <h5 className="card-title">{item.title}</h5>
                                      <hr className="iium-line iu-left"></hr>
                                  </div>
                              </div>
                              <div className="card-footer iium-card-footer">
                                  <small className="text-muted">Published on { moment(item.publishedAt).format('MMM Do YYYY')}</small>
                              </div>
                          </div>
                          <br />
                          </a>
                      </div>
                  )}
                }
                )}
                </div>
                <div className="col-md-4">
                <video className="iiumvid" controls preload="true" muted autostart="false">
                <source src="https://photos.iium.edu.my/vidz/highlightvideo.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <br /> <br />
                {this.props.news.map((item, i) => {
                  if(i > 2 && i < 8) {
                  return( <div key={item.id}>
                    <a href={item.link}>
                      <div className="card">
                              <div className="card-horizontal">
                                  <div className="card-body">
                                      <small>{item.title}</small> <br />
                                      <small className="text-muted">Published on { moment(item.publishedAt).format('MMM Do YYYY')}</small>
                                  </div>
                              </div>
                          </div>
                          <br />
                          </a>
                      </div>
                  )}
                }
                )}
                </div>
              </div>
            </div>
  }
}

class Events extends React.Component {
  render() {
    return <div className="events">
            <div className="col-md-8">
              <h4>Events</h4>
            </div>
          </div>
  }
}

class Announcement extends React.Component {
  render() {
    return <div className="announcement">
            <div className="col-md-8">
              <h4>Announcement</h4>
            </div>
          </div>
  }
}

class Staff extends React.Component {
  render() {
    return <div className="staff">
            <div className="col-md-8">
              <h4>Staff</h4>
            </div>
          </div>
  }
}

ReactDOM.render(<Menu />, document.getElementById('menu'))
