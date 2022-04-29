let input = document.querySelector('#task');
let btn = document.querySelector('#liveToastBtn');
let list = document.querySelector('#list');
let el =document.getElementsByTagName('li');



btn.addEventListener('click', newElement => {
    let txt = input.value;
    if(txt === "" || txt === null){
        $('#liveToast').toast('show')
       /* function newElement(){
            var y=document.getElementById('liveToast');
            y.className ="show";
            setTimeout(function() {
                y.className =y.className.replace("show","");
            }, 3000);
        }
        newElement();*/
            
    }else{
        $('#liveToast1').toast('show')

        let paragraph = document.createElement('li');
        list.appendChild(paragraph);
        paragraph.innerHTML = input.value += ' <span class="close "> X </span> ' ;
        input.value = "";
      
        
        /*function newElement(){
            var x= document.getElementById('liveToast1');
            x.className = "show";
            setTimeout(function() {
                x.className =x.className.replace("show","");
            }, 3000);       
        }
        newElement();*/
         
    }
    
});

btn.onclick = () => {
    let userData = input.value;
    let getLocalStorage = localStorage.getItem("New Todo");
    if(getLocalStorage ==  null){
        listArr =[];
    }else{
        listArr = JSON.parse(getLocalStorage);
    }
    listArr.push(userData);
    localStorage.setItem("New Todo", JSON.stringify(listArr));
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);