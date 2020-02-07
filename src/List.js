// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
import * as React from "react";
import ReactDOM from 'react-dom';

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
            //var data = myJson;
            //var mainContainer = document.getElementById("rawdata");

            //for (var i = 0; i < data.length; i++) {
            //   var div = document.createElement("div");
            //   div.innerHTML = 'Date: ' + data[i].Date + '  Temp: ' + data[i].TemperatureC + '  Summary: ' + data[i].Summary + '  <br />';

            //   mainContainer.appendChild(div);
            //}

            //let menus = this.state.items || [];
            //var menuList = menus.map(function (menu) {
            //   return (
            //      <div key={menu.Id}>
            //         <b>{menu.Name} </b>    <br />
            //         <img style={{ width: '100px', float: 'left', margin: '5px' }} src={"/img/" + menu.Picture} />{menu.Description}<p />
            //         <div>${menu.Price} | <a href='#' onClick={this.addToCart.bind(this, menu.Id)} >Add to cart</a></div><hr />
            //      </div>
            //   )
            //}, this);

            let rawdata = myJson || [];
            var result = rawdata.map(function (data) {
               return (
                  <div>Date: {data.Date}  Temp: {data.TemperatureC}  Summary: {data.Summary}</div>
               )
            }, this);

            //ReactDOM.unmountComponentAtNode(document.getElementById('rawdata'));
            ReactDOM.render(
               <div>{result}</div>,
               document.getElementById('rawdata')
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