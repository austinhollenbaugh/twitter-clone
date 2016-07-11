$(document).ready(function() {
	var charCount = '#char-count';
	var tweetButton = '#tweet-submit';

	var profilePic;
	var username; 
	var fullName;
	var currentTime;

	$(tweetButton).css('display', 'none');
	$(charCount).css('display', 'none');
	$('.tweet-compose').on('click', function() {
		$('.tweet-compose').css('height', '5em');
		$(tweetButton).css('display', '');
		$('#char-count').css('display', '');
	});
	$('.tweet-compose').keyup(function() {
		var maxChar = 140;
		var currentChar = $(this).val().length;
		$(charCount).text(maxChar - currentChar);

		if (currentChar > 140) {
			$(tweetButton).attr('disabled', true);
		} else if (currentChar <= 140) {
			$(tweetButton).attr('disabled', false);
		}

		if (currentChar >= 130) {
			$(charCount).css('color', 'red');
		} 

	})

	$(tweetButton).on('click', function() {
		var newTweet = "<div class="tweet"><div class="content"><img class="avatar" src='img/' + profilePic + '.jpg' /><strong class="fullname">fullName</strong><span class="username">username</span><p class="tweet-text"><div class="tweet-actions"><ul><li><span class="icon action-reply"></span> Reply</li><li><span class="icon action-retweet"></span> Retweet</li><li><span class="icon action-favorite"></span> Favorite</li><li><span class="icon action-more"></span> More</li></ul></div><div class="stats"><div class="retweets"><p class="num-retweets">30</p><p>RETWEETS</p></div><div class="favorites"><p class="num-favorites">6</p><p>FAVORITES</p></div><div class="users-interact"></div><div class="time">currentTime</div></div><div class="reply"><img class="avatar" src="img/" + profilePic + ".jpg" /><textarea class="tweet-compose" placeholder="Reply to @mybff"/></textarea></div></div></div>"

		$(newTweet).prepend("#stream");

	})



});


