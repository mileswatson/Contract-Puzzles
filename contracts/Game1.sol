//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract Game1 {
    bool public isWon;
    bool public unlocked;

    function unlock() external {
        unlocked = true;
    }

    function win() external {
        require(unlocked, "Nope. Try again!");

        isWon = true;
    }
}
