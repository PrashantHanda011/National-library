console.log("hello abbaies")

//book constructor
function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}

function Display() {

};

Display.prototype.add = function (book) {
    console.log("hell")
    tablebody = document.getElementById('tablebody');
    let str = `
    <tr>  
    <td>${book.name}</td>
    <td>${book.author}</td>
    <td>${book.type}</td>
  </tr>`;
    tablebody.innerHTML += str;
    
}
Display.prototype.clear = function () {

    let form = document.getElementById("libraryform")
    libraryform.reset();

}
Display.prototype.validate = function (book) {
    if (book.name.length < 3 || book.name.length < 3 ){
        return false;
    }
    else{
        return true
    }
    
}
Display.prototype.show = function (type,message) {
    let messageb = document.getElementById('messageb');
    messageb.innerHTML = `<div id = "aler" class="alert alert-${type} role="alert">
    ${message}
  </div>`
//   setTimeout(function () {messageb.innerHTML=''
      
//   }, 2000);
    
}



let form = document.getElementById("libraryform")

form.addEventListener('submit', libform);

function libform(e) {

    let name = document.getElementById('bookn').value;
    let author = document.getElementById('authorn').value;

    let type;

    let comic = document.getElementById('comic')
    let fiction = document.getElementById('fiction')
    let biography = document.getElementById('biography')
    let horror = document.getElementById('horror')

    if (comic.checked) {
        type = comic.value;
    }
    else if (fiction.checked) {
        type = fiction.value;
    }
    else if (biography.checked) {
        type = biography.value;
    }
    else if (horror.checked) {
        type = horror.value;
    }
    let book = new Book(name, author, type);
    console.log(book);

    let display = new Display();

    if (display.validate(book)) {
       
        display.add(book);
        display.clear();
        display.show('success', 'Your Book has been added succecfully')
    }
    else {
        display.show('dark', 'Your Book has not been added ')
    }

    console.log("hello world")
    e.preventDefault();


}
