$(document).ready(function () {
// this is what will pull all our results for the searched food term
    function generalFoodInfo() {

        var searchTerm = $(this).attr("data-name");
        var minCal = $(this).attr("data-name");
        var maxCal = $(this).attr("data-name");

        var foodInfo = `https://api.nutritionix.com/v1_1/search/nut%20free?results=0%3A20&cal_min=${minCal}&cal_max=${maxCal}&fields=item_name%2Cbrand_name%2Citem_id%2Cbrand_id&appId=a2063711&appKey=32128ae3fa96a649e37745b8a692a95e`
        $.ajax({
            url: foodInfo,
            method: "GET"
        })
    }

    // map api goes here

    // this will be the on click to input user search term into our api's

    $(document).on("click", ".searchTerm", generalFoodInfo)
// 1. first on click will generate the list of foods/restaurant from our search bar
// 2. then have the user be able to select the food from the generated list
// 3. from that list we need to pull the foods id item so it can be placed in the next api call
// 4. the selected item we need to pull the id from it and make another call to the site so that it pulls up the nutritional information of the food they selected
// 5.


// function so that when a user clicks on a food it will pull more info for them to see it
function detailedFoodInfo() {

    var selectedFood = $(this).attr("data-name");

    var foodInfo = `https://api.nutritionix.com/v1_1/item?id=${selectedFood}&appId=a2063711&appKey=32128ae3fa96a649e37745b8a692a95e`
    $.ajax({
        url: foodInfo,
        method: "GET"
    })
}

$(document).on("click", ".foodOption", detailedFoodInfo)





























});