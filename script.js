function changestyle1(){
        var newname=prompt('What´s your favourite beer style?','eg; DIPA');
    if(newname != '') {
        document.getElementById('h1').innerHTML=newname;}
    }

    function changestyle2(){
        document.body.style.background='orange';
        document.getElementById('anim').style.transition='all 2s';
        document.getElementById('anim').style.transform='rotateY(1080deg)';
        document.getElementById("cheers").style.background='chartreuse';}
        
    