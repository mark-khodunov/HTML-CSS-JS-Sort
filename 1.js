let months = ["0.0.0.0/0", "10.1.30.0/24", "192.168.1.0/24",
                "193.0.174.0/24", "193.0.175.0/25", "193.0.175.22/32",
                "193.0.175.24/323", "193.0.175.23/322", "193.0.175.21/321"];

let months1 = ["193.0.174.1", "0.0.0.0", "0.0.0.0",
                "0.0.0.0", "193.0.174.10", "193.0.174.1",
                "193.0.174.13", "193.0.174.12", "193.0.174.11"];

let months2 = ["Подключение Ethernet", "Гостевая сеть", "Домашняя сеть",
                "Подключение Ethernet", "Подключение Ethernet", "Подключение Ethernet",
                "Подключение Ethernet2", "Подключение Ethernet3", "Подключение Ethernet4"];

function myFunction()
{
    if(months[0] === "0.0.0.0/0"){
        months.reverse((a, b) => a - b);
        console.log(months);
        console.log('First');

        const element = document.getElementById("m0211");
        element.textContent = months[0];
        const element1 = document.getElementById("m0212");
        element1.textContent = months[1];
        const element2 = document.getElementById("m0213");
        element2.textContent = months[2];
        const element3 = document.getElementById("m0214");
        element3.textContent = months[3];
        const element4 = document.getElementById("m0215");
        element4.textContent = months[4];
        const element5 = document.getElementById("m0216");
        element5.textContent = months[5];
        const element6 = document.getElementById("m0217");
        element6.textContent = months[6];
        const element7 = document.getElementById("m0218");
        element7.textContent = months[7];
        const element8 = document.getElementById("m0219");
        element8.textContent = months[8];

    }
    else if(months[0] === "193.0.175.21/321"){
        months.reverse((a, b) => a - b);
        console.log(months);
        console.log('Second');

        const element = document.getElementById("m0211");
        element.textContent = months[0];
        const element1 = document.getElementById("m0212");
        element1.textContent = months[1];
        const element2 = document.getElementById("m0213");
        element2.textContent = months[2];
        const element3 = document.getElementById("m0214");
        element3.textContent = months[3];
        const element4 = document.getElementById("m0215");
        element4.textContent = months[4];
        const element5 = document.getElementById("m0216");
        element5.textContent = months[5];
        const element6 = document.getElementById("m0217");
        element6.textContent = months[6];
        const element7 = document.getElementById("m0218");
        element7.textContent = months[7];
        const element8 = document.getElementById("m0219");
        element8.textContent = months[8];

    };
};

function myFunction1()
{     
    if(months1[0] === "193.0.174.1"){
        months1.reverse((a, b) => a - b);
        console.log(months1);
        console.log('First1');

        const element01 = document.getElementById("m0221");
        element01.textContent = months1[0];
        const element10 = document.getElementById("m0222");
        element10.textContent = months1[1];
        const element20 = document.getElementById("m0223");
        element20.textContent = months1[2];
        const element30 = document.getElementById("m0224");
        element30.textContent = months1[3];
        const element40 = document.getElementById("m0225");
        element40.textContent = months1[4];
        const element50 = document.getElementById("m0226");
        element50.textContent = months1[5];
        const element60 = document.getElementById("m0227");
        element60.textContent = months1[6];
        const element70 = document.getElementById("m0228");
        element70.textContent = months1[7];
        const element80 = document.getElementById("m0229");
        element80.textContent = months1[8];

    }
    else if(months1[0] === "193.0.174.11"){
        months1.reverse((a, b) => a - b);
        console.log(months1);
        console.log('Second1');

        const element02 = document.getElementById("m0221");
        element02.textContent = months1[0];
        const element12 = document.getElementById("m0222");
        element12.textContent = months1[1];
        const element22 = document.getElementById("m0223");
        element22.textContent = months1[2];
        const element33 = document.getElementById("m0224");
        element33.textContent = months1[3];
        const element44 = document.getElementById("m0225");
        element44.textContent = months1[4];
        const element55 = document.getElementById("m0226");
        element55.textContent = months1[5];
        const element66 = document.getElementById("m0227");
        element66.textContent = months1[6];
        const element77 = document.getElementById("m0228");
        element77.textContent = months1[7];
        const element88 = document.getElementById("m0229");
        element88.textContent = months1[8];

    };
};

function myFunction2()
{
    if(months2[0] === "Подключение Ethernet"){
        months2.reverse((a, b) => a - b);
        console.log(months2);
        console.log('First2');

        const element003 = document.getElementById("m0231");
        element003.textContent = months2[0];
        const element101 = document.getElementById("m0232");
        element101.textContent = months2[1];
        const element202 = document.getElementById("m0233");
        element202.textContent = months2[2];
        const element303 = document.getElementById("m0234");
        element303.textContent = months2[3];
        const element404 = document.getElementById("m0235");
        element404.textContent = months2[4];
        const element505 = document.getElementById("m0236");
        element505.textContent = months2[5];
        const element606 = document.getElementById("m0237");
        element606.textContent = months2[6];
        const element707 = document.getElementById("m0238");
        element707.textContent = months2[7];
        const element808 = document.getElementById("m0239");
        element808.textContent = months2[8];

    }
    else if(months2[0] === "Подключение Ethernet4"){
        months2.reverse((a, b) => a - b);
        console.log(months2);
        console.log('Second2');

        const element333 = document.getElementById("m0231");
        element333.textContent = months2[0];
        const element3331 = document.getElementById("m0232");
        element3331.textContent = months2[1];
        const element3332 = document.getElementById("m0233");
        element3332.textContent = months2[2];
        const element3333 = document.getElementById("m0234");
        element3333.textContent = months2[3];
        const element3334 = document.getElementById("m0235");
        element3334.textContent = months2[4];
        const element3335 = document.getElementById("m0236");
        element3335.textContent = months2[5];
        const element3336 = document.getElementById("m0237");
        element3336.textContent = months2[6];
        const element3337 = document.getElementById("m0238");
        element3337.textContent = months2[7];
        const element3338 = document.getElementById("m0239");
        element3338.textContent = months2[8];

    };
};


