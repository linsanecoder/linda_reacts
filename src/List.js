// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
import * as React from "react";
import ReactDOM from 'react-dom';

export class List extends React.Component {
   constructor(state) {
      super(state);
      this.state = { items: [] };
      //this.loadMenusFromServer();
   }

   loadMenusFromServer() {
      fetch('https://localhost:44320/data')
         .then((response) => {
            return response.json();
         })
         .then((myJson) => {
            var mainContainer = document.getElementById("rawdata");
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

   render() {
      return (
         <div id="dvmenu">
            <button name="Load" onClick={this.loadMenusFromServer}>Load List</button>
         </div>);
   }

}

export default List;