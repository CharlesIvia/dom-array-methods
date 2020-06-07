//Fetch dom elements
const main = document.getElementById("main");
const addUser = document.getElementById("add-user");
const doubleBtn = document.getElementById("double");
const showMillionairesBtn = document.getElementById("show-millionaires");
const sortBtn = document.getElementById("sort");

let data = [];

getRandomUser();

//Fetch ramdom user and money

async function getRandomUser() {
  const res = await fetch("https://randomuser.me/api");
  const data = await res.json();

  const user = data.results[0];

  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.random() * 1000000),
  };

  addData(newUser);
}

//Double everyones money

function doubleMoney() {
  data = data.map((user) => {
    return { ...user, money: user.money * 2 };
  });

  updateDom();
}

//Sort users by richest

function sortByRichest() {
  data.sort((a, b) => b.money - a.money);
  updateDom();
}

//Filter only millionaires

function showMillionaires() {
  data = data.filter((user) => user.money > 1000000);
  updateDom();
}
