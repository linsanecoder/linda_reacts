// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
import * as React from "react";

export class List extends React.Component {
   constructor(state) {
      super(state);
      this.state = { items: null };
      //this.loadMenusFromServer();
   }

   loadMenusFromServer() {
      document.getElementById('rawdata').innerHTML = "";

      fetch('https://localhost:44320/data')
      //fetch('https://localhost:44320/data', {
      //   mode: 'cors', headers: { 'Access-Control-Allow-Origin': '*'} })
         .then((response) => {
            return response.json();
         })
         .then((myJson) => {
            var data = myJson;
            var mainContainer = document.getElementById("rawdata");

            for (var i = 0; i < data.length; i++) {
               var div = document.createElement("div");
               div.innerHTML = 'Date: ' + data[i].Date + '  Temp: ' + data[i].TemperatureC + '  Summary: ' + data[i].Summary + '  <br />';

               mainContainer.appendChild(div);
            }
         });
   }

   render() {
      return (
         <div id="dvmenu">
            menuList<br/>
            <button name="Load" onClick={this.loadMenusFromServer}>Load List</button>
         </div>);
   }

}

export default List;