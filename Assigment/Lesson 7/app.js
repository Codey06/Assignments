document.querySelector("#b1").addEventListener("click", () => {
  body = document.querySelector("#body")
  row = body.insertRow(body.rows.length)
  cell = row.insertCell(0)

  cell2 = row.insertCell(1)
  cell2.setAttribute("contenteditable", "true")
  cell3 = row.insertCell(2)
  if ("dblclick") {
    cell3.setAttribute("contenteditable", "true")
  }

  cell.innerHTML = body.rows.length
  // cell2.innerHTML = body.rows.length
  // console.log(cell)
})

document.querySelector("#b2").addEventListener("click", () => {
  body = document.querySelector("#body")
  body.deleteRow(body.rows.length - 1)
})

// fm = document.getElementById("fm")
// num = 0
// i = 1

// // fm.addEventListener("click", () => {

// // })
// document.querySelector("#b1").addEventListener("click", () => {
//   // alert("msg")
//   var par = document.createElement("p")
//   var text = document.createTextNode("Number " + ++i + ":")
//   par.appendChild(text)
//   var inp = document.createElement("input")
//   inp.setAttribute("type", "number")
//   txt = "txt" + i
//   inp.setAttribute("name", txt)
//   inp.setAttribute("placeholder", " Enter number " + i + ": ")
//   par.appendChild(inp)
//   fm.appendChild(par)
//   // par.textContent = "msg"
// })
// document.querySelector("#b2").addEventListener("click", () => {
//   num = 0
//   for (i = 0; i < fm.elements.length; i += 1)
//     num += parseInt(fm.elements[i].value)

//   document.querySelector("#dd").innerHTML = `Total is ${num}<br>`
// })

// // document.querySelector("#b3").addEventListener("click", () => {
// //   num = 0
// //   for (i = 0; i < fm.elements.length; i += 1)
// //     if (isNaN((num += parseInt(fm.elements[i].value)))) {
// //       document.querySelector("#dd").innerHTML = `Please enter a number<br>`
// //     } else {
// //       document.querySelector("#dd").innerHTML = `Total is ${num}<br>`
// //       inp.value = ""
// //     }
// // })

// document.querySelector("#b3").addEventListener("click", () => {
//   // par = document.getElementsByTagName("p")
//   // fm.removeChild(par[par.length - 1])
//   // i = par.length
//   // var inp = document.createElement("input")
//   // inp.setAttribute("type", "text")
//   // inp.setAttribute("placeholder", "search data")
//   // inp.setAttribute("name", "textuser")
//   // inp.addEventListener("blur", () => alert(inp.value))
//   // fm.appendChild(inp)
// })
// var slc = document.getElementById("slc").addEventListener("click", (e) => {
//   console.log(e.target)
//   // if (slc.style.display == "block") {
//   //   fm.style.display = "none"
//   // } else {
//   //   slc.style.display = "none"
//   // }
// })
