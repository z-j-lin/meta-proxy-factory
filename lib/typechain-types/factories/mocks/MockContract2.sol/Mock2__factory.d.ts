import { Signer, ContractFactory, BigNumberish, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type { Mock2, Mock2Interface } from "../../../mocks/MockContract2.sol/Mock2";
type Mock2ConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class Mock2__factory extends ContractFactory {
    constructor(...args: Mock2ConstructorParams);
    deploy(factory_: PromiseOrValue<string>, version_: PromiseOrValue<BigNumberish>, anotherMock_: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<Mock2>;
    getDeployTransaction(factory_: PromiseOrValue<string>, version_: PromiseOrValue<BigNumberish>, anotherMock_: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): Mock2;
    connect(signer: Signer): Mock2__factory;
    static readonly bytecode = "0x60e060405234801561001057600080fd5b506040516107ff3803806107ff83398101604081905261002f91610068565b6001600160a01b0392831660c0526080919091521660a0526100a4565b80516001600160a01b038116811461006357600080fd5b919050565b60008060006060848603121561007d57600080fd5b6100868461004c565b92506020840151915061009b6040850161004c565b90509250925092565b60805160a05160c0516107336100cc600039600060f0015260005050600050506107336000f3fe608060405234801561001057600080fd5b50600436106100675760003560e01c8063ced7b2e311610050578063ced7b2e314610094578063d28d8852146100b0578063ee919d50146100c557600080fd5b80638beaf7d71461006c578063c4784fd414610081575b600080fd5b61007f61007a36600461025d565b6100d8565b005b61007f61008f366004610330565b61018e565b61009d60015481565b6040519081526020015b60405180910390f35b6100b86101a0565b6040516100a791906103a2565b61007f6100d336600461040e565b600155565b3373ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000161461017b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4368696c6450726f78793a206f6e6c7920666163746f727920616c6c6f776564604482015260640160405180910390fd5b600061018783826104c8565b5060015550565b600061019b8284836105e2565b505050565b600080546101ad90610427565b80601f01602080910402602001604051908101604052809291908181526020018280546101d990610427565b80156102265780601f106101fb57610100808354040283529160200191610226565b820191906000526020600020905b81548152906001019060200180831161020957829003601f168201915b505050505081565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000806040838503121561027057600080fd5b823567ffffffffffffffff8082111561028857600080fd5b818501915085601f83011261029c57600080fd5b8135818111156102ae576102ae61022e565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f011681019083821181831017156102f4576102f461022e565b8160405282815288602084870101111561030d57600080fd5b826020860160208301376000602093820184015298969091013596505050505050565b6000806020838503121561034357600080fd5b823567ffffffffffffffff8082111561035b57600080fd5b818501915085601f83011261036f57600080fd5b81358181111561037e57600080fd5b86602082850101111561039057600080fd5b60209290920196919550909350505050565b600060208083528351808285015260005b818110156103cf578581018301518582016040015282016103b3565b5060006040828601015260407fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8301168501019250505092915050565b60006020828403121561042057600080fd5b5035919050565b600181811c9082168061043b57607f821691505b602082108103610474577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b601f82111561019b57600081815260208120601f850160051c810160208610156104a15750805b601f850160051c820191505b818110156104c0578281556001016104ad565b505050505050565b815167ffffffffffffffff8111156104e2576104e261022e565b6104f6816104f08454610427565b8461047a565b602080601f83116001811461054957600084156105135750858301515b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600386901b1c1916600185901b1785556104c0565b6000858152602081207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08616915b8281101561059657888601518255948401946001909101908401610577565b50858210156105d257878501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600388901b60f8161c191681555b5050505050600190811b01905550565b67ffffffffffffffff8311156105fa576105fa61022e565b61060e836106088354610427565b8361047a565b6000601f841160018114610660576000851561062a5750838201355b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600387901b1c1916600186901b1783556106f6565b6000838152602090207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0861690835b828110156106af578685013582556020948501946001909201910161068f565b50868210156106ea577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60f88860031b161c19848701351681555b505060018560011b0183555b505050505056fea2646970667358221220e85fde44e55d99cf1f53ac86f977224857d8ce17847c0d700d6659c9c64ca60664736f6c63430008110033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "factory_";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "version_";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "anotherMock_";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [];
        readonly name: "_a";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "_name";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "name_";
            readonly type: "string";
        }, {
            readonly internalType: "uint256";
            readonly name: "a_";
            readonly type: "uint256";
        }];
        readonly name: "initialize";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "a_";
            readonly type: "uint256";
        }];
        readonly name: "setA";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "name_";
            readonly type: "string";
        }];
        readonly name: "setMsg";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): Mock2Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): Mock2;
}
export {};
