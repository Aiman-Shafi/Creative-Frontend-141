// console.log("test");

// Get all variables
const studentName = document.getElementById("name");
const courseName = document.getElementById("course");
const coursePrice = document.getElementById("price");
const addStudent = document.getElementById("add-student");
const studentList = document.getElementById("student-list");

addStudent.addEventListener("click", (e) => {
  e.preventDefault();
  //   console.log(studentName.value);
  //   console.log(courseName.value);
  //   console.log(coursePrice.value);

  if (
    studentName.value == "" ||
    courseName.value == "" ||
    coursePrice.value == ""
  ) {
    alert("Fill all the fields");
  } else {
    // //   creating a row
    // const newRow = document.createElement("tr");

    // // creating table data for student name
    // const newStudentName = document.createElement("td");
    // newStudentName.innerHTML = studentName.value;
    // newRow.appendChild(newStudentName);

    // // creating table data for course name
    // const newCourseName = document.createElement("td");
    // newCourseName.innerHTML = courseName.value;
    // newRow.appendChild(newCourseName);

    // // creating table data for course price
    // const newCoursePrice = document.createElement("td");
    // newCoursePrice.innerHTML = "TK " + coursePrice.value;
    // newRow.appendChild(newCoursePrice);

    // // creating a delete button for each field
    // const deleteField = document.createElement("td");
    // newRow.appendChild(deleteField);

    // const deleteBtn = document.createElement("button");
    // deleteBtn.innerHTML = "Delete Item";
    // deleteBtn.classList.add("btn");
    // deleteBtn.classList.add("btn-danger");
    // deleteBtn.classList.add("delete");
    // deleteField.appendChild(deleteBtn);

    // studentList.appendChild(newRow);

    let html = `
    <tr>
        <td>${studentName.value}</td>
        <td>${courseName.value}</td>
        <td>${coursePrice.value}</td>
        <td><button class="btn btn-danger delete">Delete Item</button></td>
    </tr>
    `;

    studentList.innerHTML += html;

    studentName.value = "";
    courseName.value = "";
    coursePrice.value = "1234";

    let deleteItems = document.querySelectorAll(".delete");
    console.log(deleteItems);

    // deleteItems.forEach((button) => {
    //   console.log(button);
    //   button.addEventListener("click", (e) => {
    //     // console.log(e.target.parentElement.parentElement);
    //     e.target.parentElement.parentElement.remove();
    //   });
    // });

    for (const btn of deleteItems) {
      btn.addEventListener("click", (e) => {
        // console.log(e.target.parentElement.parentElement);
        e.target.parentElement.parentElement.remove();
      });
    }
  }
});

// let arr = [34, "apple", 45, "kiwi", "banana", 23];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// for (const item of arr) {
//   console.log(item);
// }

// arr.forEach((item) => {
//   console.log(item);
// });
