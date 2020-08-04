appList.controller('appCtrl', function ($scope) {

  let elemMain = angular.element(document.querySelector(".main"));
  let basket = angular.element(document.querySelector(".basket"));
  let but = angular.element(document.querySelector(".text"));
  let inp = angular.element(document.querySelector(".inputName"));


  function func(){
    let txtN = inp.val();
    but.css("display", "none");
    inp.css("border", "1px solid #000");

    let elem = angular.element("<div>");
    let labe = angular.element("<input>");
    let txt = angular.element("<span>");
    txt.text(txtN);
    labe.attr("type", "checkbox");

    elem.append(labe);
    elem.append(txt);
    elemMain.append(elem);

    elem.on("click", function (e){
      let sm = e.target.parentNode;

      if (e.target.checked == true) {
          sm.style.fontStyle = 'italic';
      }
      else if (e.target.checked == false){
          sm.style.fontStyle = 'normal';
        }

      basket.on("click", function (){
        if (e.target.checked) {
          e.target.parentNode.remove();
        }
      });

    });
  }


  $scope.add = function (name, answerForm){
    if(answerForm.name.$invalid){
      but.css("display", "block");
      inp.css("border", "1px solid red");

    }

    if(answerForm.name.$valid){
      func();
    }
  }


  inp.on('keydown', function(e) {
    if (e.keyCode === 13) {

       if(inp.val() == '' || inp.val() == "(.{3,})"){
        but.css("display", "block");
        inp.css("border", "1px solid red");
        return false;

      } else {
        func();
      }

    }
  });


});
