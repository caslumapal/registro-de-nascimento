const contractAddress = "0x29e43B1C66a44E1b1eE018E6ad2273E7BD52E05A";
var smartContract;
var smartContractWithSigner;
const ABI = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "paramGenitor",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "paramGenitora",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "paramNomeCrianca",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "paramdataDeNascimento",
				"type": "uint256"
			}
		],
		"name": "RegistrarNascimento",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		]
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "Nascimentos",
		"outputs": [
			{
				"internalType": "string",
				"name": "genitor",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "genitora",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "nomeCrianca",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "dataDeNascimento",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "registrador",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
