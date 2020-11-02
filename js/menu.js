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
      default:
        break;
    }
  }


  render() {
    return <div className="info container">
              <div className="row">
                <div className="col-md-3">
                   <button className="btn btn-dark btninfo" onClick={this.handleClick('news')}>News</button>
                   <button className="btn btn-dark btninfo" onClick={this.handleClick('events')}>Events</button>
                   <button className="btn btn-dark btninfo">Announcement</button>
                   <button className="btn btn-dark btninfo">Staff</button>
                   <button className="btn btn-dark btninfo">Students</button>
                   <button className="btn btn-dark btninfo">Events</button>
                   <button className="btn btn-dark btninfo">Research</button>
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
              <div className="col-md-6">
                <h4>Featured News</h4>
                <div className="row">
                {this.props.news.map(item => (
                <div class="col-12 mt-3" key={item.id}>
                <a href={item.link}>
                  <div className="card">
                          <div className="card-horizontal">
                              <div className="img-square-wrapper col-md-5">
                                  <img src={item.url} alt={item.title} />
                              </div>
                              <div className="card-body col-md-7">
                                  <h5 className="card-title">{item.title}</h5>
                              </div>
                          </div>
                          <div className="card-footer">
                              <small className="text-muted">Published on {item.publishedAt}</small>
                          </div>
                      </div>
                      </a>
                  </div>
                ))}
                </div>
              </div>
            </div>
  }
}

class Events extends React.Component {
  render() {
    return <div className="events">
            2143143kndmakldmlk
          </div>
  }
}

ReactDOM.render(<Menu />, document.getElementById('menu'))
