$(document).ready(function(){

	$('#mainContent').load('pages/main.html');

	$('#homeLink').on("click", function(){
		$('#mainContent').load('pages/main.html');
	});


	$('#descriptionLink').on("click", function(){
		$('#mainContent').load('pages/description.html');
		$('div li').removeClass('active')
		$( "li[name='desc']" ).toggleClass('active');
	});

	$('#introLink').on("click", function(){
		$('#mainContent').load('pages/introduction.html');
		$('div li').removeClass('active');
		$( "li[name='intro']" ).toggleClass('active');
	});
		
	$('#bgLink').on("click", function(){
		$('#mainContent').load('pages/background.html');
		$('div li').removeClass('active');
		$( "li[name='bg']" ).toggleClass('active');
	});

	$('#consLink').on("click", function(){
		$('#mainContent').load('pages/considerations.html');
		$('div li').removeClass('active');
		$( "li[name='cons']" ).toggleClass('active');
	});

	
	$('#specsLink').on("click", function(){
		$('#mainContent').load('pages/specifications.html');
		$('div li').removeClass('active');
		$( "li[name='specs']" ).toggleClass('active');
	});

	$('#schedLink').on("click", function(){
		$('#mainContent').load('pages/schedule.html');
		$('div li').removeClass('active');
		$( "li[name='sched']" ).toggleClass('active');
	});

	$('#resultsLink').on("click", function(){
		$('#mainContent').load('pages/results.html');
		$('div li').removeClass('active');
		$( "li[name='results']" ).toggleClass('active');
	});

	$('#discussionLink').on("click", function(){
		$('#mainContent').load('pages/discussion.html');
		$('div li').removeClass('active');
		$( "li[name='disc']" ).toggleClass('active');
	});

	$('#teamLink').on("click", function(){
		$('#mainContent').load('pages/team.html');
		$('div li').removeClass('active');
		$( "li[name='team']" ).toggleClass('active');
	});
	
});
