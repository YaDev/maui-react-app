import React from 'react';


const App = () => {
    const [showSystemInfo, setShowSystemInfo] = React.useState(false);
    const [systemInfo, setSystemInfo] = React.useState("Running on a web browser. No Machine info !!");
    
    const onClick = () => {
        console.log("Button Clicked !!");
            if (window.hasOwnProperty("DotNet")) {
                console.log("Calling GetSystemInfo");
                window.DotNet.invokeMethodAsync("BlazorMaui.Core", "GetSystemInfo").then((out: any) => {
                    console.log("Got System Info");
                    if (typeof out != undefined) {
                        setSystemInfo(out);
                    }
                });
            }

        setShowSystemInfo(true);
    };


    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-dark p-3 bg-dark" id="headerNav">
        <div className="container-fluid">
          <a className="navbar-brand d-block d-lg-none" href="#">
            <img src="/assets/img/logo.png" height="40" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
    
          <div className=" collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav mx-auto ">
              <li className="nav-item">
                <a className="nav-link mx-2 active" aria-current="page" href="#">Link 1</a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-2" href="#">Link 2</a>
              </li>
              <li className="nav-item d-none d-lg-block">
                <a className="nav-link mx-2" href="#">
                  <img src="/assets/img/logo.png" height="40" />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-2" href="#">Link 3</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link mx-2 dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
                  data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><a className="dropdown-item" href="#">Sub-Menu 1</a></li>
                  <li><a className="dropdown-item" href="#">Sub-Menu 2</a></li>
                  <li><a className="dropdown-item" href="#">Sub-Menu 3</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    
      <div className="container h-100 d-flex justify-content-center align-items-center">
        <div>
          <h1>Hello, world!</h1>
          <svg fill="#702af7" width="150px" height="150px" viewBox="0 0 24 24" role="img"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M23.834 8.101a13.912 13.912 0 0 1-13.643 11.72 10.105 10.105 0 0 1-1.994-.12 6.111 6.111 0 0 1-5.082-5.761 5.934 5.934 0 0 1 11.867-.084c.025.983-.401 1.846-1.277 1.871-.936 0-1.374-.668-1.374-1.567v-2.5a1.531 1.531 0 0 0-1.52-1.533H8.715a3.648 3.648 0 1 0 2.695 6.08l.073-.11.074.121a2.58 2.58 0 0 0 2.2 1.048 2.909 2.909 0 0 0 2.695-3.04 7.912 7.912 0 0 0-.217-1.933 7.404 7.404 0 0 0-14.64 1.603 7.497 7.497 0 0 0 7.308 7.405s.549.05 1.167.035a15.803 15.803 0 0 0 8.475-2.528c.036-.025.072.025.048.061a12.44 12.44 0 0 1-9.69 3.963 8.744 8.744 0 0 1-8.9-8.972 9.049 9.049 0 0 1 3.635-7.247 8.863 8.863 0 0 1 5.229-1.726h2.813a7.915 7.915 0 0 0 5.839-2.578.11.11 0 0 1 .059-.034.112.112 0 0 1 .12.053.113.113 0 0 1 .015.067 7.934 7.934 0 0 1-1.227 3.549.107.107 0 0 0-.014.06.11.11 0 0 0 .073.095.109.109 0 0 0 .062.004 8.505 8.505 0 0 0 5.913-4.876.155.155 0 0 1 .055-.053.15.15 0 0 1 .147 0 .153.153 0 0 1 .054.053A10.779 10.779 0 0 1 23.834 8.1zM8.895 11.628a2.188 2.188 0 1 0 2.188 2.188v-2.042a.158.158 0 0 0-.15-.15z" />
          </svg>
          <div>
            <button type="button" onClick={onClick} className="btn btn-primary">Load System info</button>
          </div>
        </div>
      </div>
      { showSystemInfo ? <div className="container h-100 d-flex justify-content-center align-items-center">{systemInfo}</div>: null }
        </>
    );
};

export default App;