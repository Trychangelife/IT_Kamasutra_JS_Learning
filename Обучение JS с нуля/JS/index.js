var firstNameEl;
var firstNameId;
var lastNameId;
var lastNameEl;
var addresEl;
var addresId;
var citiesId;
var citiesEl;
var textAreaEl;
var textAreaId;
var image
var avatarId = 'avatar-wrapper';
var avatarEl = document.getElementById(avatarId);


textAreaId = 'hobbies';
textAreaEl = document.getElementById(textAreaId);


firstNameId = 'first-name';
firstNameEl = document.getElementById(firstNameId);
addresId = 'address';
addresEl = document.getElementById(addresId);
lastNameId = 'last-name';
lastNameEl = document.getElementById(lastNameId);
citiesId = 'cities';
citiesEl = document.getElementById(citiesId);
//window.alert(citiesEl.value);
//window.alert(textAreaEl.value);
//window.alert(avatarEl.innerHTML);
//window.alert(firstNameEl.value);
//window.alert(firstNameEl.className);
//window.alert(addresEl.value);


firstNameEl.value = 'Evegeniy';
window.alert(lastNameEl.className);
lastNameEl.className = 'error-input';
avatarEl.src = 'https://miro.medium.com/max/1400/0*6e2K0U6ZkN9Ju9iL.jpg';
citiesEl.value = 'Minsk';
textAreaEl.value = 'I have not interest';