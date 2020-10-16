import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Form from "../tugas-9/tugas9";
import Buah from "../tugas-10/tugas10";
import Clock from "../tugas-11/tugas11";
import ListForm from "../tugas-12/tugas12";
import Tugas13 from "../tugas-13/tugas13";
// import Tugas14 from "../tugas-14/DaftarBuah";

const navStyle = {
  listStyleType: "none",
  margin: "0",
  padding: "0",
  overflow: "hidden",
  backgroundColor: "#2980b9",
  position: "-webkit-sticky", /* Safari */
  position: "sticky",
  top: "0"
}

const li ={
  display: "inline-block",
  color: "white",
  textAlign: "center",
  padding: "14px 16px",
  textDecoration: "none"
}

const Routes = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul style={navStyle}>
            <div>
            <li style={li}>
              <Link to="/materi-9" style={{color:"white", textDecoration: "none"}}>Home</Link>
            </li>
            <li style={li}><Link to="/materi-10" style={{color:"white", textDecoration: "none"}}>Materi 10</Link></li>
            <li style={li}><Link to="/materi-11" style={{color:"white", textDecoration: "none"}}>Materi 11</Link></li>
            <li style={li}><Link to="/materi-12" style={{color:"white", textDecoration: "none"}}>Materi 12</Link></li>
            <li style={li}><Link to="/materi-13" style={{color:"white", textDecoration: "none"}}>Materi 13</Link></li>
            {/* <li><Link to="/materi-14">Materi 14</Link></li> */}
            </div>
          </ul>
        </nav>

        <Switch>
          {/* contoh route dengan component nya sebagai child */}
          <Route exact path="/materi-9">
            <Form />
          </Route>
          {/* contoh route dengan component nya sebagai props */}
          <Route exact path="/materi-10" component={Buah} />
          <Route exact path="/materi-11" component={Clock} />
          <Route exact path="/materi-12" component={ListForm} />
          <Route exact path="/materi-13" component={Tugas13} />
          {/* <Route exact path="/materi-14" component={Tugas14} /> */}
            
        </Switch>
      </div>
    </Router>
  );
}

export default Routes
