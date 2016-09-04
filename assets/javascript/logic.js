$(document).ready(function(){



////FRONT END JS////////
	$(window).scroll(function(){

		$("#heading").css({"opacity" : 1-(($(this).scrollTop())/300)

		
		});

		$("#title").css({"opacity" : 1-(($(this).scrollTop())/300)
			
			
		});



	});


$(document).on("scroll", function() {

	if ($(document).scrollTop() > 600){
		$("#menu").fadeIn();
		$("#menu").removeClass("hide");
		$("#menu").addClass("show");

	}

	else {

		$("#menu").removeClass("show");
		$("#menu").addClass("hide");

	}


});	

//dropdown

$("#dropDown").hide();

$("#menu").on("click", function(){
	$("#dropDown").toggleClass("show");
});
//////END FRONT END JS///////

//clears search box content//

	$(".clearText").on("click", function() {
		$("#theme-form input").val("");
	});


// Toggle display of media div so that it's 20% at default,
//	but expands to 60% and displays video players on 'Videos' click
	$('body').on('click', '#videos', function() {
		console.log("video click event listener is working");

		if (document.getElementById('media').style.height == '20%') {
			document.getElementById('media').style.height = '80%';
			document.getElementById('videoContainer').style.display = 'block'; 
			console.log("Amazing what you'll find");
		} else {
			document.getElementById('media').style.height = '20%';
			document.getElementById('videoContainer').style.display = 'none'; 
			console.log("face to face");
		}
	});


//////// YouTube API ////////

/* YouTube API Key
AIzaSyAVbBQ2P3x0mUGE0xRfvkx0JLd5trxp2as
*/

	$('#searchTopic').on("click", function() {
		var queryTerm = $("#search-input").val();
		var queryURL = "https://www.googleapis.com/youtube/v3";



		/* loads a video's thumbnail and prepares the player to play the video, 
		    	but does not play it until playVideo() is called */

	/*	player.cueVideoById({videoId:String,
                     startSeconds:Number,
                     endSeconds:Number,
                     suggestedQuality:String}):Void */


	});

	// Having a clicked smaller video populate in the larger player //
	$('.smallVid').on("click", function() {
		var currentVid = $(this).attr('src');

		var tag = document.createElement('script');

		tag.src = "https://www.youtube.com/iframe_api";
		var firstScriptTag = document.getElementByTagName('script')[0];
		firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

		var player;
		function onYouTubeIframeAPIReady() {
			player = new YT.Player('player', {
				height: '390',
				width: '640',
				videoID: "M71c1UVf-VE",
				events: {
					'onReady': onPlayerReady,
					//'onStateChange': onPlayerStateChange
				}
			});
		}
	});

	//Get targeted player to play
	function onPlayerReady(event){
		event.target.playVideo();
	};

	//Get targeted video to pause
/*	function pauseVideo() {
		player.pauseVideo();
	}
*/


});