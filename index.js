var data = document.getElementById('data');
var userList = document.getElementById('userList');

var counter=0;

function addUser()
{
   var inputData= document.getElementById("data").value;
 

   var print =  '<div class="row" id="data'+counter+'">'+
  '<div class="col-md-6">'+
        '<input type="text"  style="width:240px;" class="form-control"  value="'+inputData+'" disabled > <br> '+
     '</div>'+
    '<div class="col-md-2">'+
       '<button type="button" class="btn btn-warning" onclick="change(this.id)" id="change'+counter+'" style="width: 130px;" > Edit</button>'+
    
     '</div>'+
    '<div class="col-md-2">'+
      '<button type="button" class="btn btn-primary" onClick="update(this.id)" id="update'+counter+'" style="width: 130px;" id="update'+counter+'"> Update</button>'+
    
    '</div>'+
    '<div class="col-md-2">'+
        '<button type="button" class="btn btn-danger" style="width: 130px;" onClick="remove(this.id)" id="remove'+counter+'"> Delete</button>'+
    
   '</div>'+
  '</div>'

  document.getElementById('userList').insertAdjacentHTML('beforeend',print);
    counter++;

}


function change(changeId){
  var parent =   document.getElementById(changeId).parentNode.parentNode;
 var child=  parent.firstChild.firstChild;
 child.removeAttribute('disabled');
  console.log(child);
}


function update(updateId)
{
  var parent =   document.getElementById(updateId).parentNode.parentNode;
  var child=  parent.firstChild.firstChild;
  child.setAttribute('disabled','disabled');
   console.log(child);
}



function remove(removeId)
{
  var parent =   document.getElementById(removeId).parentNode.parentNode;
  parent.remove() ;

}








