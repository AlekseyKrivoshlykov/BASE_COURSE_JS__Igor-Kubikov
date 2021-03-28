/*
---------------TASK-1.2---------------
Сделайте в стиле es5, а затем в стиле es6 
(по аналогии из дополнительных видео -> 3 примеры
наследования -> механика наследования),
а) конструктор Post, который принимает параметры 
author, text, date и сохраняет их как свойства объекта. 
Объекты типа Post должны иметь метод edit, который будет 
принимать текст и записывать его в свойство text объекта.
б) конструктор AttachedPost, который принимает параметры 
author, text, date. Проинициализируйте эти свойства с
помощью конструктора Post, чтобы не дублировать код. 
Также в конструкторе AttachedPost должно создаваться
свойство highlighted со значением false. Унаследуйте в 
объектах типа AttachedPost методы из Post.
Объекты типа AttachedPost должны иметь метод makeTextHighlighted, 
который будет назначать свойству highlighted значение true.
*/

'use strict';

// ---------------ES5---------------

function Post (author, text, date) {
	this.author = author;
	this.text = text;
	this.date = date;
}

Post.prototype.edit = function (text) {
	this.text = text;
}

function AttachedPost (author, text, date) {
	Post.call(this, author, text, date);
	this.highlighted = false;
}

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;

AttachedPost.prototype.makeTextHighlighted = function () {
	this.highlighted = true;
}

const post1 = new Post ('Emma', 'i hate you', '25-12-2020');
post1.edit('i joke');
console.log(post1);

const attachedPost1 = new AttachedPost ('Sofiya', 'how r u', '24-03-2021');
attachedPost1.edit('im glad');
attachedPost1.makeTextHighlighted();
console.log(attachedPost1);

// ---------------ES6---------------

class Post {
	constructor(author, text, date) {
		this.author = author;
		this.text = text;
		this.date = date;
	}

	edit(text) {
		this.text = text;
	}
}

class AttachedPost extends Post {
	constructor(author, text, date) {
		super(author, text, date);
		this.highlighted = false;
	}

	makeTextHighlighted () {
		this.highlighted = true;
	}
}

const post2 = new Post ('Jhon', 'killa bez', '22-11-2020');
post2.edit('im sleep');
console.log(post2);

const attachedPost2 = new AttachedPost ('Keanu', 'im neo', '31-12-2020');
attachedPost2.edit('oops im Valentin');
attachedPost2.makeTextHighlighted();
console.log(attachedPost2);
