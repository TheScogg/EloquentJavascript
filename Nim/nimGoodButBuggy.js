/**
 * Created by Chris on 5/15/2016.
 */
$(document).ready(function () {
    function play() {
        // NIM Simulation
        var coins = 8;
        var coinBuffer = 0;
        var playerTurn = true;
        html = '';

        /* Set Up Initial Gameboard with coins (default = 12) */
        for (var i = 0; i < coins; i++) {
            $(".gameBody").append('<div class="coinTop" '
                + 'id="coin' + i + '" ></div>');
        }

        $(".coinTop").on("click", function () {
            console.log("Coins: " + coins);
            if (coinBuffer < 3) {
                coins--;
                //console.log("coins var : " + coins);
                $("#coin" + coins).remove();
                $(".coinSlot").append('<div class="coinBottom" id="coinBuffer' + coinBuffer + '"></div>');
                coinBuffer++;
                //console.log("Coins: " + coins + "/ Coin Buffer: " + coinBuffer);
            }

            if (coins === 0) {
                $("#winner").append("YOU WIN!");
            }

            console.log("Coin Buffer: " + coinBuffer);
        });


        $(document).on("click", ".coinBottom", function () {
            console.log("Coins: " + coins);

            if (coinBuffer > 0) {
                $(".gameBody").append('<div class="coinTop" '
                    + 'id="coin' + coins + '" ></div>');
                coinBuffer--;
                coins++;
                $("#coinBuffer" + coinBuffer).remove();
                //console.log("Coins: " + coins + "/ Coin Buffer: " + coinBuffer);
            }

            console.log("Coin Buffer: " + coinBuffer);


        });

        $(".testButton").on("click", function () {
            console.log(coinBuffer);

            for (var i = 0; i < coinBuffer; i++) {
                $("#coinBuffer" + i).remove();
            }

            coinBuffer = 0;
            /* # of coins for CPU to remove */
            var coinsToRemove = coins % 4;

            if (coinsToRemove === 0) {
                coinsToRemove = Math.floor(Math.random() * 3 + 1);
            }


            console.log("Coins to Remove: " + coinsToRemove);
            console.log("Coins: " + coins);


            for (var j = coins; j > coins-coinsToRemove; j--) {
                $("#coin" + String(j-1)).remove();
                //coins--;
            }

            coins = coins-coinsToRemove;
            console.log(coins);



            if (coins === 0) {
                $("#winner").append("CPU WINS!");
            }
        });
    }

    play();

});