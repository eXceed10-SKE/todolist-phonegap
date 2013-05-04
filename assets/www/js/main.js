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
	$(".act").on("click",Act);

	$(".com").on("click",Complete);

	$(".alls").on("click",All);

	$(".add").on("click",Add);

});

function Act()
{
	console.log("Active")
	for(var i = 0; i < TODOList.length; i++)
	{
		if(TODOList[i].state == "Active") continue;
		var html = $("<li>" + TODOList[i].name +"</li>");
	}
}

function Complete()
{
	console.log("Complete")
	for(var i = 0; i < TODOList.length; i++)
	{
		if(TODOList[i].state == "Complete") continue;
		var html = $("<label><input type=\"checkbox\" name=\"checkbox-0\" />" + TODOList[i].name +  "</label>");
	}
	
}

function All()
{
	console.log("All")
	for(var i = 0; i < TODOList.length; i++)
	{
		var html = $("<label><input type=\"checkbox\" name=\"checkbox-0\" />" + TODOList[i].name +  "</label>");
		$(".AllTODO").append(html);
	}
}

function Add()
{
	var todo = {name:$("#te").val(), state:"Active"};
	console.log(todo.name)
	TODOList.push(todo);
}