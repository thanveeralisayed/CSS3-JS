var aBtn = document.getElementById('abtn');
var ipTask = document.getElementById('iptask');
var task = '';
var List = document.getElementById('tolist');
var bUpdate = document.getElementById('upbtn');
var bRemove = document.getElementById('rmbtn');
var dBtn = document.getElementsByClassName('dBtn');
var uBtn = document.getElementsByClassName('uBtn');



ipTask.addEventListener('input',function(event){
    task = event.target.value;
})

function Felement(){
    var fone = List.firstElementChild;
    return fone;
}


function createTnode() {
    var nList = document.createElement('li');
    var ndiv = document.createElement('div');
    ndiv.appendChild(document.createTextNode(task));
    ndiv.className = 'nelement';
    nList.appendChild(ndiv);
    nList.id = 'item' + (List.childElementCount + 1);
    return nList;
}

function createDeletebtn(){
    var dButton = document.createElement('button');
    dButton.appendChild(document.createTextNode('Delete'));
    dButton.id = 'item' + (List.childElementCount + 1);
    dButton.className = 'dBtn';
    return dButton;
}

function createUpdatebtn(){
    var Ubutton = document.createElement('button');
    Ubutton.appendChild(document.createTextNode('Update'));
    Ubutton.id = 'item' + (List.childElementCount + 1);
    Ubutton.className = 'uBtn';
    return Ubutton;
}




function addTask()
{
    if(task !== undefined && task !== null && task !== '')
    {
    var nList = createTnode();
    var fone = Felement();
    var dbtn = createDeletebtn();
    var ubtn = createUpdatebtn();
    nList.className = 'seldo';
    nList.appendChild(dbtn);
    nList.appendChild(ubtn);
    List.insertBefore(nList,fone);
    ipTask.value = '';

    dbtn.onclick = function(){
        console.log(dbtn.id);
        List.removeChild(nList);
    }

    ubtn.onclick = function(){
        console.log('clicked');
        var rList = createTnode();
        var dbtn = createDeletebtn();
        var ubtn = createUpdatebtn();
        ubtn.id = rList.id;
        dbtn.id = rList.id;
        rList.appendChild(dbtn);
        rList.appendChild(ubtn);

        List.replaceChild(rList,nList);
    }

  

    }
    else
    {
        alert('enter a valid input');
    }
}


aBtn.addEventListener('click',addTask);

document.body.addEventListener('keypress',function(e){
    if(e.keyCode == 13){
        // console.log('pressed enter')
        addTask();
    }
})


bUpdate.addEventListener('click',function(){
    var fone = Felement();
    var nList = createTnode();
    var dbtn = createDeletebtn();
    var ubtn = createUpdatebtn();
    ubtn.id = nList.id;
    dbtn.id = nList.id;
    nList.className = 'seldo';
    nList.appendChild(dbtn);
    nList.appendChild(ubtn);
    List.replaceChild(nList,fone);


   
    


    dbtn.onclick = function(){
        console.log(dbtn.id);
        List.removeChild(nList);
    }


    ubtn.onclick = function(){
        console.log('clicked');
        var rList = createTnode();
        var dbtn = createDeletebtn();
        var ubtn = createUpdatebtn();
        ubtn.id = rList.id;
        dbtn.id = rList.id;
        rList.appendChild(dbtn);
        rList.appendChild(ubtn);

        List.replaceChild(rList,nList);
    }

})


bRemove.addEventListener('click',function(){
    var fone = Felement();
    List.removeChild(fone);

})


























