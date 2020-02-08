// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
import * as React from "react";
import ReactDOM from 'react-dom';

export class List extends React.Component {
   constructor(state) {
      super(state);
      this.state = { items: [] };
   }

   loadWeatherFromServer() {
      fetch('https://localhost:44320/data/weather')
         .then((response) => {
            return response.json();
         })
         .then((myJson) => {
            var mainContainer = document.getElementById("weather");
            let rawdata = myJson || [];

            var result = rawdata.map(function (data) {
               return (
                  <div>Date: {data.Date}  Temp: {data.TemperatureF}  Summary: {data.Summary}</div>
               )
            }, this);

            ReactDOM.render(
               <div>{result}</div>,
               mainContainer
            );
         });
   }

   loadMenuFromServer() {
      fetch('https://localhost:44320/data/menu')
         .then((response) => {
            return response.json();
         })
         .then((myJson) => {
            var mainContainer = document.getElementById("menu");
            let rawdata = myJson || [];

            var result = rawdata.map(function (menu) {
               return (
                  <div key={menu.Id}>
                     <b>{menu.Name} </b>    <br />
                     <img style={{ width: '100px', float: 'left', margin: '5px' }} src={"/img/" + menu.Picture} />{menu.Description}<p />
                     <div>${menu.Price}</div><hr />
                  </div>
               )

            }, this);

            ReactDOM.render(
               <div id="dvmenu">
                  {result}
               </div>,
               mainContainer
            );
         });
   }

   render() {
      return (
         <div id="dvmenu">
            <button name="LoadW" onClick={this.loadWeatherFromServer}>Load Weather</button>
            <button name="LoadM" onClick={this.loadMenuFromServer}>Load Menu</button>
         </div>);
   }

}

export default List;