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

    const area = width * length;

    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = area;
}


function calculateParallelogramArea(){
    const base = getInputValue('parallelogram-base');
    // console.log(base);
    const hight =getInputValue('parallelogram-hight');
    // console.log(hight);

    const area = base * hight;
    setElementInnerText('parallelogram-area', area);
}

function calculateEllipseArea(){
    const firstRadius = getInputValue('ellipse-first-radius');
    const secondRadius = getInputValue('ellipse-second-radius');
    const area = 3.14 * firstRadius * secondRadius;
    const areaTwoDecimal = area.toFixed(2);
    setElementInnerText('ellipse-area', areaTwoDecimal);
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