var listType=prompt("Введите '1'-текстовое поле, '2'-кнопка, '3'- радио.");
var a=prompt("Введите количество тегов");
for (var i=0;i<a;i++)//цыкл в котором я буду вычислять колличество 
if (listType=='1')
	document.write('<input type="text">');
else for (var i=0;i<a;i++)//цыкл в котором я буду вычислять колличество 
	if (listType=='2')
		document.write('<input type="button">');
	else for (var i=0;i<a;i++)//цыкл в котором я буду вычислять колличество 
	if (listType=='3')
		document.write('<input type="radio">');