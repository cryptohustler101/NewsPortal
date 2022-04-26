import Web3Modal from 'web3modal'

export const providerOptions = {}

export const web3modal = new Web3Modal({network: 'mainnet', cacheProvider: true, providerOptions, theme: "dark"})

export default web3modal

