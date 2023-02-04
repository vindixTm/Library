const myLibrary = [];
const popupForm = document.querySelector(".popup");
const cancel = document.querySelector(".cancel");
const newBook = document.querySelector(".newBook");
const newBookForm = document.querySelector("#newBookForm");
const display = document.querySelector(".bookDisplay");

function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
  this.info = function () {
    // console.log(title, "by ", author, ", ", pages, ", ", status);
  };
}

function activate() {
  popupForm.classList.add("active");
}
function deactivate() {
  popupForm.classList.remove("active");
  if (myLibrary.length > 0) {
    newBook.classList.add("newBookTab");
    display.classList.add("filled");
  }
}
function addBookToLibrary(form) {
  const formData = new FormData(form);
  const formValues = Object.fromEntries(formData);

  if (myLibrary.length === 0) {
    myLibrary[0] = new Book(
      formValues.title,
      formValues.author,
      formValues.pages,
      formValues.status
    );

    const divTab = document.createElement("div");
    divTab.classList.add("booktab");
    const tabTopSec = document.createElement("div");
    tabTopSec.classList.add("tabTopSec");
    const tabBottomSec = document.createElement("div");
    tabBottomSec.classList.add("tabBottomSec");

    const tabauthorLabel = document.createElement("div");
    const tabauthor = document.createElement("div");
    tabauthor.classList.add("tabauthor");
    const tabpagesLabel = document.createElement("div");
    const tabpages = document.createElement("div");
    tabpages.classList.add("tabpages");
    const tabstatusLabel = document.createElement("div");
    const tabstatus = document.createElement("div");
    tabstatus.classList.add("tabstatus");
    const tabEmptyDiv = document.createElement("div");
    const tabdelete = document.createElement("div");
    tabdelete.classList.add("tabdelete");
    const tabstatusCheckBox = document.createElement("input");
    tabstatusCheckBox.type = "checkbox";
    const deleteIcon = document.createElement("img");
    deleteIcon.src = "icons/delete.svg";
    deleteIcon.classList.add("delete");
    deleteIcon.addEventListener("click", () => {
      display.removeChild(divTab);
      myLibrary.splice(0, 1);
    });

    display.appendChild(divTab);
    divTab.appendChild(tabTopSec);
    divTab.appendChild(tabBottomSec);
    tabBottomSec.appendChild(tabauthorLabel);
    tabBottomSec.appendChild(tabauthor);
    tabBottomSec.appendChild(tabpagesLabel);
    tabBottomSec.appendChild(tabpages);
    tabBottomSec.appendChild(tabstatusLabel);
    tabBottomSec.appendChild(tabstatus);
    tabBottomSec.appendChild(tabEmptyDiv);
    tabBottomSec.appendChild(tabdelete);
    tabdelete.appendChild(deleteIcon);
    tabstatus.appendChild(tabstatusCheckBox);

    tabauthorLabel.textContent = "author";
    tabpagesLabel.textContent = "pages";
    tabstatusLabel.textContent = "read";
    tabTopSec.textContent = myLibrary[0].title;
    tabauthor.textContent = `: ${myLibrary[0].author}`;
    tabpages.textContent = `: ${myLibrary[0].pages}`;

    if (myLibrary[0].status === "on") {
      tabstatusCheckBox.checked = true;
    }
  } else {
    myLibrary[myLibrary.length] = new Book(
      formValues.title,
      formValues.author,
      formValues.pages,
      formValues.status
    );
    const divTab = document.createElement("div");
    divTab.classList.add("booktab");
    const tabTopSec = document.createElement("div");
    tabTopSec.classList.add("tabTopSec");
    const tabBottomSec = document.createElement("div");
    tabBottomSec.classList.add("tabBottomSec");

    const tabauthorLabel = document.createElement("div");
    const tabauthor = document.createElement("div");
    tabauthor.classList.add("tabauthor");
    const tabpagesLabel = document.createElement("div");
    const tabpages = document.createElement("div");
    tabpages.classList.add("tabpages");
    const tabstatusLabel = document.createElement("div");
    const tabstatus = document.createElement("div");
    tabstatus.classList.add("tabstatus");
    const tabEmptyDiv = document.createElement("div");
    const tabdelete = document.createElement("div");
    tabdelete.classList.add("tabdelete");
    const tabstatusCheckBox = document.createElement("input");
    tabstatusCheckBox.type = "checkbox";
    const deleteIcon = document.createElement("img");
    deleteIcon.src = "icons/delete.svg";
    deleteIcon.classList.add("delete");
    deleteIcon.addEventListener("click", () => {
      display.removeChild(divTab);
      myLibrary.splice(0, 1);
    });

    display.appendChild(divTab);
    divTab.appendChild(tabTopSec);
    divTab.appendChild(tabBottomSec);
    tabBottomSec.appendChild(tabauthorLabel);
    tabBottomSec.appendChild(tabauthor);
    tabBottomSec.appendChild(tabpagesLabel);
    tabBottomSec.appendChild(tabpages);
    tabBottomSec.appendChild(tabstatusLabel);
    tabBottomSec.appendChild(tabstatus);
    tabBottomSec.appendChild(tabEmptyDiv);
    tabBottomSec.appendChild(tabdelete);
    tabdelete.appendChild(deleteIcon);
    tabstatus.appendChild(tabstatusCheckBox);

    tabauthorLabel.textContent = "author";
    tabpagesLabel.textContent = "pages";
    tabstatusLabel.textContent = "read";
    tabTopSec.textContent = myLibrary[myLibrary.length - 1].title;
    tabauthor.textContent = `: ${myLibrary[myLibrary.length - 1].author}`;
    tabpages.textContent = `: ${myLibrary[myLibrary.length - 1].pages}`;

    if (myLibrary[myLibrary.length - 1].status === "on") {
      tabstatusCheckBox.checked = true;
    }
  }

  // console.log(myLibrary);
  newBookForm.reset();
}

if (newBook) {
  newBook.addEventListener("click", activate, false);
}
if (cancel) {
  cancel.addEventListener("click", deactivate, false);
}
if (newBookForm) {
  newBookForm.addEventListener("submit", (e) => {
    e.preventDefault();
    addBookToLibrary(e.target);
  });
}
