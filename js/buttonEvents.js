
$('#portfolio-modal-4').on('shown.bs.modal', function (event) 
{
  $('#centipede-modal-button').trigger("click");
});

$('#centipede-modal-button').on("click", function() 
{
	window.open("centipede.html");
});
		