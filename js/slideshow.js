class SlideShow extends React.Component {

  render() {
    return <div className="iium-slideshow">
              <div className="mover-1"></div>
              <div className="mover-2"></div>
            </div>

  }
}

ReactDOM.render(<SlideShow />, document.getElementById('slideshow'))
