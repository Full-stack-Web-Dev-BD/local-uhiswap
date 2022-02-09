const hre = require('hardhat')
async function main() {
  const UniswapV2factory = await hre.ethers.getContractFactory("UniswapV2Factory")
  const uniswapV2Factory = await UniswapV2factory.deploy('0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266');
  await uniswapV2Factory.deployed()
  console.log("UniswapV2Factory Deployed to :", uniswapV2Factory.address);
}
main()
  .then(() => process.exit())
  .catch(err => {
    console.log(err)
    process.exit(1)
  })
