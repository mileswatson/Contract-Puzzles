const { assert } = require("chai");

describe("Game3", function () {
  it("should be a winner", async function () {
    const Game = await ethers.getContractFactory("Game3");
    const game = await Game.deploy();
    await game.deployed();

    // three addresses, three balances
    // you'll need to update the mapping to win this stage

    // hardhat will create 10 accounts for you by default
    // you can get one of this accounts with ethers.provider.getSigner
    // and passing in the zero-based indexed of the signer you want:

    const signers = [...Array(3).keys()].map(x => ethers.provider.getSigner(x));

    const addresses = await Promise.all(signers.map(x => x.getAddress()));
    console.log(addresses);


    // to call a contract as a signer you can use contract.connect
    await game.connect(signers[0]).buy({ value: 2 });
    await game.connect(signers[1]).buy({ value: 3 });
    await game.connect(signers[2]).buy({ value: 1 });

    // TODO: win expects three arguments
    await game.win(addresses[0], addresses[1], addresses[2]);

    // leave this assertion as-is
    assert(await game.isWon(), "You did not win the game");
  });
});
