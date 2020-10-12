class Carousel extends React.Component {
  render() {
    return <div id="carouselExampleControls" className="carousel slide caspic" data-ride="carousel">
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
              <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
  }
}

ReactDOM.render(<Carousel />, document.getElementById('carousel'))
