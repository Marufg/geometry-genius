function calculateTriangleArea(){
    // get triangle base value 
    const baseField = document.getElementById('triangle-base');
    const baseValueText = baseField.value;
    const base = parseFloat(baseValueText)
    console.log(base);

    // get triangle hight value
    const hightField = document.getElementById('triangle-hight');
    const hightValueText = hightField.value;
    const hight = parseFloat(hightValueText);
    console.log(hight);

    const area = 0.5 * base * hight;
    console.log(area);

    const areaSpan = document.getElementById('triangle-area');
    areaSpan.innerText = area;

    addToCalculationEntry('Triangle', area);

}

function calculateRectangleArea(){
    const widthField = document.getElementById('rectangle-width');
    const widthValueText = widthField.value;
    const width = parseFloat(widthValueText);
    console.log(width);

    const lengthField = document.getElementById('rectangle-length');
    const lengthValueText = lengthField.value;
    const length =parseFloat(lengthValueText);
    console.log(length);

    if (isNaN(width) || isNaN(length)) {
        alert('please insert a number');
        return;
    }

    const area = width * length;

    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = area;

    addToCalculationEntry('Rectangle', area);

}


function calculateParallelogramArea(){
    const base = getInputValue('parallelogram-base');
    // console.log(base);
    const hight =getInputValue('parallelogram-hight');
    // console.log(hight);

    const area = base * hight;
    setElementInnerText('parallelogram-area', area);
    addToCalculationEntry('parallelogram', area)
}

function calculateEllipseArea(){
    const firstRadius = getInputValue('ellipse-first-radius');
    const secondRadius = getInputValue('ellipse-second-radius');
    const area = 3.14 * firstRadius * secondRadius;
    const areaTwoDecimal = area.toFixed(2);
    setElementInnerText('ellipse-area', areaTwoDecimal);

    addToCalculationEntry('Ellipse', areaTwoDecimal);
}

function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;
}

function setElementInnerText(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}

function addToCalculationEntry(areaType, area){
    console.log(areaType+ ' ' + area)
    const calculationEntry = document.getElementById('calculation-entry');

    const count = calculationEntry.childElementCount;


    const p = document.createElement ('p');
    p.classList.add('my-4');
    p.innerHTML = `${count + 1}. ${areaType} ${area} cm<sup>2</sup> <button class="btn btn-sm btn-success">convert</button>`
    calculationEntry.appendChild(p);

}