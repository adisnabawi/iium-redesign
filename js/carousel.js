class Carousel extends React.Component {
  render() {
    return <div id="myCarousel" className="carousel slide caspic" data-ride="carousel">
              <div className="mybullet">
                <ol className="bullets carousel-indicators">
                  <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                  <li data-target="#myCarousel" data-slide-to="1"></li>
                  <li data-target="#myCarousel" data-slide-to="2"></li>
                </ol>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://asia.olympus-imaging.com/content/000107507.jpg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="https://imaging.nikon.com/lineup/dslr/df/img/sample/img_01.jpg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="https://asia.olympus-imaging.com/content/000107507.jpg" className="d-block w-100" alt="..." />
                </div>
              </div>
            </div>
  }
}

ReactDOM.render(<Carousel />, document.getElementById('carousel'))
