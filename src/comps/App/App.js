import Header from "comps/Header/Header";
import Dashboard from "comps/Dashboard/Dashboard";
import './App.css';

const App = ()=>{
  return (
    <div className="flex-col-center">
        <Header/>
        <Dashboard/>
    </div>
  );
}

export default App;
