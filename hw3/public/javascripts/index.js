// @author Caitlin Ching 
// CS341-B Dr. Cenek 
// Last modified: 02/4/2022 

$(document).ready(function() {
    $(".orderButton").click(function(){
        // variables for radio buttons, textbox, and drop down
        let toppings = $('input[class="toppings"]:checked').val();
        let quantity = $("#quantity option:selected").val();
        let instructions = $("#textOrder").val()

        // if textarea includes the word vegan, display warning message
        if(instructions.includes("vegan")) {
            alert("WARNING: Cheesecakes Contain Dairy");
            // return false, so that the page doesn't reload
            return false;
        }
        else {
            $("#cheesecakeForm").remove();
            
            $("#parNotes").text("Thank you! Your order has been placed.");
            $("#orderInfo").text("Quantity: " + quantity + ", toppings: " + toppings + ", notes: " + instructions);
        }
    });
    // make hover button clickable and change text that is selected
    $(".month-link").click(function(){
        let month = $(this).text();
        $(".monthDrop").text(month);

        $.post('http://localhost:3000/orders', month, function(data) {
            // update orders page to match returned object 
            $('#cherryOrders').text(data[0].quantity + " " + data[0].topping);
            $('#plainOrders').text(data[1].quantity + " " + data[1].topping);
            $('#chocolateOrders').text(data[2].quantity + " " + data[2].topping);
        });
    });
});
