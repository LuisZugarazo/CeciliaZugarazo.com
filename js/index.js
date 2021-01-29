    window.addEventListener("scroll", function () {
        let menuArea = document.getElementById('header');

        if (window.pageYOffset > 0) {
            menuArea.classList.add("cus-nav");
        } else {
            menuArea.classList.remove("cus-nav")
        }
    });

    window.addEventListener("scroll", function () {
        let menuArea = document.getElementById('caja');

        if (window.pageYOffset > 0) {
            menuArea.classList.add("caja-larga");
        } else {
            menuArea.classList.remove("caja-larga")
        }
    });


    let index = 1;
    const valor = 250
    let presencial = document.getElementById("presencial")
    let boxValue = document.getElementById("box")
    let inputPresencial = document.getElementById("presencialInput")
    let newValue = 0;
    function nextNum() {
        index += 1;
       console.log(index)
        if (index > 0 && index < 15) {

            boxValue.setAttribute('value', index);
            newValue = parseInt(presencial.value) + valor + " " + "mxn";
            console.log(newValue)
            presencial.setAttribute('value', newValue)
            inputPresencial.setAttribute('value', newValue)
        } else {
            index = 1
            boxValue.setAttribute('value', index);
            
            newValue=0;
            presencial.setAttribute('value', valor)
            inputPresencial.setAttribute('value', valor+ " " + "mxn")
            console.log(newValue)
        }

    }

    function prevNum() {

        index -= 1;


        if (index > 0 && index < 15) {

            boxValue.setAttribute('value', index);
            let newValue = parseInt(presencial.value) - valor + " " + "mxn";
            console.log(newValue)
            presencial.setAttribute('value', newValue)
            inputPresencial.setAttribute('value', newValue)
        } else {
            index = 1
            boxValue.setAttribute('value', index);
            inputPresencial.setAttribute('value', valor + " " + "mxn")
        }
    }

    function Mobile() {
        var x = document.getElementById("myLinks");
        if (x.style.display === "block") {
            x.style.display = "none";
        } else {
            x.style.display = "block";
        }
    }


    /* Open when someone clicks on the span element */
    function openNav() {
        document.getElementById("myNav").style.width = "100%";
    }

    /* Close when someone clicks on the "x" symbol inside the overlay */
    function closeNav() {
        document.getElementById("myNav").style.width = "0%";
    }



    var total = 0;


    const onHandleValueChange = () => {

        if (document.getElementById('presencial').checked) {

            total = document.getElementById('presencial').value
            console.log(total)
        } else if (document.getElementById('online').checked) {

            total = document.getElementById('online').value
            console.log(total)
        }

    }
    
    
    
    
    

   
    
    