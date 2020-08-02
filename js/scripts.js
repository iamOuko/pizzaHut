
//BUSINESS LOGIC
function order(size, crust, topping) {
    this.siz = size;
    this.cr = crust;
    this.top = topping;

}
order.prototype.summary = function () {
    return "size: " + this.siz + ", crust:" + this.cr + ", topping:" + this.top
}

//USER INTERFACE
$(document).ready(function () {



    $('#sub').click(function (event) {
        event.preventDefault();
        var crust = $('#crust').val();
        var crustName = $("#crust option:selected").text();
        var size = $('#size').val();
        var sizeName = $("#size option:selected").text();

        var topping = [];
        var toppingName = []
        $.each($("input[type=checkbox]:checked"), function () {
            topping.push($(this).val());
            toppingName.push($(this).val());
        });
        console.log(topping)
        var toppingsValue = 0;
        for (var i = 0; i < topping.length; i++) {
            toppingsValue += parseInt(topping[i]);
        }


        var tot = (parseInt(size) + parseInt(crust) + parseInt(toppingsValue));
        alert("Total cost is " + tot);

        var toppingName = ['Pepperoni', 'Pineaple', 'Bacon', 'Cheese', 'Mushrooms'];
        var toppingFinal = toppingName.join(', ')

        var finalTotal = (parseInt(size) + parseInt(crust) + parseInt(toppingsValue));
        $("#summary").append("<p>" + ' size:' + sizeName + ' crust:' + crustName + ' total:' + finalTotal + "</p>");

        var overallPrice = sessionStorage.getItem("overallPrice")
        var total = parseInt(finalTotal) + parseInt(overallPrice)
        sessionStorage.setItem("overallPrice", total);
        console.log(total)

    });


    $('#deliver').click(function () {
        alert("delivery cost is 400");
        var location = prompt("enter ur location");
        alert("your order will be delivered to" + " " + location);
    });

    $('#finalOrder').click(function () {
        alert(total)
    })
})

