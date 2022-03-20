$(document).ready(function() {
    $(".result").hide()
    $(".purchase").click(function() {
        var size = $("#size  option:selected").val();
        var crust = $("#crust  option:selected").val();
        var toppings = $("#toppings  option:selected").val()
        var quantity = $(".quantity").val();
        var location = $("#location option:selected").val()
        var price = $("input[type='checkbox']").val();

        function quantityChanged() {

            if (isNaN(quantity) || quantity <= 0) {
                quantity = 1
            }
        }
        quantityChanged();
        var crustPrice;
        if (toppings === 'mushroom') {
            crustPrice = 100
        } else if (toppings === 'beef') {
            crustPrice = 150
        } else if (toppings === 'chicken') {

            crustPrice = 200;
        }
        var toppingPrice;
        if (crust === 'stuffed') {
            toppingPrice = 100
        } else if (crust === 'crispy') {
            toppingPrice = 120
        } else if (crust === 'gluttenFree') {
            toppingPrice = 150
        }
        var price;
        if (size === 'large') {
            price = 1000
        } else if (size === 'medium') {
            price = 900
        } else if (size === 'small') {
            price = 850
        } else if (size === 'You') {
            alert("Please select your size!")
            price = 0;
        }
        

})
