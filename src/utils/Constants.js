export const ABI = [
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "infoUri",
                "type": "string"
            }
        ],
        "name": "addNews",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "position",
                "type": "uint256"
            }
        ],
        "name": "deleteNewsByPosition",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [],
        "name": "count",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getCount",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "returnedCount",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "position",
                "type": "uint256"
            }
        ],
        "name": "getNewsByPosition",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "string",
                        "name": "infoUri",
                        "type": "string"
                    },
                    {
                        "internalType": "address",
                        "name": "author",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "timestamp",
                        "type": "uint256"
                    }
                ],
                "internalType": "struct NewsPortal.NewsUri",
                "name": "uri",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "lastId",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "newsIdArray",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "NewsMap",
        "outputs": [
            {
                "internalType": "string",
                "name": "infoUri",
                "type": "string"
            },
            {
                "internalType": "address",
                "name": "author",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "timestamp",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
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

export const RPC = 'https://data-seed-prebsc-2-s2.binance.org:8545'

export const IPFS_GET_LINK = 'https://ipfs.infura.io/ipfs/'

export const CONTRACT = '0xC04D5816c5E15fa706eb34205a8223e47dcDB32f'

export const IPFS_CONNECTOR = 'https://ipfs.infura.io:5001/api/v0'

export const CONTRACT_OWNER = '0xd9DfB982Cb83d947a34E88697372E0f8D2511f2C'

export const DEFAULT_MAX_FILE_SIZE_IN_BYTES = 5000000;

export const CHAIN_ID = 97
