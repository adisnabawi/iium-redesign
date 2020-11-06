class Footer extends React.Component {
  render() {
    return <div className="footer">
            <footer>
              <div className="row">
                <div className="col-md-3">
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
                <div className="col-md-3">
                   <ul>
                    <li>Test 1 </li>
                    <li>Test 2 </li>
                    <li>Test 3 </li>
                   </ul>
                </div>
               <div className="col-md-3">
                 <ul>
                    <li>Test 1 </li>
                    <li>Test 2 </li>
                    <li>Test 3 </li>
                 </ul>
                </div>
                <div className="col-md-3">
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
