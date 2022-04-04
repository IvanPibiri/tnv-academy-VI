
        function myFunction() {
        let pizze = parseInt(document.forms.form1.pizze.value);
        let farina = 150*pizze;
        document.getElementById("farina").innerHTML= farina;
        let acqua = 110*pizze;
        document.getElementById("acqua").innerHTML= acqua;
        let olio = 10*pizze;
        document.getElementById("olio").innerHTML= olio;
        let sale = 5*pizze;
        document.getElementById("sale").innerHTML= sale;
        let lievito = 45*pizze;
        document.getElementById("lievito").innerHTML= lievito;
        let zucchero =2.5*pizze;
        document.getElementById("zucchero").innerHTML= zucchero;
        let salsiccia =100*pizze;
        document.getElementById("salsiccia").innerHTML= salsiccia;
        let mozzarella =90*pizze;
        document.getElementById("mozzarella").innerHTML= mozzarella;
        let friarielli =100*pizze;
        document.getElementById("friarielli").innerHTML= friarielli;
        document.getElementById("numero").innerHTML = pizze;
        }