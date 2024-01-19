function generateSubjectTable() {
  var gradeSelect = document.getElementById("gradeSelect")
  var selectedGrade = gradeSelect.value

  var numberOfSubjectsInput = document.getElementById("numberOfSubjects")
  var numberOfSubjects = parseInt(numberOfSubjectsInput.value)

  // Check if the input is a valid number
  if (isNaN(numberOfSubjects) || numberOfSubjects <= 0) {
    alert("Please enter a valid number of subjects.")
    return
  }

  var tableContainer = document.getElementById("tableContainer")

  // Clear previous content
  tableContainer.innerHTML = ""

  // Generate table for the selected grade
  var table = createSubjectTable(selectedGrade, numberOfSubjects)
  tableContainer.appendChild(table)

  // Adjust cell and input width based on the number of subjects
  adjustCellWidth(numberOfSubjects)
}

function createSubjectTable(selectedGrade, numberOfSubjects) {
  var table = document.createElement("table")
  table.className = "subjectTable"

  var tableHead = document.createElement("thead")
  var headRow = document.createElement("tr")
  headRow.innerHTML = `<th>ID</th><th>Student Name</th>`

  // Add Subject headers
  for (var i = 1; i <= numberOfSubjects; i++) {
    headRow.innerHTML += `<th>Subject ${i}</th>`
  }

  headRow.innerHTML += `<th>Total</th><th>Average</th>`

  tableHead.appendChild(headRow)

  var tableBody = document.createElement("tbody")

  // Create a row for the subjects
  var subjectsRow = createSubjectsRow(selectedGrade, numberOfSubjects)
  tableBody.appendChild(subjectsRow)

  table.appendChild(tableHead)
  table.appendChild(tableBody)

  return table
}
function createSubjectsRow(selectedGrade, numberOfSubjects) {
  var newRow = document.createElement("tr")
  var idCell = document.createElement("td")

  // Set ID cell
  idCell.textContent = "1" // You can adjust this based on your requirements
  newRow.appendChild(idCell)

  // Create Student Name cell
  var studentNameCell = document.createElement("td")
  var subjectNameInput = document.createElement("input")
  subjectNameInput.type = "text"
  subjectNameInput.placeholder = "Enter Student Name"
  studentNameCell.appendChild(subjectNameInput)

  // Append the Student Name cell to the row
  newRow.appendChild(studentNameCell)

  // Create cells for each subject marks
  for (var i = 1; i <= numberOfSubjects; i++) {
    var marksInput = document.createElement("input")
    marksInput.type = "number"
    marksInput.placeholder = `Enter Marks for Subject ${i}`
    marksInput.addEventListener("input", function () {
      updateTotalAndAverage(newRow)
    })

    var marksCell = document.createElement("td")
    marksCell.appendChild(marksInput)
    newRow.appendChild(marksCell)
  }

  // Add cells for total and average
  var totalCell = document.createElement("td")
  totalCell.textContent = "0" // Default value

  var averageCell = document.createElement("td")
  averageCell.textContent = "0.00" // Default value

  newRow.appendChild(totalCell)
  newRow.appendChild(averageCell)

  return newRow
}

function updateTotalAndAverage(row) {
  var marksInputs = row.querySelectorAll("input[type='number']")
  var totalCell = row.querySelector("td:nth-last-child(2)")
  var averageCell = row.querySelector("td:last-child")

  var total = 0
  var count = 0

  marksInputs.forEach(function (marksInput) {
    var marksValue = parseInt(marksInput.value)

    if (!isNaN(marksValue)) {
      total += marksValue
      count++
    }
  })

  var average = count > 0 ? total / count : 0

  totalCell.textContent = total.toFixed(2)
  averageCell.textContent = average.toFixed(2)
}

function adjustCellWidth(numberOfSubjects) {
  var table = document.querySelector(".subjectTable")

  if (!table) {
    return
  }

  var rows = table.querySelectorAll("tbody tr")
  if (!rows || rows.length === 0) {
    return
  }

  var totalCells = rows[0].querySelectorAll("th, td")

  totalCells.forEach(function (cell) {
    cell.style.width = "auto"
  })

  totalCells.forEach(function (cell) {
    var maxWidth = 0
    rows.forEach(function (row) {
      var contentWidth = row
        .querySelector("th, td")
        .getBoundingClientRect().width
      maxWidth = Math.max(maxWidth, contentWidth)
    })
    cell.style.width = maxWidth + "px"
  })
}
