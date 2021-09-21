let add=()=>{
    document.getElementById('error').innerHTML="";
    let name=document.getElementById('submit').value;

    if (name==''){
        document.getElementById('error').innerHTML="please add some value";
    }
    else {
        let box=document.getElementById('box');

        let li= document.createElement('li');
        li.textContent=name;

        let position=box.firstElementChild;

        if(position==null){
            box.appendChild(li);
        }
        else{
            box.insertBefore(li,position);
        }
    }
    document.getElementById('submit').value="";
}