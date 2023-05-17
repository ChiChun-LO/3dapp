// JavaScript Document
var counter = 0;
$(document).ready(function() {
	
	selectPage();
	
});

function selectPage() {

	$('#home').show();
	$('#models').hide();
	$('#interaction').hide();
	$('#cokeDescription').hide();
	$('#fantaDescription').hide(); 
	$('#pepperDescription').hide(); 


	$('#navHome').click(function(){
		$('#home').show();
		$('#models').hide();
		$('#interaction').hide();
		$('#cokeDescription').hide();
		$('#fantaDescription').hide(); 
		$('#pepperDescription').hide(); 	  
	});

	$('#navModels').click(function(){
		$('#home').hide();
		$('#models').show();
		$('#interaction').show(); 
		$('#cokeDescription').show();
		$('#fantaDescription').hide(); 
		$('#pepperDescription').hide();
		$("#x3dModelTitle_coke").show();
		$("#x3dModelTitle_fanta").hide();
		$("#x3dModelTitle_pepper").hide();
		$("#x3dCreationMethod_coke").show();
		$("#x3dCreationMethod_fanta").hide();
		$("#x3dCreationMethod_pepper").hide(); 
	});
}


function cokeDescription() {
	$("button").click(function(){
		
		$("#cokeDescription").show();
        	$("#fantaDescription").hide();
		$("#pepperDescription").hide();
		
		$("#x3dModelTitle_coke").show();
		$("#x3dModelTitle_fanta").hide();
		$("#x3dModelTitle_pepper").hide();

		$("#x3dCreationMethod_coke").show();
		$("#x3dCreationMethod_fanta").hide();
		$("#x3dCreationMethod_pepper").hide();

    }); 
}

function fantaDescription() {
	$("button").click(function(){

        	$("#cokeDescription").hide();
        	$("#fantaDescription").show();
		$("#pepperDescription").hide();
		
		$("#x3dModelTitle_coke").hide();
		$("#x3dModelTitle_fanta").show();
		$("#x3dModelTitle_pepper").hide();

		$("#x3dCreationMethod_coke").hide();
		$("#x3dCreationMethod_fanta").show();
		$("#x3dCreationMethod_pepper").hide();
    }); 
}

function pepperDescription() {
	$("button").click(function(){

        	$("#cokeDescription").hide();
        	$("#fantaDescription").hide();
		$("#pepperDescription").show();
		
		$("#x3dModelTitle_coke").hide();
		$("#x3dModelTitle_fanta").hide();
		$("#x3dModelTitle_pepper").show();

		$("#x3dCreationMethod_coke").hide();
		$("#x3dCreationMethod_fanta").hide();
		$("#x3dCreationMethod_pepper").show();
    }); 
}

function changeLook() {
	counter += 1;
	switch (counter) {
		case 1:
			document.getElementById('bodyColor').style.backgroundColor = 'lightblue';
			document.getElementById('headerColor').style.backgroundColor = '#FF0000';
			document.getElementById('footerColor').style.backgroundColor = '#FF9900';
			break;
		case 2:
			document.getElementById('bodyColor').style.backgroundColor = '#FF6600';
			document.getElementById('headerClor').style.backgroundColor = '#FF9999';
			document.getElementById('footerColor').style.backgroundColor = '#996699';
			break;
		case 3:
			document.getElementById('bodyColor').style.backgroundColor = 'coral';
			document.getElementById('headerColor').style.backgroundColor = 'darkcyan';
			document.getElementById('footerColor').style.backgroundColor = 'darksalmom';
			break;
		case 4:
			counter = 0;
			document.getElementById('bodyColor').style.backgroundColor = 'lightgrey';
			document.getElementById('headerColor').style.backgroundColor = 'chocolate';
			document.getElementById('footerColor').style.backgroundColor = 'dimgrey';
			break;
	}
}

function changeBack() {
	document.getElementById('bodyColor').style.backgroundColor = '#FFFFFF';
	document.getElementById('headerColor').style.backgroundColor = 'rgba(175,0,0,1)';
	document.getElementById('footerColor').style.backgroundColor = 'rgba(175,0,0,1)';
}