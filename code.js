var roll_btn=document.getElementById('roll_btn')
roll_btn.addEventListener('click',function(e){

    var randomno1=Math.floor(Math.random()*6)+1
    var randomimage1='images_dice/dice'+randomno1+'.png'
    var img1=document.getElementById('img1')
    img1.setAttribute("src",randomimage1)

    
    var randomno2=Math.floor(Math.random()*6)+1
    var randomimage2='images_dice/dice'+randomno2+'.png'
    var img2=document.getElementById('img2')
    img2.setAttribute("src",randomimage2)

    var refresh=document.getElementById('refresh')
    if(randomimage1>randomimage2){
        refresh.innerHTML="Player 1 Won!!!!!!!!"
    }
    else if(randomimage1<randomimage2){
        refresh.innerHTML="Player 2 Won!!!!!!!!"
    }
    else{
        refresh.innerHTML="Draw Match ^!^"
    }
})