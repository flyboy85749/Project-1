console.log("i am alive")
// this is what will pull all our results for the searched food term
function generalFoodInfo() {
    var preselectedTerm = $("#select").val();
    
    // need an if statment for our preselected term that if the value is set to something like "choose option" it returns
    // it as if it was nothing so preselected will be just ""
    var preselectedTerm = $("#select").val();
    var searchTerm = $("#input").val();
    var maxCal = $("#myRange").val();
    var zip = $("#zip").val();
    
    var foodInfo = `https://api.nutritionix.com/v1_1/search/${preselectedTerm}${searchTerm}?results=0%3A20&cal_min=0&cal_max=${maxCal}&fields=item_name%2Cbrand_name%2Citem_id%2Cbrand_id&appId=a2063711&appKey=32128ae3fa96a649e37745b8a692a95e`
    console.log("im here");
    
    $.ajax({
        url: foodInfo,
        method: "GET"
    })
    // this should be the call to take our information and let it be seperated into store/food name/ and grab the id of the thing
    .then(function (response) {
    console.log(response.hits);
    //     if (response.pagination.total_count == 0) {
    
    // // mandol or whatever to be put here saying sorry no results
    
    //     var itemindex = topics.indexOf(topic);
    //     if (itemindex > -1) {
    //     topics.splice(itemindex, 1);
    //     };
    // }
    for (let i = 0; i < response.hits.length; i++) {
    
        // this make a new div to store our information
        var tableHead = $("#mainHead");
        var newResult = $("<tr>");
    
        // pulls the name of the store
        var newStoreName = $("<td>").text(response.hits[i].fields.brand_name);
    
        // pulls the name of the food they sell
        var NewFoodName = $("<td>").text(response.hits[i].fields.item_name);
    
        // pulls the id of the food above
        var moreInfoButt = $("<td>");
        var buttonInfo = $(`<button type="button" class="btn btn-primary moreInfoButt" data-toggle="modal" data-target="#infoModal"
        data-whatever="@mdo">More Info</button> `)
        // var buttonInfo = $("<button>").text("More info");
        buttonInfo.attr("data-food", response.hits[i]._id);
        // buttonInfo.addClass("btn btn-primary");
        // buttonInfo.addClass("moreInfoButt");
        // buttonInfo.adddata-toggle("modal");
        // buttonInfo.adddata-EventTarget("#infoModal");
        moreInfoButt.append(buttonInfo);
        // appending the info of our info into the new div then appends the div into our "list"
        newResult.append(newStoreName, NewFoodName, moreInfoButt);
        tableHead.append(newResult);
        };
    });
    };
    
    
        // this will be the on click to input user search term into our api's
    
        $(document).on("click", "#searchButt", generalFoodInfo)
        console.log(generalFoodInfo);
        // function so that when a user clicks on a food it will pull more info for them to see it
        function detailedFoodInfo() {
            console.log("im food")
            // $(this).removeData();

            var selectedFood = $(this).data("food");
            console.log(selectedFood)
            var modalInfo = $(".modal-body");
            var foodInfo = `https://api.nutritionix.com/v1_1/item?id=${selectedFood}&appId=a2063711&appKey=32128ae3fa96a649e37745b8a692a95e`
            $.ajax({
                url: foodInfo,
                method: "GET"
            }).then(function (response) {
                console.log(response) // undefined
            // how i think we can call the specific info form our information
            var calories = response.nf_calories;
            var protein = response.nf_protein;
            var sugar = response.nf_sugars;
            var fat = response.nf_total_fat;
            var sodium = response.nf_sodium;
            var itemName = response.item_name;
            // then we apply the information as text to show up in our modal
            $("#itemName").text(`Information about ${itemName} is displayed in grams.`)
            $("#calories").val(`Total Amount of Calories is ${calories}`);
            $("#protein").val(`Total Amount of Protein is ${protein}G`);
            $("#sugar").val(`Total Amount of Sugars is ${sugar}G`);
            $("#fat").val(`Total Amount of Fat is ${fat}G`);
            $("#sodium").val(`Total Amount of Sodium is ${sodium}G`);
            });
        }
    
    
        $(document).on("click", ".moreInfoButt", detailedFoodInfo)
        