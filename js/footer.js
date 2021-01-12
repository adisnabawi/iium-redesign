class Footer extends React.Component {

  constructor(props){
    super(props);
    this.state = {
                  footer1:[], footer2:[]
                 };
  }

  componentDidMount() {
    fetch("/json/footer/student_parent.json")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            footer1: result
          });
          console.log(this.state.footer1);

        },
        (error) => {
          this.setState({
            error
          });
        }
      );
    fetch("/json/footer/research_alumni.json")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            footer2: result
          });
          console.log(this.state.footer2);

        },
        (error) => {
          this.setState({
            error
          });
        }
      );
  }
  render() {
    return <div className="footer">
            <footer>
              <div className="row">
                <div className="col-md-4">
                  <p>
                  International Islamic University Malaysia <br />
                  P.O. Box 10, 50728 Kuala Lumpur <br />
                  <hr className="iium-line iu-left" />
                  <br />
                  Phone : (+603) 6421 6421 <br />
                  Fax : (+603) 6421 4053 <br />
                  Email : webmaster@iium.edu.my <br />
                  </p>
                </div>
                <div className="col-md-2">
                  <p><b>Students & Parents</b></p>
                   <ul className="listFooter">
                   {this.state.footer1.map((item, i) => {
                     return( <li><a href={item.url}> {item.title} </a> </li>
                     )}
                   )}
                   </ul>
                </div>
               <div className="col-md-2">
                 <p><b>Researchers, Lecturers & Alumni</b></p>
                  <ul className="listFooter">
                  {this.state.footer2.map((item, i) => {
                    return( <li><a href={item.url}> {item.title} </a> </li>
                    )}
                  )}
                  </ul>
                </div>
                <div className="col-md-2">
                  <p><b>Business, Government & Related Links</b></p>
                  <ul>
                     <li>Test 1 </li>
                     <li>Test 2 </li>
                     <li>Test 3 </li>
                  </ul>
                 </div>
                 <div className="col-md-2">
                   <p><b>Others</b></p>
                   <ul>
                      <li>Test 1 </li>
                      <li>Test 2 </li>
                      <li>Test 3 </li>
                   </ul>
                  </div>
              </div>
              </footer>
          </div>
  }
}

ReactDOM.render(<Footer />, document.getElementById('footer'))
