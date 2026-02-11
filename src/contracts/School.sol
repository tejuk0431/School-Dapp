// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;
contract School{
   address public owner;
    mapping (address=>uint8) public roles;
    constructor(){
    owner = msg.sender;
    }
    function register(uint8 _role)public {
        roles[msg.sender]=_role;
    }
}