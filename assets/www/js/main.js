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
	
}

function Complete()
{

}

function All()
{

}

function Add()
{
	var todo = {name:$(".add").text(), state:"Active"};
	TODOList.push(todo);
}