function receivesAFunction(callback){
    return callback();
}
  function returnsANamedFunction(name){
    return function namedFunction(){

    };
  }
  function returnsAnAnonymousFunction(){
    return function(){

    };
  }
