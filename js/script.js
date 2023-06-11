const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');

menuIcon.addEventListener('click', () => {
  menu.classList.toggle('active');
});








document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');
  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    events: [
      {
        title: 'Propiedades de las potencias',
        start: '2023-06-10'
      },
      {
        title: 'Geometría',
        start: '2023-06-12',
        end: '2023-06-15'
      },
    ],locales: 'es', firstDay: 1,
  });
  calendar.render();
});








// Función para generar un problema de porcentaje
function generatePercentageProblem() {
  const number = Math.floor(Math.random() * 100000) + 1;
  const percentage = Math.floor(Math.random() * 100) + 1;
  const result = (number * percentage) / 100;

  const problemContainer = document.getElementById('problem-container');
  problemContainer.textContent = `El ${percentage}% de ${number} es:`;

  const solutionContainer = document.getElementById('solution-container');
  solutionContainer.innerHTML = `
    <div class="solution">El ${percentage}% de ${number} es ${result}.</div>
  `;

  MathJax.typesetPromise([problemContainer, solutionContainer]);
}


// Función para generar un problema de números enteros grandes
function generateLargeIntegersProblem() {
  const num1 = Math.floor(Math.random() * 9999);
  const num2 = Math.floor(Math.random() * 9999);
  const operations = ['+', '-', '*', '/'];
  const operation = operations[Math.floor(Math.random() * operations.length)];

  let result;
  switch (operation) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
  }

  const problemContainer = document.getElementById('problem-container');
  problemContainer.textContent = `Realiza la siguiente operación: ${num1} ${operation} ${num2}`;

  const solutionContainer = document.getElementById('solution-container');
  solutionContainer.innerHTML = `
    <div class="solution">El resultado de ${num1} ${operation} ${num2} es ${result}</div>
  `;

  MathJax.typesetPromise([problemContainer, solutionContainer]);
}


// Función para generar un problema de números racionales
function generateRationalNumbersProblem() {
  let numerator, denominator, result;

  do {
    numerator = Math.floor(Math.random() * 1000) + 1;
    denominator = Math.floor(Math.random() * 1000) + 1;
    result = numerator / denominator;
  } while (result % 1 !== 0); // Continúa generando fracciones hasta que la fracción sea un número entero

  const problemContainer = document.getElementById('problem-container');
  problemContainer.innerHTML = `Simplifica la fracción \\(\\frac{${numerator}}{${denominator}}\\)`;

  const solutionContainer = document.getElementById('solution-container');
  solutionContainer.innerHTML = `
    <div class="solution">La fracción simplificada de \\(\\frac{${numerator}}{${denominator}}\\) es ${result}</div>
  `;

  MathJax.typesetPromise([problemContainer, solutionContainer]);
}


// Función para generar un problema de potencias y raíces
function generatePowersAndRootsProblem() {
  const base = Math.floor(Math.random() * 16) + 1;
  const exponent = Math.floor(Math.random() * 10) + 1;
  const result = base ** exponent;

  const problemContainer = document.getElementById('problem-container');
  problemContainer.innerHTML = `Calcula ${base}<sup>${exponent}</sup>`;

  const solutionContainer = document.getElementById('solution-container');
  solutionContainer.innerHTML = `
    <div class="solution">${base}<sup>${exponent}</sup> es ${result}</div>
  `;

  MathJax.typesetPromise([problemContainer, solutionContainer]);
}


function generateAlgebraicExpressionsProblem() {
  const variables = ['x', 'y'];
  const termCount = Math.floor(Math.random() * 3) + 3; // Genera entre 3 y 5 términos
  let expression = '';

  for (let i = 0; i < termCount; i++) {
    let term;

    if (Math.random() < 0.5) {
      // Generar término con variable
      const variable = variables[Math.floor(Math.random() * variables.length)];
      const coefficient = Math.floor(Math.random() * 10) + 1;
      term = `${coefficient}${variable}`;
    } else {
      // Generar término con número entero
      const integer = Math.floor(Math.random() * 10) + 1;
      term = integer.toString();
    }

    expression += term;

    if (i < termCount - 1) {
      if (Math.random() < 0.5) {
        expression += ' + ';
      } else {
        expression += ' - ';
      }
    }
  }

  // Simplificar la expresión utilizando math.js
  const simplifiedExpression = math.simplify(expression).toString();

  const problemContainer = document.getElementById('problem-container');
  problemContainer.innerHTML = `Simplifica la expresión algebraica: ${expression}`;

  const solutionContainer = document.getElementById('solution-container');
  solutionContainer.innerHTML = `
    <div class="solution">La expresión simplificada es: ${simplifiedExpression}</div>
  `;

  MathJax.typesetPromise([problemContainer, solutionContainer]);
}

// Función para generar un problema de logaritmos
function generateLogarithmProblem() {
  const base = math.randomInt(2, 10);
  const exponent = math.randomInt(1, 5);
  const number = math.pow(base, exponent);

  const problemContainer = document.getElementById('problem-container');
  problemContainer.innerHTML = `Calcula el logaritmo base ${base} de ${number} = ?`;

  const solutionContainer = document.getElementById('solution-container');
  solutionContainer.innerHTML = `
    <div class="solution">El logaritmo base ${base} de ${number} es: \\(\\log_{${base}}${number} = ${exponent}\\)</div>
  `;

  MathJax.typesetPromise([problemContainer, solutionContainer]);
}


// Función para generar un problema de geometría con figuras
function generateGeometryProblem() {
  const shapes = ['triángulo', 'cuadrado', 'rectángulo', 'círculo'];
  const selectedShape = shapes[Math.floor(Math.random() * shapes.length)];

  let problemText, solutionText;

  switch (selectedShape) {
    case 'triángulo':
      const base = Math.floor(Math.random() * 60) + 1;
      const height = Math.floor(Math.random() * 60) + 1;
      const area = (base * height) / 2;

      problemText = `Calcula el área de un triángulo con base ${base} y altura ${height}`;
      solutionText = `El área del triángulo es \\(\\frac{${base} \\times ${height}}{2} = ${area}\\)`;
      break;

    case 'cuadrado':
      const side = Math.floor(Math.random() * 60) + 1;
      const squareArea = side * side;

      problemText = `Calcula el área de un cuadrado con lado ${side}`;
      solutionText = `El área del cuadrado es \\(${side} \\times ${side} = ${squareArea}\\)`;
      break;

    case 'rectángulo':
      const length = Math.floor(Math.random() * 60) + 1;
      const width = Math.floor(Math.random() * 60) + 1;
      const rectangleArea = length * width;

      problemText = `Calcula el área de un rectángulo con longitud ${length} y ancho ${width}`;
      solutionText = `El área del rectángulo es \\(${length} \\times ${width} = ${rectangleArea}\\)`;
      break;

    case 'círculo':
      const radius = Math.floor(Math.random() * 60) + 1;
      const circleArea = math.multiply(math.pi, math.pow(radius, 2));

      problemText = `Calcula el área de un círculo con radio ${radius}. (π = 3.14159)`;
      solutionText = `El área del círculo es \\(\\pi \\times ${radius}^2 = ${circleArea}\\)`;
      break;

    default:
      problemText = 'No se ha seleccionado ninguna forma';
      solutionText = '';
  }



  const problemContainer = document.getElementById('problem-container');
  problemContainer.innerHTML = `<div class="problem">${problemText}</div>`;

  const solutionContainer = document.getElementById('solution-container');
  solutionContainer.innerHTML = `<div class="solution">${solutionText}</div>`;

  MathJax.typesetPromise([problemContainer, solutionContainer]);
}





// Función para generar un problema de geometría con figuras en 3D
function generate3DGeometryProblem() {
  const shapes = ['cubo', 'esfera', 'cilindro', 'prisma'];
  const selectedShape = shapes[Math.floor(Math.random() * shapes.length)];

  let problemText, solutionText;

  switch (selectedShape) {
    case 'cubo':
      const sideLength = Math.floor(Math.random() * 50) + 1;
      const cubeVolume = sideLength ** 3;
      const cubeSurfaceArea = 6 * sideLength ** 2;

      problemText = `Calcula el volumen y el área de un cubo con longitud de lado ${sideLength}`;
      solutionText = `El volumen del cubo es ${cubeVolume} y el área es ${cubeSurfaceArea}`;
      break;

    case 'esfera':
      const radius = Math.floor(Math.random() * 50) + 1;
      const sphereVolume = (4 / 3) * Math.PI * radius ** 3;
      const sphereSurfaceArea = 4 * Math.PI * radius ** 2;

      problemText = `Calcula el volumen y el área de una esfera con radio ${radius}. (π = 3.14159)`;
      solutionText = `El volumen de la esfera es ${sphereVolume.toFixed(2)} y el área es ${sphereSurfaceArea.toFixed(2)}`;
      break;

    case 'cilindro':
      const cylinderRadius = Math.floor(Math.random() * 50) + 1;
      const cylinderHeight = Math.floor(Math.random() * 50) + 1;
      const cylinderVolume = Math.PI * cylinderRadius ** 2 * cylinderHeight;
      const cylinderSurfaceArea = 2 * Math.PI * cylinderRadius * (cylinderRadius + cylinderHeight);

      problemText = `Calcula el volumen y el área de un cilindro con radio ${cylinderRadius} y altura ${cylinderHeight}. (π = 3.14159)`;
      solutionText = `El volumen del cilindro es ${cylinderVolume.toFixed(2)} y el área es ${cylinderSurfaceArea.toFixed(2)}`;
      break;

    case 'prisma':
      const prismBase = Math.floor(Math.random() * 50) + 1;
      const prismHeight = Math.floor(Math.random() * 50) + 1;
      const prismVolume = prismBase ** 2 * prismHeight;
      const prismSurfaceArea = 2 * prismBase ** 2 + 4 * prismBase * prismHeight;

      problemText = `Calcula el volumen y el área de un prisma con base cuadrada de longitud ${prismBase} y altura ${prismHeight}`;
      solutionText = `El volumen del prisma es ${prismVolume.toFixed(2)} y el área es ${prismSurfaceArea.toFixed(2)}`;
      break;

    default:
      problemText = 'No se ha seleccionado ninguna forma';
      solutionText = '';
  }

  const problemContainer = document.getElementById('problem-container');
  problemContainer.innerHTML = `<div class="problem">${problemText}</div>`;

  const solutionContainer = document.getElementById('solution-container');
  solutionContainer.innerHTML = `<div class="solution">${solutionText}</div>`;

  MathJax.typesetPromise([problemContainer, solutionContainer]);
}







// Función para generar un problema de medidas de tendencia central y rango
function generateCentralTendencyProblem() {
  const data = [];
  for (let i = 0; i < 10; i++) {
    data.push(Math.floor(Math.random() * 100) + 1);
  }

  const sum = data.reduce((total, value) => total + value, 0);
  const mean = sum / data.length;
  const sortedData = data.sort((a, b) => a - b);
  const median = sortedData[Math.floor(sortedData.length / 2)];
  const range = sortedData[sortedData.length - 1] - sortedData[0];

  const problemContainer = document.getElementById('problem-container');
  problemContainer.textContent = `Calcula la media, mediana y rango del siguiente conjunto de datos: ${data.join(', ')}`;

  const solutionContainer = document.getElementById('solution-container');
  solutionContainer.innerHTML = `
    <div class="solution">La media es: ${mean.toFixed(2)}</div>
    <div class="solution">La mediana es: ${median}</div>
    <div class="solution">El rango es: ${range}</div>
  `;

  MathJax.typesetPromise([problemContainer, solutionContainer]);
}

// Evento para generar un nuevo problema al hacer clic en el botón
document.getElementById('generate-btn').addEventListener('click', function () {
  const problemType = document.getElementById('problem-type').value;

  switch (problemType) {
    case 'porcentaje':
      generatePercentageProblem();
      break;
    case 'numeros-enteros':
      generateLargeIntegersProblem();
      break;
    case 'numeros-racionales':
      generateRationalNumbersProblem();
      break;
    case 'potencias-raices':
      generatePowersAndRootsProblem();
      break;
    case 'logaritmos':
      generateLogarithmProblem()
      break;
    case 'geometria':
      generateGeometryProblem();
      break;
    case 'geometria3d':
      generate3DGeometryProblem();
      break;
    case 'medidas-tendencia-central':
      generateCentralTendencyProblem();
      break;
    default:
      break;
  }
});

// Evento para generar un nuevo problema al hacer clic en el botón "Generar problema"
document.getElementById('generate-btn').addEventListener('click', function () {
  // Lógica para generar un nuevo problema

  // Ocultar la solución al generar un nuevo problema
  document.getElementById('solution-container').style.display = 'none';
});

// Evento para mostrar la solución al problema actual al hacer clic en el botón "Ver solución"
document.getElementById('solution-btn').addEventListener('click', function () {
  const solutionContainer = document.getElementById('solution-container');
  if (solutionContainer.style.display === 'none') {
    solutionContainer.style.display = 'block';
  } else {
    solutionContainer.style.display = 'none';
  }
});
