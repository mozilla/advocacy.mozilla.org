var monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
          ];
var feed = new google.feeds.Feed('https://blog.mozilla.org/netpolicy/feed/');
feed.load(function (data) {
    // Parse data depending on the specified response format, default is JSON.
    $.each(data.feed.entries, function(index, item) {
      var d = new Date(item['publishedDate']);
      // getYear() will return 115 for 2015, so we need to - by 100 to get 15
      var date = monthNames[d.getMonth()] + ' ' + d.getDate() + ', ' + (d.getYear() - 100);
      $("ul#rss-feed").append('<li><a class="rsswidget" href="' + item['link'] + '">'+item['title']+'</a> <span class="rss-date">'+ date +'</span></li>');
    });
});
