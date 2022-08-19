function printAnswer() {
  const num1 = document.getElementById("toS").value;
  console.log(typeof num1);
  document.getElementById("toString").innerText = parseFloat(num1).toString(2);
}

function printPie() {
  const num2 = Math.PI;
  console.log(num2);
  document.getElementById("pie").innerText = num2;
}

function ceil() {
  const num3 = document.getElementById("up").value;
  console.log(num3);
  console.log(typeof num3);
  document.getElementById("upAnswer").innerText = Math.ceil(parseFloat(num3));
  console.log(Math.ceil(parseFloat(num3)));
}

function floor() {
  const num4 = document.getElementById("down").value;

  document.getElementById("downAnswer").innerText = Math.floor(
    parseFloat(num4)
  );
}
function round() {
  const num5 = document.getElementById("round").value;

  document.getElementById("roundAnswer").innerText = Math.round(
    parseFloat(num5)
  );
}

function fixed() {
  const num6 = document.getElementById("fixed").value;

  document.getElementById("fixedAnswer").innerText =
    parseFloat(num6).toFixed(3);
}

function nan() {
  const num7 = document.getElementById("nan").value;

  document.getElementById("nanAnswer").innerText = isNaN(num7);
}

function age() {
  const num8 = Math.floor(Math.random() * 30) + 1;

  document.getElementById("ageAnswer").innerText = num8;
}

function max() {
  document.getElementById("max1").value = parseInt(Math.random() * 100);
  document.getElementById("max2").value = parseInt(Math.random() * 100);
  document.getElementById("max3").value = parseInt(Math.random() * 100);
}

function maxAnswer() {
  const num9 = document.getElementById("max1").value;
  const num10 = document.getElementById("max2").value;
  const num11 = document.getElementById("max3").value;
  console.log(num9);
  document.getElementById("maxAnswer").innerText = Math.max(num9, num10, num11);
}

function minAnswer() {
  const num12 = document.getElementById("max1").value;
  const num13 = document.getElementById("max2").value;
  const num14 = document.getElementById("max3").value;

  document.getElementById("minAnswer").innerText = Math.min(
    num12,
    num13,
    num14
  );
}
