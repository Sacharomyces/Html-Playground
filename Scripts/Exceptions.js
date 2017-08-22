var exceptionExample = function (){
    var x = 5;
    var y = 0;

    //try this
    try{
        if(y==0)
            throw("fuck off");
        console.log(x/y);
    }

    //if catches exception - e from try block
    catch (e){
        console.log("error" + e);
    }
    //always executed 
    finally{
        console.log("finnal");
    }


};