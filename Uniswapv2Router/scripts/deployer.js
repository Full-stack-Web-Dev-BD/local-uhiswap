const hre = require('hardhat')
async function main() {
  // const WETH9 = await hre.ethers.getContractFactory("WETH9");
  // const weth9 = await WETH9.deploy();
  // await weth9.deployed()
  // const weth9Address = weth9.address;|0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512
  // console.log("WETH9 Deployed :", weth9Address);

  const UniswapV2Router = await hre.ethers.getContractFactory("UniswapV2Router02");
  const uniswapV2Router = await UniswapV2Router.deploy('0x5FbDB2315678afecb367f032d93F642f64180aa3', '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512');
  await uniswapV2Router.deployed()
  console.log("Your UniswapV2Router Deployed:", uniswapV2Router.address);
}
main()
  .then(() => {
    process.exit()
  })
  .catch(err => {
    console.log("Error", err);
    process.exit(1)

  })