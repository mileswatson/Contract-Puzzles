const { assert } = require("chai");

describe("Game5", function () {
  it("should be a winner", async function () {
    const Game = await ethers.getContractFactory("Game5");
    const game = await Game.deploy();
    await game.deployed();

    let signer;
    do {
      signer = ethers.Wallet.createRandom();
    } while (BigInt(await signer.getAddress()) >= BigInt("0x00fFfffFFffFFFfFFfFFffffFffffffffFFfffFf"));

    const address = await signer.getAddress();
    console.log(address);
    ethers.provider.getSigner(0).sendTransaction({ to: address, value: ethers.utils.parseEther("1") });

    // good luck
    await game.connect(signer.connect(ethers.provider)).win();

    // leave this assertion as-is
    assert(await game.isWon(), "You did not win the game");
  });
});
