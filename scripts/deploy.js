
const hre = require("hardhat");

async function main() {
  
  const [deployer] = await ethers.getSigners();

    console.log(
      "Deploying contracts with the account:",
      deployer.address
    );

    console.log("Account balance:", (await deployer.getBalance()/1e18).toString());

    const MyFirstContract = await ethers.getContractFactory("MyToken");
    const deployedContract = await MyFirstContract.deploy("Test","TST");
    console.log("Deployed MyToken contract address:", deployedContract.address);


  
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
