$(document).ready(function () {
    var topic = $(this).attr("data-name");
    // this is what will set all our apis to look for the same topic
    function apiRequests() {

        // var imageUrl = ;
        var videoUrl =  `https://www.googleapis.com/youtube/v3/videos?part=${topic}&key=AIzaSyArWUdiSCGt0-Toxm27eYf5fKkpNJt-knk`
        var gifUrl = `https://api.giphy.com/v1/gifs/search?q=${topic}&api_key=Bbxmt6xBVvmP9bqdHENileHHwSLJvr2K`;

    }
    $.ajax({
        coolGif: gifUrl,
        method: "GET"
    })
    // this will be the on click to input user search term into our api's
    // $(document).on("click", ".userInput", displaypic/vid/gif);

    $(document).on("click", ".preMadeSearch", displaypic / vid / gif);




























});