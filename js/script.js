let groceryList = document.getElementsByClassName('groceryList')[0];
let addItem = document.getElementById('addItem');
let item = document.getElementById('item');
let clearList = document.getElementById('clearList');

addItem.addEventListener('click', e => {
	if (item.value && item.value.trim() !== '') {
		groceryList.children.length % 2
			? groceryList.innerHTML += `<li style="background-color: #fff">${item.value}</li>`
			: groceryList.innerHTML += `<li style="background-color: #fafafa">${item.value}</li>`;
	}
	item.value = '';
})

clearList.addEventListener('click', e => {
	groceryList.innerHTML = '';
})

groceryList.addEventListener('click', e => {
	if(e.target.closest('li')) {
		e.target.style.textDecoration === "line-through"
			? e.target.style.textDecoration = 'none'
			: e.target.style.textDecoration = 'line-through';
	}
})