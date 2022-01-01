//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract Game2 {
    bool public isWon;
    mapping(uint256 => bool) switches;

    function switchOn(uint256 key) external payable {
        switches[key] = true;
    }

    function win() external {
        require(switches[20]);
        require(switches[47]);
        require(switches[212]);

        isWon = true;
    }
}
