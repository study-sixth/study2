var caidan = document.getElementById("caidan").getElementsByTagName("li");
console.log(caidan);
var shangping= document.getElementById("shangping").getElementsByTagName("ul");
console.log(shangping);
for(var i=0;i<caidan.length;i++){
    caidan[i].onclick=showlist;
}

function showlist(){
    for( var i=0;i<caidan.length;i++){
        if( caidan[i] === this){
            caidan[i].className = "native";
            shangping[i].className = "clearfix native";
        }
        else{
            caidan[i].className = "" ;
            shangping[i].className = "clearfix" ;

        }
    }
}