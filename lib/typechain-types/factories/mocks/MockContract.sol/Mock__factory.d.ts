import { Signer, ContractFactory, BigNumberish, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type { Mock, MockInterface } from "../../../mocks/MockContract.sol/Mock";
type MockConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class Mock__factory extends ContractFactory {
    constructor(...args: MockConstructorParams);
    deploy(version_: PromiseOrValue<BigNumberish>, anotherMock_: PromiseOrValue<string>, anotherAnotherMock_: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<Mock>;
    getDeployTransaction(version_: PromiseOrValue<BigNumberish>, anotherMock_: PromiseOrValue<string>, anotherAnotherMock_: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): Mock;
    connect(signer: Signer): Mock__factory;
    static readonly bytecode = "0x61010060405234801561001157600080fd5b5060405161086b38038061086b8339810160408190526100309161006d565b3360805260a0929092526001600160a01b0390811660e0521660c0526100a9565b80516001600160a01b038116811461006857600080fd5b919050565b60008060006060848603121561008257600080fd5b8351925061009260208501610051565b91506100a060408501610051565b90509250925092565b60805160a05160c05160e05161078c6100df60003960005050600050506000505060008181609101526101fa015261078c6000f3fe608060405234801561001057600080fd5b50600436106100725760003560e01c8063ced7b2e311610050578063ced7b2e3146100e8578063d28d8852146100ff578063ee919d501461011457600080fd5b806388cc58e4146100775780638beaf7d7146100c0578063c4784fd4146100d5575b600080fd5b60405173ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001681526020015b60405180910390f35b6100d36100ce3660046102b6565b610127565b005b6100d36100e3366004610389565b610142565b6100f160025481565b6040519081526020016100b7565b610107610154565b6040516100b791906103fb565b6100d3610122366004610467565b600255565b61012f6101e2565b600161013b8382610521565b5060025550565b600161014f82848361063b565b505050565b6001805461016190610480565b80601f016020809104026020016040519081016040528092919081815260200182805461018d90610480565b80156101da5780601f106101af576101008083540402835291602001916101da565b820191906000526020600020905b8154815290600101906020018083116101bd57829003601f168201915b505050505081565b3373ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001614610285576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4368696c6450726f78793a206f6e6c7920666163746f727920616c6c6f776564604482015260640160405180910390fd5b565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080604083850312156102c957600080fd5b823567ffffffffffffffff808211156102e157600080fd5b818501915085601f8301126102f557600080fd5b81358181111561030757610307610287565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810190838211818310171561034d5761034d610287565b8160405282815288602084870101111561036657600080fd5b826020860160208301376000602093820184015298969091013596505050505050565b6000806020838503121561039c57600080fd5b823567ffffffffffffffff808211156103b457600080fd5b818501915085601f8301126103c857600080fd5b8135818111156103d757600080fd5b8660208285010111156103e957600080fd5b60209290920196919550909350505050565b600060208083528351808285015260005b818110156104285785810183015185820160400152820161040c565b5060006040828601015260407fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8301168501019250505092915050565b60006020828403121561047957600080fd5b5035919050565b600181811c9082168061049457607f821691505b6020821081036104cd577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b601f82111561014f57600081815260208120601f850160051c810160208610156104fa5750805b601f850160051c820191505b8181101561051957828155600101610506565b505050505050565b815167ffffffffffffffff81111561053b5761053b610287565b61054f816105498454610480565b846104d3565b602080601f8311600181146105a2576000841561056c5750858301515b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600386901b1c1916600185901b178555610519565b6000858152602081207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08616915b828110156105ef578886015182559484019460019091019084016105d0565b508582101561062b57878501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600388901b60f8161c191681555b5050505050600190811b01905550565b67ffffffffffffffff83111561065357610653610287565b610667836106618354610480565b836104d3565b6000601f8411600181146106b957600085156106835750838201355b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600387901b1c1916600186901b17835561074f565b6000838152602090207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0861690835b8281101561070857868501358255602094850194600190920191016106e8565b5086821015610743577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60f88860031b161c19848701351681555b505060018560011b0183555b505050505056fea264697066735822122053ed17a79092a9ba102f94b054ac3a65278e082ce7acdc44dd78b85007fd0f7464736f6c63430008110033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "version_";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "anotherMock_";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "anotherAnotherMock_";
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
        readonly inputs: readonly [];
        readonly name: "getFactory";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
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
    static createInterface(): MockInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Mock;
}
export {};
