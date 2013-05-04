var app = {
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    receivedEvent: function(id) {
        console.log('asdas')
    }
};

var TODOList = []


$(document).ready(function(){

	$(".act").on("click",Act());

	$(".com").on("click",Complete());

	$(".alls").on("click",All());

	$(".add").on("click",Add());

});

function Act()
{
	for(var i = 0; i < TODOList.length; i++)
	{
		if(TODOList[i].state == "Active") continue;
		var html = $("<li>" + TODOList[i].name +"</li>");
	}
}

function Complete()
{
	for(var i = 0; i < TODOList.length; i++)
	{
		if(TODOList[i].state == "Complete") continue;
		var html = $("<li>" + TODOList[i].name +"</li>");
	}
	
}

function All()
{
	for(var i = 0; i < TODOList.length; i++)
	{
		var html = $("<li>" + TODOList[i].name +"</li>");
	}
}

function Add()
{
	var todo = {name:$(".add").text(), state:"Active"};
	TODOList.push(todo);
}