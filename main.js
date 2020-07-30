
document.querySelector("#btn-select").addEventListener("click", () => {
    let dropValue = document.querySelector("#exp-drop").value    
    if (dropValue == "opc") window.alert("Por favor, escolha uma opção!")
    if (dropValue == "aceleration") aceleration()
})

function aceleration() {
    // a = (vf - vi) / (tf - ti)
    // a = ( 2*( (sf - si) - vi*t ) ) / (t ** 2) 
    console.log("Estou dentro")
    document.getElementById("div-aceleration").style.display = "flex"
}

/* let numberTentatives;
        let tentatives = document.getElementById("tentatives")

        // Test number of tentatives
        if(!tentatives.value){
            numberTentatives = 0
            tentatives.innerHTML = numberTentatives
        }

        // Generate of the random number wich two decimal places
        const round = (num, places) => {
            if (!("" + num).includes("e")) {
                return +(Math.round(num + "e+" + places)  + "e-" + places);
            } else {
                let arr = ("" + num).split("e");
                let sig = ""
                if (+arr[1] + places > 0) {
                    sig = "+";
                }

                return +(Math.round(+arr[0] + "e" + sig + (+arr[1] + places)) + "e-" + places);
            }
        }

        // Refresh 
        const reload = () => {
            window.location.reload()
        }

       
        window.onload = function pageSimulator(){

            
            randomDistance = Math.round(Math.random() * (1000 - 1) + 1)
            randomTime = Math.round(Math.random() * (100 - 1) + 1)

            document.getElementById("distance").innerHTML = randomDistance
            document.getElementById("time").innerHTML = randomTime

        }


        document.querySelector("#btn-calc").addEventListener('click', function(){
            let valueRealVelocity = round( randomDistance / randomTime , 2);
            let velocity = document.getElementById("value-velocity").value
            let diference = valueRealVelocity - parseFloat(velocity)

            console.log(round(valueRealVelocity,2))
            console.log(parseFloat(velocity))
            console.log(round(diference, 2))

            if (diference < 0.0 || diference > 0.01){
                window.alert("ERRRROOOOOUUUUU \nTente novamente")
                numberTentatives += 1
                tentatives.innerHTML = numberTentatives
                pageSimulator()
            } else {
                document.getElementById("status").innerHTML = "CORRETO"
            }

        })
 */