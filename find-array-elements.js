// find-array-elements Using Loop
let userList = ["Hammad", "Sadi", "Zakiya", "Minhaj", "Robi", "Mohaomin"];

// let targetElement = "Akkas";
// let elementId = -1;
// for (let i = 0; i < userList.length; i++) {
//   if (userList[i] === targetElement) {
//     elementId = i;
//   }
// }
// if (elementId > -1) {
//   console.log("Yes Founded Your Target Element:-", userList[elementId]);
// } else {
//   console.log("Not Fond");
// }

// Or
let targetElement = "Robi";
let elementId = -1;
for (let i = 0; i < userList.length; i++) {
  let getElement = userList[i];
  if (getElement === targetElement) {
    elementId = i;
  }
}
if (elementId > -1) {
  console.log("Yes Founded Your Target Element:-", userList[elementId]);
} else {
  console.log("Not Fond");
}
