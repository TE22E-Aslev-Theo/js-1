let equation = "";

    function checkifnumber(number){

        number = Number(number);
        if (number = NaN) {
            return false;
        } else{ return true;}

    }

    function bodmassorter(array) {
        
        for (let i = 0; i < array.length; i++) {

        }

    }

    function nummer1() {
        equation += "1";
        document.getElementById("l1").textContent = `${equation}`
    }
    function nummer2() {
        equation += "2";
        document.getElementById("l1").textContent = `${equation}`
    }
    function nummer3() {
        equation += "3";
        document.getElementById("l1").textContent = `${equation}`
    }
    function nummer4() {
        equation += "4";
        document.getElementById("l1").textContent = `${equation}`
    }
    function nummer5() {
        equation += "5";
        document.getElementById("l1").textContent = `${equation}`
    }
    function nummer6() {
        equation += "6";
        document.getElementById("l1").textContent = `${equation}`
    }
    function nummer7() {
        equation += "7";
        document.getElementById("l1").textContent = `${equation}`
    }
    function nummer8() {
        equation += "8";
        document.getElementById("l1").textContent = `${equation}`
    }
    function nummer9() {
        equation += "9";
        document.getElementById("l1").textContent = `${equation}`
    }
    function plus() {
        equation += " + ";
        document.getElementById("l1").textContent = `${equation}`
    }
    function minus() {
        equation += " - ";
        document.getElementById("l1").textContent = `${equation}`
    }
    function multi() {
        equation += " * ";
        document.getElementById("l1").textContent = `${equation}`
    }
    function divid() {
        equation += " / ";
        document.getElementById("l1").textContent = `${equation}`
    }
    function equal() {
        let array = equation.split(" ");
        if (array[1] == "+") {
            let svar = Number(array[0]) + Number(array[2]);
            document.getElementById("l1").textContent = `${svar}`
            equation = "";
        }
        if (array[1] == "-") {
            let svar = Number(array[0]) - Number(array[2]);
            document.getElementById("l1").textContent = `${svar}`
            equation = "";
        }
        if (array[1] == "/") {
            let svar = Number(array[0]) / Number(array[2]);
            document.getElementById("l1").textContent = `${svar}`
            equation = "";
        }
        if (array[1] == "*") {
            let svar = Number(array[0]) * Number(array[2]);
            document.getElementById("l1").textContent = `${svar}`
            equation = "";
        }
            
    }

    

