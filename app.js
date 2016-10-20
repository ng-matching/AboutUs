var app = angular.module('matchApp', []);

app.controller('initialController', function($scope) {
	$scope.flipFront = function(event){
		$(event.target).parent().find('.front').css({
			'-webkit-transform': "perspective(600px) rotateY(-180deg)",
			'transform': "perspective(600px) rotateY(-180deg)"
		});
		$(event.target).parent().find('.back').css({
			'-webkit-transform': "perspective(600px) rotateY(0deg)",
			'transform': "perspective(600px) rotateY(0deg)"
		});
	};
	$scope.flipBack = function(event){
		$(event.target).parent().find('.front').css({
			'-webkit-transform': "perspective(600px) rotateY(-360deg)",
			'transform': "perspective(600px) rotateY(-360deg)"
		});
		$(event.target).parent().find('.back').css({
			'-webkit-transform': "perspective(600px) rotateY(-180deg)",
			'transform': "perspective(600px) rotateY(-180deg)"
		});
	};

	$scope.cards = [
		{
			content: "Name: Lynyrd Ross Alquiroz Personal Comment:",
			pic: {
				full: 'img/is.jpg'
			}
		},
		{
			content: "Name: Eldrin Bernardino Personal Comment:",
			pic: {
				full: 'img/is.jpg'
			}
		},
		{

			content: "Name: Mark Paul Caneda Personal Comment:",
			pic: {
				full: 'img/is.jpg'
			}
		},
		{

			content: "Name: Chyrine Cortez Personal Comment:",
			pic: {
				full: 'img/is.jpg'
			}
		},
		{

			content: "Name: Rhez Sean Crisostomo Personal Comment:",
			pic: {
				full: 'img/is.jpg'
			}
		},
		{

			content: "Name: Gerald De Guzman Personal Comment:",
			pic: {
				full: 'img/is.jpg'
			}
		},
		{
			content: "Name: Lorenz Florentino Personal Comment:",
			pic: {
				full: 'img/is.jpg'
			}
		},
		{
			content: "Name: Marella Inductivo Personal Comment:",
			pic: {
				full: 'img/is.jpg'
			}
		},
		{
			content: "Name: Cristian Quiza Personal Comment:",
			pic: {
				full: 'img/is.jpg'
			}
		},
		{
			content: "Name: Angela Requinto Personal Comment:",
			pic: {
				full: 'img/is.jpg'
			}
		},
		{
			content: "Name: Allyson Mae Tubtub Personal Comment:",
			pic: {
				full: 'img/is.jpg'
			}
		},
		{
			content: "Special Card =)",
			pic: {
				full: 'img/is.jpg'
			}
		},
	];

	console.log(event.target);
});