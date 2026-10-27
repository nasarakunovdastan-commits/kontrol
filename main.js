// №1 Типы данных и переменные
// 1.1
let name = "Дастан";
let age0 = 19;
let isStudent = true;
let hobbies = ["Заниматся спортом", "Смотреть фильмы", "Программирование"];

console.log(name);
console.log(age0);
console.log(isStudent);
console.log(hobbies);

// 1.2

const num1 = 50;
const num2 = 10;

console.log("сумма", num1 + num2);
console.log("разность", num1 - num2);
console.log("произведение", num1 * num2);
console.log("частное", num1 / num2);

// 1.3

const name1 = "Jhon";
const age1 = "20";

console.log(name1 + "is" + age1 + "years old");

// №2 Условные конструкции
// 2.1

let age2 = prompt("Введите свой возраст:");

age2 = Number(age2);

if (age2 < 0) {
  console.log("Неправильный возраст");
} else if (age2 < 13) {
  console.log("Ребенок");
} else if (age2 <= 17) {
  console.log("Подросток");
} else if (age2 <= 65) {
  console.log("Взрослый");
} else {
  console.log("Пенсионер");
}

// 2.2

function checkEvenOdd(number) {
  if (number % 2 === 0) {
    console.log("Четное");
  } else {
    console.log("Нечетное");
  }
}

checkEvenOdd(4);
checkEvenOdd(7);
checkEvenOdd(10);
checkEvenOdd(15);

// 2.3

let age3 = Number(prompt("Введите свой возраст:"));
let height = Number(prompt("Введите свой рост в см:"));

if (age3 < 5) {
  console.log("Слишком мал");
} else if (age3 >= 5 && age3 <= 12) {
  console.log("Добро пожаловать");
} else if (age3 >= 13 && age3 <= 18 && height > 160) {
  console.log("Добро пожаловать");
} else {
  console.log("Не разрешено");
}

// №3 Циклы
// 3.1

for (let i = 1; i <= 10; i++) {
  console.log("7 x " + i + " = " + 7 * i);
}

// 3.2

function sumNumbers(n) {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum = sum + i;
  }

  return sum;
}

console.log(sumNumbers(5));

// 3.3

let count1 = 20;
while (count1 >= 1) {
  console.log(count1);
  count1--;
}

// №4 Работа с массивами
// 4.1

const grades = [5, 4, 3, 5, 2, 4, 5];

let sum = 0;
let max = grades[0];

for (let i = 0; i < grades.length; i++) {
  console.log(grades[i]);

  sum = sum + grades[i];

  if (grades[i] > max) {
    max = grades[i];
  }
}

let average = sum / grades.length;

console.log("Сумма оценок:", sum);
console.log("Средняя оценка:", average);
console.log("Максимальная оценка:", max);
// 4.2

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    console.log(numbers[i]);
  }
}

// 4.3

const cities = ["Бишкек", "Ош", "Каракол", "Токмок"];

function findCity(arr, city) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === city) {
      return i;
    }
  }

  return -1;
}

console.log(findCity(cities, "Ош"));
console.log(findCity(cities, "Токмок"));
console.log(findCity(cities, "Нарын"));

// №5 Объекты в JavaScript
// 5.1

const student = {
  name: "Дастан",
  age4: 18,
  courses: ["JavaScript", "HTML", "CSS"],
  isActive: true,
};

console.log(student);

student.age4 = student.age4 + 1;

console.log("Новый возраст:", student.age4);

for (let i = 0; i < student.courses.length; i++) {
  console.log(student.courses[i]);
}

// 5.2

const product = {
  name: "Телефон",
  price: 15000,
  quantity: 2,
};

function getTotalCost(product) {
  let total = product.price * product.quantity;
  console.log("Товар:", product.name);
  console.log("Общая стоимость:", total, "сом");
}

getTotalCost(product);

// 5.3

const books = [
  {
    title: "Война и мир",
    author: "Лев Толстой",
    year: 1869,
  },
  {
    title: "Преступление и наказание",
    author: "Фёдор Достоевский",
    year: 1866,
  },
  {
    title: "Мастер и Маргарита",
    author: "Михаил Булгаков",
    year: 1967,
  },
];

for (let i = 0; i < books.length; i++) {
  console.log("Название:", books[i].title);
  console.log("Автор:", books[i].author);
  console.log("Год:", books[i].year);
  console.log("----------------");
}

let oldestBook = books[0];

for (let i = 1; i < books.length; i++) {
  if (books[i].year < oldestBook.year) {
    oldestBook = books[i];
  }
}

console.log("Самая старая книга:", oldestBook.title);
console.log("Автор:", oldestBook.author);
console.log("Год:", oldestBook.year);

// №6 Функции
// 6.1

const calculateDiscount = (price, discount) => {
  return price - (price * discount) / 100;
};

console.log(calculateDiscount(1000, 10));
console.log(calculateDiscount(2000, 20));
console.log(calculateDiscount(500, 5));

// 6.2

const getGrade = (score) => {
  if (score >= 80 && score <= 100) {
    return "A";
  } else if (score >= 60) {
    return "B";
  } else if (score >= 40) {
    return "C";
  } else if (score >= 0) {
    return "F";
  } else {
    return "Неправильный балл";
  }
};

console.log(getGrade(95));
console.log(getGrade(75));
console.log(getGrade(50));
console.log(getGrade(20));

// 6.3

const getMaxNumber = (arr) => {
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
};

console.log(getMaxNumber([3, 7, 2, 9, 5]));
console.log(getMaxNumber([10, 25, 4, 18]));
console.log(getMaxNumber([-5, -2, -10, -1]));

// №7 OM и обработка событий
// 7.1

const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", () => {
  const text = taskInput.value.trim();

  if (text === "") {
    return;
  }

  const li = document.createElement("li");
  li.textContent = text;
  taskList.append(li);

  taskInput.value = "";
});

// 7.2

const themeBtn = document.getElementById("themeBtn");
const mainContent = document.getElementById("mainContent");

themeBtn.addEventListener("click", () => {
  mainContent.classList.toggle("dark");

  if (mainContent.classList.contains("dark")) {
    themeBtn.textContent = "Светлая тема";
  } else {
    themeBtn.textContent = "Темная тема";
  }
});
