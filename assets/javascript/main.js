$(document).ready(function () {


    // this is what will pull all our results for the searched food term

    function generalFoodInfo() {
        var preselectedTerm = $(this).val();

        // need an if statment for our preselected term that if the value is set to something like "choose option" it returns
        // it as if it was nothing so preselected will be just "".

        var searchTerm = $(this).val();
        var maxCal = $(this).val();

        var foodInfo = `https://api.nutritionix.com/v1_1/search/${preselectedTerm}${searchTerm}?results=0%3A20&cal_min=0&cal_max=${maxCal}&fields=item_name%2Cbrand_name%2Citem_id%2Cbrand_id&appId=a2063711&appKey=32128ae3fa96a649e37745b8a692a95e`
        $.ajax({
            url: foodInfo,
            method: "GET"
        })

            // this should be the call to take our information and let it be seperated into store/food name/ and grab the id of the thing

            .then(function (response) {
                console.log(response);
                console.log(response.hits.length)
                if (response.pagination.total_count == 0) {

                    // mandol or whatever to be put here saying sorry no results

                    var itemindex = topics.indexOf(topic);
                    if (itemindex > -1) {
                        topics.splice(itemindex, 1);
                    };
                }
                for (let i = 0; i < response.hits.length; i++) {

                    // this make a new div to store our information
                    var newResult = $("<div id='food'>");

                    // pulls the name of the store
                    var newStoreName = $("<p>").text("Store Name:" + response.hits[i].fields.brand_name);

                    // pulls the name of the food they sell
                    var NewFoodName = $("<p>").text("Store Name:" + response.hits[i].fields.item_name);

                    // pulls the id of the food above
                    var moreInfoButt = $("<button>");
                    moreInfoButt.attr("data-foodNumber",response.hits[i].id);

                    // appending the info of our info into the new div then appends the div into our "list"
                    newResult.append(newStoreName);
                    newResult.append(NewFoodName);
                    newResult.append(moreInfoButt);
                    searchResults.append(newResult);
                };
            });
    }
    // after this call append the information onto website and generate a button for it
    // then when the button is pushed call this second api

    // this will be the on click to input user search term into our api's

    $(document).on("click", ".searchTerm", generalFoodInfo)

    // function so that when a user clicks on a food it will pull more info for them to see it
    function detailedFoodInfo() {

        var selectedFood = $(this).val();

        var foodInfo = `https://api.nutritionix.com/v1_1/item?id=${selectedFood}&appId=a2063711&appKey=32128ae3fa96a649e37745b8a692a95e`
        $.ajax({
            url: foodInfo,
            method: "GET"
        })

    }

    $(document).on("click", ".moreInfoButton", detailedFoodInfo)


});

// psuedo zone

   // 1. first on click will generate the list of foods/restaurant from our search bar
                // 2. then have the user be able to select the food from the generated list
                // 3. from that list we need to pull the foods id item so it can be placed in the next api call
                // 4. the selected item we need to pull the id from it and make another call to the site so that it pulls up the nutritional information of the food they selected
                // 5.
=======
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
