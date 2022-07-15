/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  Mock2,
  Mock2Interface,
} from "../../../mocks/MockContract2.sol/Mock2";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "factory_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "version_",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "anotherMock_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "_a",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "_name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "a_",
        type: "uint256",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "a_",
        type: "uint256",
      },
    ],
    name: "setA",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
    ],
    name: "setMsg",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60e060405234801561001057600080fd5b506040516106b53803806106b583398101604081905261002f91610068565b6001600160a01b0392831660c0526080919091521660a0526100a4565b80516001600160a01b038116811461006357600080fd5b919050565b60008060006060848603121561007d57600080fd5b6100868461004c565b92506020840151915061009b6040850161004c565b90509250925092565b60805160a05160c0516105e96100cc600039600060f0015260005050600050506105e96000f3fe608060405234801561001057600080fd5b50600436106100675760003560e01c8063ced7b2e311610050578063ced7b2e314610094578063d28d8852146100b0578063ee919d50146100c557600080fd5b80638beaf7d71461006c578063c4784fd414610081575b600080fd5b61007f61007a36600461038e565b6100d8565b005b61007f61008f366004610461565b610195565b61009d60015481565b6040519081526020015b60405180910390f35b6100b86101a6565b6040516100a791906104d3565b61007f6100d3366004610546565b600155565b3373ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000161461017b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4368696c6450726f78793a206f6e6c7920666163746f727920616c6c6f776564604482015260640160405180910390fd5b815161018e906000906020850190610234565b5060015550565b6101a1600083836102b8565b505050565b600080546101b39061055f565b80601f01602080910402602001604051908101604052809291908181526020018280546101df9061055f565b801561022c5780601f106102015761010080835404028352916020019161022c565b820191906000526020600020905b81548152906001019060200180831161020f57829003601f168201915b505050505081565b8280546102409061055f565b90600052602060002090601f01602090048101928261026257600085556102a8565b82601f1061027b57805160ff19168380011785556102a8565b828001600101855582156102a8579182015b828111156102a857825182559160200191906001019061028d565b506102b492915061034a565b5090565b8280546102c49061055f565b90600052602060002090601f0160209004810192826102e657600085556102a8565b82601f1061031d578280017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff008235161785556102a8565b828001600101855582156102a8579182015b828111156102a857823582559160200191906001019061032f565b5b808211156102b4576000815560010161034b565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080604083850312156103a157600080fd5b823567ffffffffffffffff808211156103b957600080fd5b818501915085601f8301126103cd57600080fd5b8135818111156103df576103df61035f565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f011681019083821181831017156104255761042561035f565b8160405282815288602084870101111561043e57600080fd5b826020860160208301376000602093820184015298969091013596505050505050565b6000806020838503121561047457600080fd5b823567ffffffffffffffff8082111561048c57600080fd5b818501915085601f8301126104a057600080fd5b8135818111156104af57600080fd5b8660208285010111156104c157600080fd5b60209290920196919550909350505050565b600060208083528351808285015260005b81811015610500578581018301518582016040015282016104e4565b81811115610512576000604083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016929092016040019392505050565b60006020828403121561055857600080fd5b5035919050565b600181811c9082168061057357607f821691505b602082108114156105ad577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b5091905056fea2646970667358221220c2010a73ed02d19d4d7af9a4027f2945c0d52a02f48cda2d384319509e61690b64736f6c634300080b0033";

type Mock2ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: Mock2ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Mock2__factory extends ContractFactory {
  constructor(...args: Mock2ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    factory_: PromiseOrValue<string>,
    version_: PromiseOrValue<BigNumberish>,
    anotherMock_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Mock2> {
    return super.deploy(
      factory_,
      version_,
      anotherMock_,
      overrides || {}
    ) as Promise<Mock2>;
  }
  override getDeployTransaction(
    factory_: PromiseOrValue<string>,
    version_: PromiseOrValue<BigNumberish>,
    anotherMock_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      factory_,
      version_,
      anotherMock_,
      overrides || {}
    );
  }
  override attach(address: string): Mock2 {
    return super.attach(address) as Mock2;
  }
  override connect(signer: Signer): Mock2__factory {
    return super.connect(signer) as Mock2__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): Mock2Interface {
    return new utils.Interface(_abi) as Mock2Interface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Mock2 {
    return new Contract(address, _abi, signerOrProvider) as Mock2;
  }
}
