require("dotenv").config();

const { ethers } = require("ethers");

// Dirección del contrato y su ABI
const contractAddress = "0xdAC17F958D2ee523a2206206994597C13D831ec7"; // Contrato USDT
const abi = [
  "function name() public view returns (string)",
  "function symbol() public view returns (string)",
  "function decimals() public view returns (uint8)",
];

// Proveedor (Infura)
const provider = new ethers.JsonRpcProvider(process.env.ALCHEMY_LINK);

async function fetchContractInfo() {
  try {
    const contract = new ethers.Contract(contractAddress, abi, provider);

    const name = await contract.name();
    const symbol = await contract.symbol();
    const decimals = await contract.decimals();
    return `Name: ${name}\nSymbol: ${symbol}\nDecimals: ${decimals}\n`;
  } catch (error) {
    console.error("Error interacting with the contract:", error);
    throw error;  
  }
}

module.exports = fetchContractInfo;
