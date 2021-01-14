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
    this.state = { error: null, showMenu: 'news', isLoaded: false, news: [],
                   iiumevents: [], announcement: [], staff:[], student:[],
                   alumni:[], research:[]
                 };
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
      );

    fetch("https://my.iium.edu.my/iiummobile/events.php?token=adis")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            iiumevents: result
          });
          console.log(this.state.iiumevents);

        },
        (error) => {
          this.setState({
            error
          });
        }
      );

    fetch("https://my.iium.edu.my/iiummobile/announcement.php?token=adis")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            announcement: result
          });
          console.log(this.state.announcement);

        },
        (error) => {
          this.setState({
            error
          });
        }
      );

    fetch("/json/student.json")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            student: result
          });
          console.log(this.state.student);

        },
        (error) => {
          this.setState({
            error
          });
        }
      );

    fetch("/json/staff.json")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            staff: result
          });
          console.log(this.state.staff);

        },
        (error) => {
          this.setState({
            error
          });
        }
      );

    fetch("/json/alumni.json")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            alumni: result
          });
          console.log(this.state.alumni);

        },
        (error) => {
          this.setState({
            error
          });
        }
      );

    fetch("/json/research.json")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            research: result
          });
          console.log(this.state.research);

        },
        (error) => {
          this.setState({
            error
          });
        }
      );

  }

  renderSwitch(param) {
    console.log('render:' + param);
    switch(param) {
      case 'news':
      console.log('return:' + param);
        return(<News news={this.state.news}/>);
      case 'events':
        return(<Events iiumevents={this.state.iiumevents}/>);
      case 'announcement':
        return(<Announcement announcement={this.state.announcement} />);
      case 'staff':
        return(<Staff staff={this.state.staff}/>);
      case 'student':
        return(<Student student={this.state.student}/>);
      case 'alumni':
        return(<Alumni alumni={this.state.alumni}/>);
      case 'research':
        return(<Research research={this.state.research}/>);
      default:
        break;
    }
  }


  render() {
    return <div className="info container">
              <div className="row">
                <div className="col-md-3">
                   <button className={this.state.showMenu == 'news' ? 'btn btn-iium btninfo btn-active' : 'btn btn-iium btninfo'} onClick={this.handleClick('news')}>News</button>
                   <button className={this.state.showMenu == 'events' ? 'btn btn-iium btninfo btn-active' : 'btn btn-iium btninfo'} onClick={this.handleClick('events')}>Events</button>
                   <button className={this.state.showMenu == 'announcement' ? 'btn btn-iium btninfo btn-active' : 'btn btn-iium btninfo'} onClick={this.handleClick('announcement')}>Announcement</button>
                   <button className={this.state.showMenu == 'staff' ? 'btn btn-iium btninfo btn-active' : 'btn btn-iium btninfo'} onClick={this.handleClick('staff')}>Staff</button>
                   <button className={this.state.showMenu == 'student' ? 'btn btn-iium btninfo btn-active' : 'btn btn-iium btninfo'} onClick={this.handleClick('student')}>Students</button>
                   <button className={this.state.showMenu == 'alumni' ? 'btn btn-iium btninfo btn-active' : 'btn btn-iium btninfo'} onClick={this.handleClick('alumni')}>Alumni</button>
                   <button className={this.state.showMenu == 'research' ? 'btn btn-iium btninfo btn-active' : 'btn btn-iium btninfo'} onClick={this.handleClick('research')}>Research</button>
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

class Announcement extends React.Component {
  render() {
    return <div className="announcement">
              <div className="row">
                <div className="col-sm-8 newsTitle"><h4>Latest Announcement</h4></div>
                <div className="col-sm-4 newsMore text-right">
                  <a href="https://www.iium.edu.my/announcement">
                    More Announcement <i class="fa fa-angle-double-right"></i>
                  </a>
                </div>
              </div>
              <br />
              <div className="row">
              <div className="col-md-8">
              {this.props.announcement.map((item, i) => {
                var url = item.url;
                if(url != null){
                  if(url.includes(".jpeg") == false){
                    url = 'https://www.iium.edu.my/imagecache/medium/iiumlogo-16by9.png';
                  }
                }else {
                  url = 'https://www.iium.edu.my/imagecache/medium/iiumlogo-16by9.png';
                }

                if(i < 3) {
                return( <div className="latestNews" key={item.id}>
                  <a href={item.link}>
                    <div className="card">
                            <div className="card-horizontal">
                                <div className="img-square-wrapper col-md-5">
                                    <img src={url} alt={item.title} />
                                </div>
                                <div className="card-body col-md-7">
                                    <h5 className="card-title">{item.title}</h5>
                                    <hr className="iium-line iu-left"></hr>
                                    <br />
                                </div>
                            </div>
                            <div className="card-footer iium-card-footer">
                                <small className="text-muted">Published on: {item.publishedAt} </small>
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
              {this.props.announcement.map((item, i) => {
                if(i > 2 && i < 9) {
                return( <div key={item.id}>
                  <a href={item.link}>
                    <div className="card">
                            <div className="card-horizontal">
                                <div className="card-body">
                                    <small>{item.title}</small> <br />
                                    <small className="text-muted">Published on: {item.publishedAt}</small>
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

class Staff extends React.Component {
  render() {
    return <div className="staff">
              <div className="row">
                <div className="col-sm-8 newsTitle"><h4>Staff</h4></div>
                  <div className="col-sm-4 newsMore text-right">
                  </div>
              </div>
              <div className="row">

              {this.props.staff.map((item, i) => {
                return( <div className="col-md-6">
                <div className="latestNews" key={item.id}>
                  <a href={item.link}>
                    <div className="card">
                            <div className="card-horizontal">
                                <div className="img-square-wrapper col-md-5">
                                    <img src={item.url} alt={item.title} />
                                </div>
                                <div className="card-body col-md-7">
                                    <h5 className="card-title">{item.title}</h5>
                                    <hr className="iium-line iu-left"></hr>
                                    <br />
                                    <p>{ item.content }</p>
                                </div>
                            </div>
                        </div>
                        <br />
                        </a>
                    </div>
                  </div>
                )}
              )}
              </div>
            </div>
  }
}

class Student extends React.Component {
  render() {
    return <div className="staff">
              <div className="row">
                <div className="col-sm-8 newsTitle"><h4>Students</h4></div>
                  <div className="col-sm-4 newsMore text-right">
                  </div>
              </div>
              <div className="row">

              {this.props.student.map((item, i) => {
                return( <div className="col-md-6">
                <div className="latestNews" key={item.id}>
                  <a href={item.link}>
                    <div className="card">
                            <div className="card-horizontal">
                                <div className="img-square-wrapper col-md-5">
                                    <img src={item.url} alt={item.title} />
                                </div>
                                <div className="card-body col-md-7">
                                    <h5 className="card-title">{item.title}</h5>
                                    <hr className="iium-line iu-left"></hr>
                                    <br />
                                    <p>{ item.content }</p>
                                </div>
                            </div>
                        </div>
                        <br />
                        </a>
                    </div>
                  </div>
                )}
              )}
              </div>
            </div>
  }
}

class Alumni extends React.Component {
  render() {
    return <div className="staff">
              <div className="row">
                <div className="col-sm-8 newsTitle"><h4>Alumni</h4></div>
                  <div className="col-sm-4 newsMore text-right">
                  </div>
              </div>
              <div className="row">

              {this.props.alumni.map((item, i) => {
                return( <div className="col-md-6">
                <div className="latestNews" key={item.id}>
                  <a href={item.link}>
                    <div className="card">
                            <div className="card-horizontal">
                                <div className="img-square-wrapper col-md-5">
                                    <img src={item.url} alt={item.title} />
                                </div>
                                <div className="card-body col-md-7">
                                    <h5 className="card-title">{item.title}</h5>
                                    <hr className="iium-line iu-left"></hr>
                                    <br />
                                    <p>{ item.content }</p>
                                </div>
                            </div>
                        </div>
                        <br />
                        </a>
                    </div>
                  </div>
                )}
              )}
              </div>
            </div>
  }
}

class Research extends React.Component {
  render() {
    return <div className="staff">
              <div className="row">
                <div className="col-sm-8 newsTitle"><h4>Research</h4></div>
                  <div className="col-sm-4 newsMore text-right">
                  </div>
              </div>
              <div className="row">

              {this.props.research.map((item, i) => {
                return( <div className="col-md-6">
                <div className="latestNews" key={item.id}>
                  <a href={item.link}>
                    <div className="card">
                            <div className="card-horizontal">
                                <div className="img-square-wrapper col-md-5">
                                    <img src={item.url} alt={item.title} />
                                </div>
                                <div className="card-body col-md-7">
                                    <h5 className="card-title">{item.title}</h5>
                                    <hr className="iium-line iu-left"></hr>
                                    <br />
                                    <p>{ item.content }</p>
                                </div>
                            </div>
                        </div>
                        <br />
                        </a>
                    </div>
                  </div>
                )}
              )}
              </div>
            </div>
  }
}

class Events extends React.Component {
  render() {
      return <div className="events">
                <div className="row">
                  <div className="col-sm-8 newsTitle"><h4>Latest Events</h4></div>
                  <div className="col-sm-4 newsMore text-right">
                    <a href="https://events.iium.edu.my">
                      More Events <i class="fa fa-angle-double-right"></i>
                    </a>
                  </div>
                </div>
                <br />
                <div className="row">
                <div className="col-md-8">
                {this.props.iiumevents.map((item, i) => {
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
                                      <br />
                                      <p>{ moment(item.start_date).format('MMM Do YYYY')} -
                                      { moment(item.end_date).format('MMM Do YYYY')}</p>
                                  </div>
                              </div>
                              <div className="card-footer iium-card-footer">
                                  <small className="text-muted">Location: {item.location} </small>
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
                {this.props.iiumevents.map((item, i) => {
                  if(i > 2 && i < 9) {
                  return( <div key={item.id}>
                    <a href={item.link}>
                      <div className="card">
                              <div className="card-horizontal">
                                  <div className="card-body">
                                      <small>{item.title}</small> <br />
                                      <small>{ moment(item.start_date).format('MMM Do YYYY')} -
                                      { moment(item.end_date).format('MMM Do YYYY')}</small> <br />
                                      <small className="text-muted">Location: { item.location }</small>
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

ReactDOM.render(<Menu />, document.getElementById('menu'))
