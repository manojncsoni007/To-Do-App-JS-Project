 showNotes();

 const addBtn = document.querySelector('#addBtn');
 addBtn.addEventListener('click', function(e) {
     // console.log('btn clicked');

     let addTxt = document.querySelector('#addTxt');
     const inputName = addTxt.value;
     // console.log(addTxt.value);

     let notes = localStorage.getItem('notes');
     if (notes == null) {
         notesObj = [];
     } else {
         notesObj = JSON.parse(notes);
     }

     if (inputName.length === 0) {
         console.log('error');
     } else {
         notesObj.push(inputName);
         localStorage.setItem('notes', JSON.stringify(notesObj));
         showNotes();
     }

     addTxt.value = " ";

 });

 function showNotes() {
     let notes = localStorage.getItem('notes');
     if (notes == null) {
         notesObj = [];
     } else {
         notesObj = JSON.parse(notes);
     }

     let html = '';
     notesObj.forEach((element, index) => {

         html += `<div class="item-list my-3">
                             <div class="item">
                                <h5 class="item-name text-capitalize">${element}</h5>
                                <div class="item-icons">
                                  <button  id='${index}' onclick='deleteNotes(this.id)' class="btn btn-warning text-capitalize" type="submit">Delete</button>
                                 </div>
                              </div>
                         </div> `;

     });

     let itemContainer = document.querySelector('#id-Contain');

     if (notesObj.length == null) {
         itemContainer.innerHTML = 'No Notes Available, Please Add'
     } else {
         itemContainer.innerHTML = html;
     }
 }

 function deleteNotes(index) {
     let notes = localStorage.getItem('notes');
     if (notes == null) {
         notesObj = []
     } else {
         notesObj = JSON.parse(notes);
     }

     notesObj.splice(index, 1);
     localStorage.setItem('notes', JSON.stringify(notesObj));
     showNotes();
 }