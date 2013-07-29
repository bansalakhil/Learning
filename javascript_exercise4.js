
var main = {
// variable name is same as the Id of the main checkbox
  color: ["red", "yellow", "green", "blue"],
  movies: ["dar", "sir"],
  drinks: ["coke", "pepsi", "dew"],
  bikes: ["v-rod", "pulsar", "cbz"],

  showOrRemoveList: function (that) {
    "use strict";
    var containerDiv = that.parentNode;
    if (containerDiv.getElementsByClassName("optionContainer")[0].checked == true) {
      if (!containerDiv.getElementsByClassName("innerCheckbox").length) {
        main.appendInnerCheckbox(containerDiv);
      }
      main.changeStatusOfInnerCheckbox("check", containerDiv);
      containerDiv.parentNode.scrollTop = containerDiv.offsetTop;
    } else {
      main.changeStatusOfInnerCheckbox("uncheck", containerDiv);
      containerDiv.removeChild(containerDiv.getElementsByClassName("innerCheckbox")[0]);
    }
  },

  appendInnerCheckbox: function (containerDiv) {
    "use strict";
    var fragment = document.createDocumentFragment(), elemDiv = fragment.appendChild(document.createElement("div")), len = 0;
    elemDiv.classList.add("innerCheckbox");
    var valueArr = main.getValueOfInnerCheckbox(containerDiv);
    while (len < valueArr.length) {
      var elemInput = elemDiv.appendChild(document.createElement("input"));
      elemInput.classList.add("options");
      var attr = ["type", "checkbox", "onclick", "main.confirmAllCheckbox(this.parentNode)","value", valueArr[len]];
      main.setAttributes(elemInput, attr);
      elemDiv.appendChild(document.createTextNode(valueArr[len++].toUpperCase()));
      elemDiv.appendChild(document.createElement("br"));
    }
    containerDiv.appendChild(elemDiv);
  },

  confirmAllCheckbox: function (elemDiv) {
    "use strict";
    //check the status of all checkbox
    var innerCheckboxArr = elemDiv.getElementsByClassName("options"), len = innerCheckboxArr.length, count = 0;
    while (len) {
      if (innerCheckboxArr[(--len)].checked) {
        break;
      } else {
        count++;
      }
    }
    if (count == innerCheckboxArr.length) {
      elemDiv.parentNode.getElementsByClassName("optionContainer")[0].checked = false;
    } else {
      elemDiv.parentNode.getElementsByClassName("optionContainer")[0].checked = true;
    }
  },

  setAttributes: function (obj, attr) {
    "use strict";
    var len = 0;
    while(len < attr.length ) {
      obj.setAttribute(attr[len++], attr[len++]);
    }
  },

  getValueOfInnerCheckbox: function (containerDiv) {
    "use strict";
    if (containerDiv.id == "1") return main.color;
    else if (containerDiv.id == "2") return main.movies;
    else if (containerDiv.id == "3") return main.drinks;
    else if (containerDiv.id == "4") return main.bikes;    
  },

  changeStatusOfInnerCheckbox: function (state, containerDiv) {
    "use strict";
    var value = (state == "check") ? true : false;
    var elemArr = containerDiv.getElementsByClassName("options");
    var len = elemArr.length;
    while (len) {
      elemArr[--len].checked = value;
    }
  }
};