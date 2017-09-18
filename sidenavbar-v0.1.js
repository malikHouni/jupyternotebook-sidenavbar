$(function(){

var createsideNavBar=function(){
    //nl, meaning that if theres already a div sidenavbar, then we don't add a new one
    if($("[id=sidenavbar]").length < 1) {
        $('body').append('<div id="sidenavbar"></div>');
        $('#sidenavbar').attr('style','opacity: 0.6;width:7em;position: absolute;left: 0px;top: 150px;background:#3498db;border:1px solid black;border-radius:0 5px 5px 0');
        $('#sidenavbar').append('<button id="reloadSideNavBar">&#8634;</button>')
        $('#sidenavbar').append('<button id="toggle"><-</button>')
        $('#sidenavbar').append('<br /><div id="sidenavbarContent"></div>')
    }
	
};

var getTitleContent= function(){
   var getAllH1 = $("h1");
	for(elem in getAllH1){
		if(isNaN(elem) == false){
			$(getAllH1[elem]).attr('Name',$(getAllH1[elem]).attr('id'));
			$("#sidenavbarContent").append('<li style="color:#FFF;opacity: 1;font-weight: bold;font-size:0.5em"><a style="font-weight: bold;color:#FFF;opacity: 1; font-size:0.5em;" href="#'+$(getAllH1[elem]).attr('id')+'">'+$(getAllH1[elem]).attr('id')+'</a></li>');
		};
	};
    //nl, reload sideNavBar
    $('#reloadSideNavBar').click(function () {
            $('#sidenavbar').html('')
            $('#sidenavbar').append('<button id="reloadSideNavBar" class=".btn-info">&#8634;</button>')
            $('#sidenavbar').append('<button id="toggle" class=".btn-info"><-</button>')
            $('#sidenavbar').append('<br /><div id="sidenavbarContent"></div>')
            getTitleContent();
    });
    $("#toggle").click(function () {
        $('#sidenavbarContent').slideToggle();
    });

};


//2nl,first init, before any realoading...
createsideNavBar();
getTitleContent();

});
//$('#sidenavbar').html('');
//$('#sidenavbar').remove();
