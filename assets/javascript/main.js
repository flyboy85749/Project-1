console.log("i am alive")
// this is what will pull all our results for the searched food term
function generalFoodInfo() {
    var preselectedTerm = $("#select").val();
    console.log(preselectedTerm);
    if (preselectedTerm === null) {
        preselectedTerm = ("")
    }
    // need an if statment for our preselected term that if the value is set to something like "choose option" it returns
    // it as if it was nothing so preselected will be just ""
    
    var searchTerm = $("#input").val();
    var maxCal = $("#myRange").val();
  
    var foodInfo = `https://api.nutritionix.com/v1_1/search/${preselectedTerm}${searchTerm}?results=0%3A20&cal_min=0&cal_max=${maxCal}&fields=item_name%2Cbrand_name%2Citem_id%2Cbrand_id&appId=a2063711&appKey=32128ae3fa96a649e37745b8a692a95e`
console.log(foodInfo);
    $.ajax({
        url: foodInfo,
        method: "GET"
    })
    // this should be the call to take our information and let it be seperated into store/food name/ and grab the id of the thing
    .then(function (response) {
    console.log(response);
         
    for (let i = 0; i < response.hits.length; i++) {
    
        // this make a new div to store our information
        var tableHead = $(".mainhead");
        var newResult = $("<tr>");
    
        // pulls the name of the store
        var newStoreName = $("<td>").text(response.hits[i].fields.brand_name);
    
        // pulls the name of the food they sell
        var NewFoodName = $("<td>").text(response.hits[i].fields.item_name);
    
        // pulls the id of the food above
        var moreInfoButt = $("<td>");
        var buttonInfo = $("<a>").text("Moar INfo");
        buttonInfo.attr("data-food", response.hits[i]._id);
        buttonInfo.addClass("moreInfoButton");
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
            $(".delete").empty();

            var selectedFood = $(this).data("food");
            var foodInfo = `https://api.nutritionix.com/v1_1/item?id=${selectedFood}&appId=a2063711&appKey=32128ae3fa96a649e37745b8a692a95e`
            $.ajax({
                url: foodInfo,
                method: "GET"
            }).then(function (response) {
                console.log(response)
                $('#myModal').modal('show');

            // how i think we can call the specific info form our information
            var calories = response.nf_calories;
            var protein = response.nf_protein;
            var sugar = response.nf_sugars;
            var fat = response.nf_total_fat;
            var sodium = response.nf_sodium;
            var itemName = response.item_name;
            var cholesterol = response.nf_cholesterol;
            var fiber = response.nf_dietary_fiber;
            var iron = response.nf_iron_dv;
            var fat = response.nf_total_fat;
            var servingSize = response.nf_serving_size_qty;
            var modalBody = $(".modal-body");
            var modalInfo = $("<div>");
            modalInfo.addClass("delete");
            // then we apply the information as text to show up in our modal
            modalInfo.append($("<h>").text(`Information about ${itemName} is displayed in grams.`))
            modalInfo.append($("<p>").text(`Serving Size ${servingSize}`));
            modalInfo.append($("<p>").text(`Total Amount of fiber is ${fiber}G`));
            modalInfo.append($("<p>").text(`Total Amount of Cholesterol is ${cholesterol}`));
            modalInfo.append($("<p>").text(`Total Amount of Iron is ${iron}G`));
            modalInfo.append($("<p>").text(`Total Amount of Fat is ${fat}G`));
            modalInfo.append($("<p>").text(`Total Amount of Calories is ${calories}`));
            modalInfo.append($("<p>").text(`Total Amount of Protein is ${protein}G`));
            modalInfo.append($("<p>").text(`Total Amount of Sugars is ${sugar}G`));
            modalInfo.append($("<p>").text(`Total Amount of Fat is ${fat}G`));
            modalInfo.append($("<p>").text(`Total Amount of Sodium is ${sodium}G`));
            modalBody.append(modalInfo);

            });
        }
    
    
        $(document).on("click", ".moreInfoButton", detailedFoodInfo)