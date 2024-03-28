let currentlocation = document.getElementById("currentlocation");
let favorites = document.getElementById("favorites");
let searchBar = document.getElementById("searchBar");
let tempature = document.getElementById("tempature");
let highlow = document.getElementById("highlow");
let onedaydate = document.getElementById("onedaydate");
let twodaydate = document.getElementById("twodaydate");
let threedaydate = document.getElementById("threedaydate");
let fivedaydate = document.getElementById("fivedaydate");
let Friday = document.getElementById("Friday");
let searchBtn = document.getElementById("searchBtn");
let mainIcon = document.getElementById("mainIcon");
let onedaysIcon = document.getElementById("onedaysIcon");



let currentWeather = [];
let choosenCity = "";




async function getWeather(cityOfChoice){
    let apiResponse = await fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + cityOfChoice + "&units=imperial&appid=8ee213faeb0cfd8b025313fe8a69b0ce").then(Response => Response.json());
    console.log(apiResponse);
    currentlocation.innerText = apiResponse.city.name;
    mainIcon.src = "https://openweathermap.org/img/wn/" + apiResponse.list[4].weather.icon +  "2x.png";
    //WeatherData = apiResponse;""
    tempature.innerText = Math.round(apiResponse.list[0].main.temp) + "°";
    lowtemp.innerText = Math.round(apiResponse.list[3].main.temp) + "°";
    hightemp.innerText = Math.round(apiResponse.list[2].main.temp) + "°";
    onedaytemp.innerText = Math.round(apiResponse.list[4].main.temp) + "°";
    twodaytemp.innerText = Math.round(apiResponse.list[12].main.temp) + "°";
    threedaytemp.innerText = Math.round(apiResponse.list[20].main.temp) + "°";
    fourdaytemp.innerText = Math.round(apiResponse.list[28].main.temp) + "°";
    fivedaytemp.innerText = Math.round(apiResponse.list[36].main.temp) + "°";

    

    

    

    

    


  
}
getWeather("stockton");


let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday","Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let d = new Date();
let day = days[d.getDay()];
onedaydate.innerText = days[d.getDay()+1];
twodaydate.innerText = days[d.getDay()+2];
threedaydate.innerText = days[d.getDay()+3];
fourdaydate.innerText = days[d.getDay()+4];
fivedaydate.innerText = days[d.getDay()+5];





searchBar.addEventListener("keypress", function(event){
  if(event.key === "Enter"){
     let cityOfChoice = searchBar.value;


      getWeather(cityOfChoice)}
  });









//favorites bar
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }


  function saveSearch() {
    var searchTerm = document.getElementById("searchInput").value.trim();
    if (searchTerm === "") {
      alert("Please enter a search term");
      return;
    }
  
    // Retrieve existing favorites from localStorage or initialize an empty array
    var favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  
    // Check if the search term is already in the favorites list
    if (!favorites.includes(searchTerm)) {
      favorites.push(searchTerm);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      displayFavorites();
    } else {
      alert("Search term already exists in favorites");
    }
  }
  
  // Function to display favorites list
  function displayFavorites() {
    var favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    var favoritesList = document.getElementById("favoritesList");
    favoritesList.innerHTML = "";
  
    favorites.forEach(function(searchTerm) {
      var listItem = document.createElement("li");
      listItem.textContent = searchTerm;
      favoritesList.appendChild(listItem);
    });
  }
  
  // Display existing favorites when the page loads
  displayFavorites();


  // getting all required elements
const searchInput = document.querySelector(".inputfield input");
const addBtn = document.querySelector(".inputfield button");
const todoList = document.querySelector(".todoList");
const deleteAllBtn = document.querySelector(".footer button");

// onkeyup event
searchInput.onkeyup = () => {
  let userEnteredValue = searchInput.value; //getting user entered value
  if (userEnteredValue.trim() != 0) {
    //if the user value isn't only spaces
    addBtn.classList.add("active"); //active the add button
  } else {
    addBtn.classList.remove("active"); //unactive the add button
  }
};

showTasks(); //calling showTask function

addBtn.onclick = () => {
  //when user click on plus icon button
  let userEnteredValue = searchInput.value; //getting input field value
  let getLocalStorageData = localStorage.getItem("New Todo"); //getting localstorage
  if (getLocalStorageData == null) {
    //if localstorage has no data
    listArray = []; //create a blank array
  } else {
    listArray = JSON.parse(getLocalStorageData); //transforming json string into a js object
  }
  listArray.push(userEnteredValue); //pushing or adding new value in array
  localStorage.setItem("New Todo", JSON.stringify(listArray)); //transforming js object into a json string
  showTasks(); //calling showTask function
  addBtn.classList.remove("active"); //unactive the add button once the task added
};

function showTasks() {
  let getLocalStorageData = localStorage.getItem("New Todo");
  if (getLocalStorageData == null) {
    listArray = [];
  } else {
    listArray = JSON.parse(getLocalStorageData);
  }
  const pendingTasksNumb = document.querySelector(".pendingTasks");
  pendingTasksNumb.textContent = listArray.length; //passing the array length in pendingtask
  if (listArray.length > 0) {
    //if array length is greater than 0
    deleteAllBtn.classList.add("active"); //active the delete button
  } else {
    deleteAllBtn.classList.remove("active"); //unactive the delete button
  }
  let newLiTag = "";
  listArray.forEach((element, index) => {
    newLiTag += `<li>${element}<span class="icon" onclick="deleteTask(${index})"><i class="fas fa-trash"></i></span></li>`;
  });
  todoList.innerHTML = newLiTag; //adding new li tag inside ul tag
  searchInput.value = ""; //once task added leave the input field blank
}

// delete task function
function deleteTask(index) {
  let getLocalStorageData = localStorage.getItem("New Todo");
  listArray = JSON.parse(getLocalStorageData);
  listArray.splice(index, 1); //delete or remove the li
  localStorage.setItem("New Todo", JSON.stringify(listArray));
  showTasks(); //call the showTasks function
}

// delete all tasks function
deleteAllBtn.onclick = () => {
  listArray = []; //empty the array
  localStorage.setItem("New Todo", JSON.stringify(listArray)); //set the item in localstorage
  showTasks(); //call the showTasks function
};

 