(function(){
        window.myNamespace = window.myNamespace || {};
        window.myNamespace.cats = window.myNamespace.cats || {};
        window.cats = window.myNamespace.cats;
        window.cats.count = 4;
        window.myNamespace.logger = function(msg){
          console.log(msg);
        }
    })();

testFunction = function(){
  console.log("joi");
}