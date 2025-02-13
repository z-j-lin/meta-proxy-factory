/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { ProxyChild, ProxyChildInterface } from "../ProxyChild";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "getFactory",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60a0604052348015600f57600080fd5b503360805260805160ad61002c6000396000602f015260ad6000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c806388cc58e414602d575b600080fd5b7f000000000000000000000000000000000000000000000000000000000000000060405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f3fea2646970667358221220359cbeffa54b36a57428e9617df498e7e123b4584b8b18637d8f38a121ca793e64736f6c63430008110033";

type ProxyChildConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ProxyChildConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ProxyChild__factory extends ContractFactory {
  constructor(...args: ProxyChildConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ProxyChild> {
    return super.deploy(overrides || {}) as Promise<ProxyChild>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ProxyChild {
    return super.attach(address) as ProxyChild;
  }
  override connect(signer: Signer): ProxyChild__factory {
    return super.connect(signer) as ProxyChild__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ProxyChildInterface {
    return new utils.Interface(_abi) as ProxyChildInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ProxyChild {
    return new Contract(address, _abi, signerOrProvider) as ProxyChild;
  }
}
