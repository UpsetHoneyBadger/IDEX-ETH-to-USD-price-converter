function updateDollarPrice(){
 $.get("https://api.coinmarketcap.com/v1/ticker/ethereum/", function(data, status){
    ethPrice = parseFloat(data[0].price_usd)
    var prices = []
    $.each($(".plain:first td:lt(3)"), function(id, val){
      var price = parseFloat($(val).html())
      prices.push($.isNumeric(price)?price:-1)
    })
    $("#dollar1").text(prices[0] === -1 ? "--" : "$" + (prices[0] * ethPrice).toFixed(2))
    $("#dollar2").text(prices[1] === -1 ? "--" : "$" + (prices[1] * ethPrice).toFixed(2))
    $("#dollar3").text(prices[2] === -1 ? "--" : "$" + (prices[2] * ethPrice).toFixed(2))
  })
}

$( document ).ready(function() {
  $("<td id='dollar1'></td><td id='dollar2'></td><td id='dollar3'></td><td></td>").insertAfter(".plain:first tr:nth-child(2)")
  setInterval(function(){
    updateDollarPrice()
  }, 4000)
});
