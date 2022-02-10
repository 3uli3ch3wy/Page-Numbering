//reference from: https://www.youtube.com/watch?v=IqYiVHrO2U8


//define array and number of contacts/pages that will list 10 at a time
const profilesArray = [];
const numOfContacts = profilesArray.length;
var currentPage = 1;
var PerPage = 10;
const pageElement = document.getElementById('pagination');

//to list out 54  in the array
function contactListElement() {
    for (var i = 0; i < 54; i++) {
        profilesArray.push('<li class="contact-item cf">');
    }
}
 
//to show 10 contacts per page
function loadList (items, wrapper, contactsPerPage, page) {
	wrapper.innerHTML = "";
	page--;

	var startPage = contactsPerPage * page;
	var endPage = startPage + contactsPerPage;
	var paginatedItems = items.slice(startPage, endPage);

	for (var i = 0; i < paginatedItems.length; i++) {
		var item = paginatedItems[i];

		var itemElement = document.createElement('div');
		itemElement.classList.add('contact-item');
		itemElement.innerText = item;
		
		wrapper.appendChild(itemElement);
	}
}

//to create pagination
function createPagination (items, wrapper, contactsPerPage) {
	wrapper.innerHTML = "";

	var totalPages = Math.ceil(numOfContacts / contactsPerPage);
	for (var i = 1; i < totalPages + 1; i++) {
		var btn = pageButtons(i, items);
		wrapper.appendChild(btn);
	}
}

//to create page buttons according to number of contacts
function pageButtons (page, items) {
	var button = document.createElement('a');
	button.innerText = page;

	if (currentPage == page) button.classList.add('active');

	button.addEventListener('click', function () {
		currentPage = page;
		loadList(items, numOfContacts, PerPage, currentPage);

		var currButton = document.querySelector('.pagination li a.active');
		currButton.classList.remove('active');

		button.classList.add('active');
	});

	return button;
}

loadList(profilesArray, numOfContacts, PerPage, currentPage);
createPagination(profilesArray, pageElement, PerPage);