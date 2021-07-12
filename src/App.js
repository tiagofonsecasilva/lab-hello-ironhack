
import './App.css';

function App() {
  return (
    <>
      <header className="App-header">
        <div class="container container-top">
          <div class="row">
            <div class="col-md-10">
              <img src="/images/ironhack-logo.svg" alt="logo" />
            </div>
            <div class="col-md-2">
              <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <img src="/images/menuTop.svg" alt="another logo" />
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <a class="dropdown-item" href="#">Something else here</a>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div class="container-lg">
          <div class="row">
          <div class="col-md-3 middle">
            <h1>Say hello to ReactJS</h1>
            <p>you will learn how to use the most popular frontend library and become a super ninja developer</p>
            <button type="button" class="btn btn-secondary btn-lg">Awesome!</button>
            </div>
          </div>
        </div>
        </header >
        <div class="container container-down">
          <div class="row row-down">
            <div class="col-md-3">
            <img src="/images/icon1.png" alt="service 1" />
            <h2>Declarative</h2>
            <p>React makes it easy</p>
            </div>
            <div class="col-md-3">            <img src="/images/icon2.png" alt="service 2" />
            <h2>Components</h2>
            <p>Build encapsuled</p></div>
            <div class="col-md-3">
            <img src="/images/icon3.png" alt="service 3" />
            <h2>Single-Way</h2>
            <p>A set of immutable</p>
            </div>
            <div class="col-md-3"><img src="/images/icon4.png" alt="service 4" />
            <h2>JSX</h2>
            <p>Statically Typed</p></div>

            </div>
            </div>


    </>
  );
}

export default App;
