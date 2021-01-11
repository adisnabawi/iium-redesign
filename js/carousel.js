class Carousel extends React.Component {
  constructor(props){
    super(props);
    this.state = { banner: [] };
  }

  componentDidMount() {
    fetch("/json/banner.json")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            banner: result
          });
          console.log(this.state.banner);

        },
        (error) => {
          this.setState({
            error
          });
        }
      )
  }
  render() {
    return <div id="myCarousel" className="carousel slide caspic" data-ride="carousel">
              <div className="mybullet">
                <ol className="bullets carousel-indicators">
                  {this.state.banner.map((item, i) => {
                      if(i == 0) {
                        return( <li data-target="#myCarousel" data-slide-to="0" className="active casbor"></li>)
                      }else {
                        return( <li data-target="#myCarousel" data-slide-to={i} className="casbor"></li>)
                      }
                    })
                  }
                </ol>
              </div>

              <div className="carousel-inner">
                {this.state.banner.map((item, i) => {
                    if(i == 0) {
                      return( <div className="carousel-item active" key={item.id}>
                          <img src={item.url} className="d-block w-100" alt={item.title} />
                      </div>)
                    }else {
                      return( <div className="carousel-item" key={item.id}>
                        <img src={item.url} className="d-block w-100" alt={item.title} />
                      </div>)
                    }
                  })
                }
              </div>
            </div>
  }
}

ReactDOM.render(<Carousel />, document.getElementById('carousel'))
