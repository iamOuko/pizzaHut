
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
        // var topping = $("input[type=checkbox]:checked").val()
        var topping = [];
        $.each($("input[type=checkbox]:checked"), function () {
            topping.push($(this).val());
        });
        console.log(topping)
        var toppingsValue = 0;
        for (var i = 0; i < topping.length; i++) {
            toppingsValue += parseInt(topping[i]);
        }
        console.log(toppingsValue)

        var tot = (parseInt(size) + parseInt(crust) + parseInt(toppingsValue));
        alert("Total cost is " + tot);

        $("#myselect option:selected").text();
    });


    $('#deliver').click(function () {
        alert("delivery cost is 400");
        var location = prompt("enter ur location");
        alert("your order will be delivered to" + " " + location);
    });
})

