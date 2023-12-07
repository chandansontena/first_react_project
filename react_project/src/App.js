
	import './App.css';
	import ListEmployeeComponent from './component/ListEmployeeComponent'
  import HeaderComponent from './component/HeaderComponent';
  import FooterComponent from './component/FooterComponent';
  import {BrowserRouter as Router,Route,Routes,Link } from 'react-router-dom';
  import CreateEmployeeComponent from './component/CreateEmployeeComponent';
import UpdateEmployeeComponent from './component/UpdateEmployeeComponent';

  function App() {
  	return (
        <div>


          <HeaderComponent/>
          <Router>


   	 	<div className="container">
      		<Routes>
            <Route exactpath="/" Component={ListEmployeeComponent}></Route>
            <Route path="/employees" Component={ListEmployeeComponent}></Route>
            <Route path="/add-employee" Component={CreateEmployeeComponent}></Route>
            <Route path="/update-employee/:id"  Component={UpdateEmployeeComponent}></Route>
          </Routes>
    		</div>
        </Router>
      <FooterComponent/>
        </div>
  		);
	}
	export default App;