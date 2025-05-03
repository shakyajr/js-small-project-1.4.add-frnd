var arr =[
    {name: "Dominic Valencia", img:"https://images.unsplash.com/photo-1610419923009-f0a50c304f10?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1430&q=80", status:"Strangers"},
    {name: "Austin Wade", img:"https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80", status:"Strangers"},
    {name: "Carlos Androz", img:"https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80", status:"Strangers"},  
];

function print(){
    var clutter = "";

arr.forEach(function(val,index){
    clutter+= `<div id="card">
    <div id="img">
        <img src="${val.img}" alt="">
    </div>
    <h3>${val.name}</h3>
    <h5>${val.status}</h5>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia vel ad neque voluptatum officia officiis temporibus eius inventore cumque sapiente.</p>
    <button id="${index}">Add Friend</button>
   </div> `;
});

document.querySelector("#cards").innerHTML = clutter;

}

print();


var flag = 0;
document.querySelector("#cards")
.addEventListener("click",function(details){
    var timer;
    if(flag ===0 ){
        arr[details.target.id].status = "Friend Request sent";

        print(); 

        timer = setTimeout(function(){
        arr[details.target.id].status = "Friends";
        print();
        },2000);

        flag = 1;
    }else{
        arr[details.target.id].status = "Strangers";
        print();

        clearTimeout(timer);

        arr[details.target.id].status = "Add Friend ";

        flag = 0;

    }
});



































// var btn = document.querySelector(".card button");
// var stat = document.querySelector(".card h5");

// var flag = 0
// var timer ;


// btn.addEventListener("click",function(){

//    if(flag===0){
//        stat.innerHTML = "Request Sending..."
    //    stat.style.color = "yellow"
    //    btn.innerHTML = "Cancel Request"
//        flag = 1

//      timer =  setTimeout(function(){  
//            stat.innerHTML = "Friends"
//            stat.style.color = "green"
//            btn.innerHTML = "Remove Friend"
           
//        },3000)
//    }else{

//        stat.innerHTML = "Strangers"
//        stat.style.color = "red"

//        clearTimeout(timer);

//        btn.innerHTML = "Add Friend"
//        flag = 0
//     }

// });

