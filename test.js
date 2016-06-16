var itemButton=document.querySelectorAll('.item-butt');
var popupInner=document.querySelectorAll('.popup-inner');

for (var i = 0;i<itemButton.length; i++) {
	itemButton[i].onclick=function(){
		clearInner(popupInner);
		newStyle(itemButton);
		this.style.borderRight='none';
		this.style.backgroundColor='#d9d2e9';
		document.getElementById(this.dataset.popup).style.display='block';
		}
}	
function clearInner(arr){
	for (var i = 0;i<arr.length; i++) {
		arr[i].style.display='none'
	}
}

function newStyle(arr){
	for (var i = 0;i<arr.length; i++){
		arr[i].style.backgroundColor='#cfe2f3';
		arr[i].style.borderRight='2px solid black';
	}
}	