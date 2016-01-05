angular.module("courseTest", ['ngAnimate'])
	.controller("testController", function(){
		var dirList = this;

		dirList.toggle = false;

		dirList.myList = [
			{name:'Cesar',age:27,img:'/img/user2.jpg'},
			{name:'Sofia',age:16,img:'/img/user3.jpg'},
			{name:'Silvia',age:51,img:'/img/user3.jpg'},
			{name:'Ruben',age:52,img:'/img/user1.jpg'},
			{name:'Norma',age:36,img:'/img/user3.jpg'},
			{name:'Sergio',age:32,img:'/img/user5.jpg'}
		];
		dirList.addPerson = function(){
			dirList.myList.push({name: dirList.name, age: dirList.age});
			dirList.name='';
			dirList.age=0;
		}
	});