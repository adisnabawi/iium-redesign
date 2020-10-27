class Footer extends React.Component {
  render() {
    return <div className="footer">
            <footer>
              <div className="row">
                <div className="col-md-4">
                   <ul>
                    <li>Test 1 </li>
                    <li>Test 2 </li>
                    <li>Test 3 </li>
                   </ul>
                </div>
               <div className="col-md-4">
                 <ul>
                    <li>Test 1 </li>
                    <li>Test 2 </li>
                    <li>Test 3 </li>
                 </ul>
                </div>
                <div className="col-md-4">
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
