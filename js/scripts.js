$(document).ready(function () {
    //BUSINESS LOGIC
    function order(size, crust, toppings, number) {
        this.siz = size;
        this.cr = crust;
        this.top = toppings;

    }
    order.prototype.summary = function () {
        return "pizzasize: " + this.siz + ", crust:" + this.cr + ", toppings:" + this.top
    }

    //USER INTERFACE
    $("#sub").click(function () {
        $("#tForm").submit(function (event) {
            event.preventDefault();
            var size = $('#size').val();
            var crust = $('#crust').val();



            $('#deliver').click(function () {
                alert("");
                var location = prompt("enter ur location");
                alert("your order will be delivered to" + " " + location);
            });

        })
    });

})