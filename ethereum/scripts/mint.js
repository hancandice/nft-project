require("dotenv").config();
const { ethers } = require("ethers");

const contract = require("../artifacts/contracts/MelancholyCat.sol/MelancholyCat.json");
const contractInterface = contract.abi;

// https://docs.ethers.io/v5/api/providers
const provider = ethers.getDefaultProvider("ropsten", {
  alchemy: process.env.DEV_API_URL,
});

// https://docs.ethers.io/v5/api/signer/#Wallet
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

//https://docs.ethers.io/v5/api/contract/contract
const melancholyCat = new ethers.Contract(
  "0x3d970344b8ccb34230fa7e57d41c08ca6e40dcf3",
  contractInterface,
  wallet
);

const main = () => {
  melancholyCat
    .mint(process.env.PUBLIC_KEY)
    .then((transaction) => console.log(transaction))
    .catch((e) => console.log("something went wrong", e));
};

main();
