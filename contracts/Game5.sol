//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract Game5 {
    bool public isWon;

    address threshold = 0x00FfFFfFFFfFFFFFfFfFfffFFFfffFfFffFfFFFf;

    function win() external {
        require(bytes20(msg.sender) < bytes20(threshold), "Nope. Try again!");

        isWon = true;
    }
}
