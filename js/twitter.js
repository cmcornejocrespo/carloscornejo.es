var Twitter = {
    init: function () {
        // Pass in the username you want to display feeds for
        this.insertLatestTweets('cmcornejocrespo');
    }, 

    // This replaces the <p>Loading...</p> with the tweets
    insertLatestTweets: function (username) {
        var limit    =20;    // How many feeds do you want?
        var url        = 'http://twitter.com/statuses/user_timeline.json?screen_name=' + username + '&count=' + limit + '&callback=?';
		// Now ajax in the feeds from twitter.com
        $.getJSON(url, function (data) {
            // We'll start by creating a normal marquee-element for the tweets
            var html = '<marquee behavior="scroll" scrollamount="1" direction="left">';

            // Loop through all the tweets and create a link for each
            for (var i=0; i< data.length;i++) {
                html += '<a href="http://twitter.com/' + username + '#status_' + data[i].id_str + '">' + data[i].text + ' <i>' + Twitter.daysAgo(data[i].created_at) + '</i></a>';
            }

            html += '</marquee>';

            // Now replace the <p> with our <marquee>-element
            $('#twitterCSS p').replaceWith(html);

            // The marquee element looks quite shite so we'll use Remy Sharp's plug-in to replace it with a smooth one
            Twitter.fancyMarquee();
        });
    }, 

    // Replaces the marquee-element with a fancy one
    fancyMarquee: function () {
        // Replace the marquee and do some fancy stuff (taken from remy sharp's website)
        $('#twitterCSS marquee').marquee('pointer')
            .mouseover(function () {
                $(this).trigger('stop');
            })
            .mouseout(function () {
                $(this).trigger('start');
            })
            .mousemove(function (event) {
                if ($(this).data('drag') == true) {
                    this.scrollLeft = $(this).data('scrollX') + ($(this).data('x') - event.clientX);
                }
            })
            .mousedown(function (event) {
                $(this).data('drag', true).data('x', event.clientX).data('scrollX', this.scrollLeft);
            })
            .mouseup(function () {
                $(this).data('drag', false);
            });
    }, 

    // Takes a date and return the number of days it's been since said date
    daysAgo: function (date) {
        // TODO: Fix date for IE...
        if ($.browser.msie) {
            return '1 day ago';
        }

        var d = new Date(date).getTime();
        var n = new Date().getTime();

        var numDays = Math.round(Math.abs(n - d) / (1000 * 60 * 60 * 24));
        var daysAgo = numDays + ' days ago';

        if (numDays == 0) {
            daysAgo = 'today';
        }
        else if (numDays == 1) {
            daysAgo = numDays + ' day ago';
        }

        return daysAgo;
    }
};

Twitter.init();