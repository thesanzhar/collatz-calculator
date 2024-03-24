let btnSend = document.getElementById("btn-send");
let textInput = document.getElementById("number");

textInput.addEventListener('input', function() {
    if (textInput.value.trim() != '') {
        btnSend.removeAttribute('disabled');
    } else {
        btnSend.setAttribute('disabled', 'disabled');
    }
});
textInput.addEventListener('keydown', function(e) {
    if (e.key === "Enter") {
        e.preventDefault();
        btnSend.click();
    }
});

function calc() {
    let textNumber = document.getElementById("number").value;
    let output = document.getElementById('numbers')
    let figure = document.getElementById('figure')
    let graph = document.getElementById('graph')
    let peak = document.getElementById('peak')
    let peakClass = document.getElementById('peak-block')
    let number = parseInt(textNumber);
    let i = 0;
    let maxNumber = 0
    output.innerHTML = ''
    figure.innerHTML = ''
    const xValues = [];
    const yValues = [];
    xValues.length = 0;
    yValues.length = 0;

    while (number != 1){
        i++
        if (number % 2 == 0){
            number = number / 2;
        } else{
            number = (number * 3) + 1;
        }
        var html = number % 2 == 0 ? "<span> /2 </span>" : number == 1 ? "<span></span>" : "<span> *3+1 </span>"
        output.innerHTML += '<li>' + '<span>' + i + '</span>' + number + '</li>';
        figure.innerHTML += '<li>' + '<div class="circle">' + '<span>' + i + '</span>' + number + html +'</div>' + '</li>';
        maxNumber = Math.max(maxNumber, number)

        xValues.push(i)
        yValues.push(number)
    }
    
    peak.innerHTML = maxNumber
    peakClass.classList.add('active')
    
    new Chart("graph", {
    type: "line",
    data: {
        labels: xValues,
        datasets: [{
            fill: false,
            lineTension: 0,
            backgroundColor: "rgba(0,0,255,1.0)",
            borderColor: "rgba(0,0,255,0.1)",
            data: yValues
        }]
    },
    options: {
        legend: {display: false},
        scales: {
            yAxes: [{ticks: {min: 0, max:maxNumber}}],
        }
    }
    });

    
}

function showType(e, typeName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName('tabcontent');
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = 'none';
    }
    tablinks = document.getElementsByClassName('tablinks');
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(typeName).style.display = 'block';
    e.currentTarget.className += " active";
}