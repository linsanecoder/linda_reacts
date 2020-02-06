// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
import * as React from "react";
import * as ReactDOM from "react-dom";

export class List extends React.Component {
   constructor(state) {
      super(state);
      this.state = { items: null };
      this.loadMenusFromServer();
   }

   loadMenusFromServer() {
      var xhr = new XMLHttpRequest();
      xhr.open('get', 'http://localhost:58109/data/GetMenuList/', true);
      xhr.onload = function () {
         var dataitems = JSON.parse(xhr.responseText);
         //var tmp = this.state;
         //tmp.items = dataitems;
         //this.setState(tmp);
         document.getElementById('rawdata').innerHTML = xhr.responseText + "dsklfjasdklfj";
      };
      xhr.send();
   }

   render() {
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

      return (
         <div id="dvmenu">
            menuList<br/>
            <button name="Load" onClick={this.loadMenusFromServer}>Load List</button>
         </div>);
   }

}

export default List;