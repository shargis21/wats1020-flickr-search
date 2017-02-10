// Asynchronous Flickr Search
//
// Flickr reveals a searchable JSON Feed you can access via jQuery's $.getJSON()
// method. Use this to allow users to search for a tag or comma-separated list
// of tags and view the images that are found.
//

$(document).on('ready', function(){

      var searchImages = function(tags){
        var flickrAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
          console.log(tags);
          $('#images').innerHTML = '<li class="search-throbber">Searching...</li>';
                 $.getJSON(flickrAPI, {
                   'tags': tags,
                   'tagmode': "any",
                   'format': "json"
          }).done(function( data ) {
             $('#images').empty();
             $('h1.search-title').first()[0].innerHTML = "Search for: " + tags;
                 $.each(data.items, function( i, item ) {
                 var newListItem = $("<li>")
                 var newTitle = $('<p class="image-title">')
                 var newDate = $('<p class="image-date">')
                 var newDescription = $('<p class="image-description">')
                 var newLink = $('<a>').attr('href', item.link)
                 }).appendTo(newListItem);
        newListItem.appendTo( "#images" );
        if ( i === 15 ) {
          return false;
            }       
       });
   };

    // Attach an event to the search button (`button.search`) to execute the
    // search when clicked.
               
    $('button.search').on('click', function(event){
    event.preventDefault();
    var searchTextInput = $(event.target.parentElement).find('input[name="searchText"]')[0];
    console.log(searchTextInput);
    searchImages(searchTextInput.value);
  });           


    // STRETCH GOAL: Add a "more info" popup using the technique shown on the
    // Bootstrap Modal documentation: http://getbootstrap.com/javascript/#modals-related-target



});
