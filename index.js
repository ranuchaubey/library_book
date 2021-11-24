console.log("This is index.js");

//constructor
function Book(name, author, type) {
  this.name = name;
  this.author = author;
  this.type = type;
}

//display constructor
function Display() {

}

//Add method to display prototype
Display.prototype.add = function (book) {
  console.log("Adding to UI");
  tablebody = document.getElementById("tablebody");
  let uiString = `<tr>
                     <td>${book.name}</td>
                     <td>${book.author}</td>
                     <td>${book.type}</td>
                  </tr>`;
  tablebody.innerHTML += uiString;
}
//Implement the clear function
Display.prototype.clear = function () {
  let libraryform = document.getElementById("libraryform");
  libraryform.reset();
};
//Implement the validate function
Display.prototype.validate = function (book) {
  if (book.name.length < 2 || book.author.length < 2) {
    return false;
  } 
  else {
    return true;
  }
}
Display.prototype.show = function (type, displaymessage) {
  let message = document.getElementById("message");
  message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                             <strong>Message:</strong> ${displaymessage}
                             <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>`;
  setTimeout(function () {
    message.innerHTML = "";
  }, 2000);
}

//Add submit event Listener to libraryform
let libraryform = document.getElementById("libraryform");
libraryform.addEventListener("submit", libraryformSubmit);

function libraryformSubmit(e) {
  console.log("You have submitted library form");
  let name = document.getElementById("bookName").value;
  let author = document.getElementById("Author").value;
  let type;

  let fiction = document.getElementById("fiction");
  let programming = document.getElementById("programming");
  let coding = document.getElementById("coding");

  if (fiction.checked) {
    type = fiction.value;
  } 
  else if (programming.checked) {
    type = programming.value;
  }
   else if (coding.checked) {
    type = coding.value;
  }
  let book = new Book(name, author, type);
  console.log(book);
  let display = new Display();
  if (display.validate(book)) {
    display.add(book);
    display.clear();
    display.show("success", " Your book has been successfully added.");
  } 
  else {
    //show error to the user
    display.show("danger", " Sorry you cannot add this book.");
  }

  e.preventDefault();
}
