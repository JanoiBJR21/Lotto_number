let lotto_number = prompt("กรองเลขมา : !")
document.getElementById("lotto").innerHTML = lotto_number

let random_number = Math.floor(Math.random() * 1000)
document.getElementById("random").innerHTML = random_number

    if(lotto_number == random_number){
        document.getElementById("random_random").innerHTML = "คุณถูกรางวัล"
    }
        else{
            document.getElementById("random_random").innerHTML = "คุณไม่ถูกรางวัล"
        }