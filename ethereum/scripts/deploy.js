const { ethers } = require("hardhat");

async function main() {
  const MelancholyCat = await ethers.getContractFactory("MelancholyCat");
  const melancholyCat = await MelancholyCat.deploy();

  console.log("MelancholyCat deployed:", melancholyCat.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
