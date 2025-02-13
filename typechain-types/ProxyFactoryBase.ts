/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export interface ProxyFactoryBaseInterface extends utils.Interface {
  functions: {
    "contracts()": FunctionFragment;
    "getImplementation()": FunctionFragment;
    "getMetamorphicContractAddress(bytes32,address)": FunctionFragment;
    "getNumContracts()": FunctionFragment;
    "lookup(bytes32)": FunctionFragment;
    "owner()": FunctionFragment;
    "setOwner(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "contracts"
      | "getImplementation"
      | "getMetamorphicContractAddress"
      | "getNumContracts"
      | "lookup"
      | "owner"
      | "setOwner"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "contracts", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getImplementation",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getMetamorphicContractAddress",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getNumContracts",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "lookup",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setOwner",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(functionFragment: "contracts", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getImplementation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMetamorphicContractAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getNumContracts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "lookup", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setOwner", data: BytesLike): Result;

  events: {
    "Deployed(bytes32,address)": EventFragment;
    "DeployedProxy(address)": EventFragment;
    "DeployedRaw(address)": EventFragment;
    "DeployedStatic(address)": EventFragment;
    "DeployedTemplate(address)": EventFragment;
    "UpgradedProxy(bytes32,address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Deployed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DeployedProxy"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DeployedRaw"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DeployedStatic"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DeployedTemplate"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UpgradedProxy"): EventFragment;
}

export interface DeployedEventObject {
  salt: string;
  contractAddr: string;
}
export type DeployedEvent = TypedEvent<[string, string], DeployedEventObject>;

export type DeployedEventFilter = TypedEventFilter<DeployedEvent>;

export interface DeployedProxyEventObject {
  contractAddr: string;
}
export type DeployedProxyEvent = TypedEvent<[string], DeployedProxyEventObject>;

export type DeployedProxyEventFilter = TypedEventFilter<DeployedProxyEvent>;

export interface DeployedRawEventObject {
  contractAddr: string;
}
export type DeployedRawEvent = TypedEvent<[string], DeployedRawEventObject>;

export type DeployedRawEventFilter = TypedEventFilter<DeployedRawEvent>;

export interface DeployedStaticEventObject {
  contractAddr: string;
}
export type DeployedStaticEvent = TypedEvent<
  [string],
  DeployedStaticEventObject
>;

export type DeployedStaticEventFilter = TypedEventFilter<DeployedStaticEvent>;

export interface DeployedTemplateEventObject {
  contractAddr: string;
}
export type DeployedTemplateEvent = TypedEvent<
  [string],
  DeployedTemplateEventObject
>;

export type DeployedTemplateEventFilter =
  TypedEventFilter<DeployedTemplateEvent>;

export interface UpgradedProxyEventObject {
  salt: string;
  proxyAddr: string;
  newlogicAddr: string;
}
export type UpgradedProxyEvent = TypedEvent<
  [string, string, string],
  UpgradedProxyEventObject
>;

export type UpgradedProxyEventFilter = TypedEventFilter<UpgradedProxyEvent>;

export interface ProxyFactoryBase extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ProxyFactoryBaseInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    contracts(
      overrides?: CallOverrides
    ): Promise<[string[]] & { contracts_: string[] }>;

    getImplementation(overrides?: CallOverrides): Promise<[string]>;

    getMetamorphicContractAddress(
      _salt: PromiseOrValue<BytesLike>,
      _factory: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getNumContracts(overrides?: CallOverrides): Promise<[BigNumber]>;

    lookup(
      salt_: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string] & { owner_: string }>;

    setOwner(
      newOwner_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  contracts(overrides?: CallOverrides): Promise<string[]>;

  getImplementation(overrides?: CallOverrides): Promise<string>;

  getMetamorphicContractAddress(
    _salt: PromiseOrValue<BytesLike>,
    _factory: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string>;

  getNumContracts(overrides?: CallOverrides): Promise<BigNumber>;

  lookup(
    salt_: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  setOwner(
    newOwner_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    contracts(overrides?: CallOverrides): Promise<string[]>;

    getImplementation(overrides?: CallOverrides): Promise<string>;

    getMetamorphicContractAddress(
      _salt: PromiseOrValue<BytesLike>,
      _factory: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    getNumContracts(overrides?: CallOverrides): Promise<BigNumber>;

    lookup(
      salt_: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    setOwner(
      newOwner_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "Deployed(bytes32,address)"(
      salt?: null,
      contractAddr?: null
    ): DeployedEventFilter;
    Deployed(salt?: null, contractAddr?: null): DeployedEventFilter;

    "DeployedProxy(address)"(contractAddr?: null): DeployedProxyEventFilter;
    DeployedProxy(contractAddr?: null): DeployedProxyEventFilter;

    "DeployedRaw(address)"(contractAddr?: null): DeployedRawEventFilter;
    DeployedRaw(contractAddr?: null): DeployedRawEventFilter;

    "DeployedStatic(address)"(contractAddr?: null): DeployedStaticEventFilter;
    DeployedStatic(contractAddr?: null): DeployedStaticEventFilter;

    "DeployedTemplate(address)"(
      contractAddr?: null
    ): DeployedTemplateEventFilter;
    DeployedTemplate(contractAddr?: null): DeployedTemplateEventFilter;

    "UpgradedProxy(bytes32,address,address)"(
      salt?: null,
      proxyAddr?: null,
      newlogicAddr?: null
    ): UpgradedProxyEventFilter;
    UpgradedProxy(
      salt?: null,
      proxyAddr?: null,
      newlogicAddr?: null
    ): UpgradedProxyEventFilter;
  };

  estimateGas: {
    contracts(overrides?: CallOverrides): Promise<BigNumber>;

    getImplementation(overrides?: CallOverrides): Promise<BigNumber>;

    getMetamorphicContractAddress(
      _salt: PromiseOrValue<BytesLike>,
      _factory: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getNumContracts(overrides?: CallOverrides): Promise<BigNumber>;

    lookup(
      salt_: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    setOwner(
      newOwner_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    contracts(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getImplementation(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getMetamorphicContractAddress(
      _salt: PromiseOrValue<BytesLike>,
      _factory: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getNumContracts(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lookup(
      salt_: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setOwner(
      newOwner_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
