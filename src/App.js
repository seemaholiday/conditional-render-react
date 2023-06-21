import {useEffect, useState} from 'react'
import './App.css';

function App() {
  const [data, setData] = useState([
    {
      type: "GUEST",
      label: "Guest user account",
      userCount: 200
    },
    {
      type: "ADMIN",
      label: "Admin account",
      userCount: 5
    },
    {
      type: "DOMAIN_ADMIN",
      label: "Domain admin account",
      userCount: 5
    },
    {
      type: "AUTHENTICATED_USER",
      label: "Logged in user account",
      userCount: 290
    }
  ])
  const [validate, setvalidate] = useState(["DOMAIN_ADMIN"])
  const [colorType, setColorType] = useState(null)
  const clickEvent=(data)=>{
    setColorType(data)
  }
  return (
    <div className="App">
      <div>
          {/* {
            data.map((item)=>{
             return( <h2>{item.type === "DOMAIN_ADMIN" ||  item.type === "ADMIN"? "" : item.label}</h2>)
            })
          } */}
           {/* {
            data.map((item)=>{
             return( <h2>{item.type != "DOMAIN_ADMIN" &&  item.type != "AUTHENTICATED_USER" ? item.label : "" }</h2>)
            })
          } */}
          {
            data.map((item)=>{
              return(<h1 onClick={(e)=> clickEvent(item.type)}
                    style={{color: colorType === item.type ? "red" : 'green'}}
                >
                
                    {!validate.includes(item.type) ? item.label : "No Data"}
                </h1>)
            })
          }
      </div>
    </div>
  );
}

export default App;
