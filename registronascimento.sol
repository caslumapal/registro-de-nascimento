//SPDX-License-Identifier: MIT
//Author: Lucas Louvison Palma

pragma solidity 0.8.6;

contract RegistroDeNascimento {

    struct Nascimento {
        string genitor;
        string genitora;
        string nomeCrianca;
        uint dataDeNascimento;
    }

    address public registrador;

    Nascimento [] public Nascimentos;

    constructor() {
        registrador = msg.sender;
    }

    function RegistrarNascimento(
        string memory paramGenitor,
        string memory paramGenitora,
        string memory paramNomeCrianca,
        uint paramdataDeNascimento
    ) external returns (bool) {
        require(msg.sender == registrador, "Somente o registrador pode efetuar a lavratura do assento");
        Nascimento memory novoRegistroNascimento = Nascimento(paramGenitor, paramGenitora, paramNomeCrianca, paramdataDeNascimento);
        Nascimentos.push(novoRegistroNascimento);
        return true;
    }
    
}
