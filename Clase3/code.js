window.addEventListener('DOMContentLoaded', function load(e){
    var input = document.getElementById('input');
    boton.addEventListener('click',function press(e){
        alert(input.value);

    
    var content = document.getElementsByClassName('content')[0].innerHTML;
    if(input.value>0){
        for(let i=0;i<input.value;i++){
        document.getElementsByClassName('content')[0].innerHTML = document.getElementsByClassName('content')[0].innerHTML + '<div class="content">' + content.innerHTML + '</div>';
    }
    }
    
    
    })
})
