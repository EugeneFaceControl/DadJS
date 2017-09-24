function scrollToTheBottom (callBack) {
	window.scrollTo(0,document.body.scrollHeight);
	callBack();
}
var para = null;

scrollToTheBottom(function () {
	// Создаем новую ноду
	var para = document.createElement("div");
	var node = document.createTextNode("New");
	para.appendChild(node);
	var element = document.getElementById("body");
	element.appendChild(para);

// Создаем айди
var att = document.createAttribute("id");
att.value = "insert";
para.setAttributeNode(att)

	// Все товары
	var products = $$(".products_card")

	// Название
	// var name = products[0].getElementsByClassName("fancy_ajax")[0].text
	// Цена
	// var price = products[0].getElementsByClassName("price")[0].outerText
	para.innerHTML += "<br>"
	for (var i = 0; i < products.length; i++){
		var name = products[i].getElementsByClassName("fancy_ajax")[0].text;
		var price = products[i].getElementsByClassName("price")[0].outerText;
		para.innerHTML += (name + ":<br>" + price + "<br>");
	}

	window.prompt("Copy to clipboard: Ctrl+C, Enter", para.innerText);

});