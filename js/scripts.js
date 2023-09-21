
function newItem(){

  // adding new element
  let li = $('<li></li>');
  let inputValue= $('#input').val();
  li.append(inputValue);

if(inputValue === ''){
  alert('You must write something before clicking Add button.')
}else{
  let list = $('#list');
  list.append(li);
}

// added function of strike out the list of items
function crossOut(){
  li.toggleClass('strike');
}
li.on('dblclick',crossOut);

// adding delete button "X"

let crossOutButton = $('<button></button>');
crossOutButton.append(document.createTextNode('X'));
li.append(crossOutButton);

crossOutButton.on('click', deleteListItem);

// adding class as 'delete' in the list 

function deleteListItem(){
  li.addClass('delete');
}

// reordering the items
$('#list').sortable();

}















































// =============================== Vanilla Js ====================================

// function newItem(){
//     let li = document.createElement("li");
//     let inputValue = document.getElementById("input").value;
//     let text = document.createTextNode(inputValue);
//     li.appendChild(text);

//     if(inputValue === ''){
//         alert('You must write something')
//     }else{
//         let list= document.querySelector('#list');
//         list.appendChild(li);
//     }

//     function crossOut(){
//         li.classList.toggle('strike');

//     }
//     li.addEventListener('dblclick', crossOut);

//     // adding delete button 'X'
//     let crossOutButton = document.createElement('button');
//     crossOutButton.appendChild(document.createTextNode('X'));
//     li.appendChild(crossOutButton);

//     crossOutButton.addEventListener('click', deleteListItem);

//     // adding class as 'delete' in the list of item
//     function deleteListItem(){
//         li.classList.add('delete');
//     }

//     // 4. Reordering the items: 
//   $('#list').sortable();


// }