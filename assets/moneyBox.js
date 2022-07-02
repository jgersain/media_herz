function moneyBox() {
  let saveCoins = 0;

  function countCoins (coins) {
    saveCoins += coins;
    console.log(`My saved money: $${saveCoins}`);
  }

  return countCoins;
}

const myMoney = moneyBox();
myMoney(5);
myMoney(10);