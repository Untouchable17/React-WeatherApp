import React from 'react';

import Info from './components/info';
import Form from './components/form';
import Weather from './components/weather';


const API_KEY = "YOUR API KEY";

class App extends React.Component {

  state = {
    city: undefined,
    country: undefined,
    temp: undefined,
    pressure: undefined,
    sunset: undefined,
    error: undefined,
  }

  gettingWeather = async (event) => {
    event.preventDefault();   // Убирает автоматическую перезагрузку страницы
    let city = event.target.elements.city.value;

    if (city) {

      const API_URL = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      const data = await API_URL.json();

      // Преобразование времени заката солнца
      let sunset = data.sys.sunset
      let date = new Date(sunset * 1000)
      let sunset_data = date.toLocaleTimeString()

      // Устанавливаем значения из data в объект state  
      this.setState({
        city: data.name,
        temp: data.main.temp,
        country: data.sys.country,
        pressure: data.main.pressure,
        sunset: sunset_data,
        error: undefined,
      });
    } else {
      this.setState({
        error: "Введите название города!"
      })
    }
  }


  // Рендерим компоненты и передаем туда нужные параметры
  render() {
    return (
      // Добавляем общий класс "wrapper" с нужными стилями из "./App.css"
      <div className="wrapper">
        <div className="main">
          <div className="container">
            <div className="row">

              <div className="col-sm-5 info">
                <Info />
              </div>

              <div className="col-sm-7 form">
                <Form weatherMethod={this.gettingWeather}/>
                <Weather 
                  city={this.state.city}
                  country={this.state.country}
                  temp={this.state.temp}
                  pressure={this.state.pressure}
                  sunset={this.state.sunset}
                  error={this.state.error}
                />
              </div>

            </div>
          </div>
        </div>

      
      </div>
    );
  }
}

export default App;