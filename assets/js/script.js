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

function arithmeticMean(numbers) {
    if (numbers.length === 0) {
        return 0; 
    }
    
    var sum = numbers.reduce(function(acc, val) {
        return acc + val;
    }, 0);
    
    return sum / numbers.length;
}

function calc() {
    let textNumber = document.getElementById("number").value;
    let output = document.getElementById('numbers')
    let figure = document.getElementById('figure')
    let max = document.getElementById('max')
    let avg = document.getElementById('avg')
    let iteration = document.getElementById('iteration')
    let tabs = document.getElementById('tabs')
    let number = parseInt(textNumber);
    let i = 0;
    let maxNumber = 0
    output.innerHTML = ''
    figure.innerHTML = ''
    const xValues = [];
    const yValues = [];
    xValues.length = 0;
    yValues.length = 0;
    let nums = [];

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
        nums.push(number)
    }
    
    var mean = arithmeticMean(nums);
    avg.innerHTML = mean
    max.innerHTML = maxNumber
    iteration.innerHTML = i
    
    new Chart("graph", {
    type: "line",
    data: {
        labels: xValues,
        datasets: [{
            fill: false,
            lineTension: 0,
            backgroundColor: "rgba(220,53,69,1.0)",
            borderColor: "rgba(220,53,69,0.1)",
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

    tabs.style.display = 'block'
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