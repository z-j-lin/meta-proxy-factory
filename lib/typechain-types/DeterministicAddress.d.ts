import type { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface DeterministicAddressInterface extends utils.Interface {
    functions: {
        "getMetamorphicContractAddress(bytes32,address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "getMetamorphicContractAddress"): FunctionFragment;
    encodeFunctionData(functionFragment: "getMetamorphicContractAddress", values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "getMetamorphicContractAddress", data: BytesLike): Result;
    events: {};
}
export interface DeterministicAddress extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: DeterministicAddressInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        getMetamorphicContractAddress(_salt: PromiseOrValue<BytesLike>, _factory: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string]>;
    };
    getMetamorphicContractAddress(_salt: PromiseOrValue<BytesLike>, _factory: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    callStatic: {
        getMetamorphicContractAddress(_salt: PromiseOrValue<BytesLike>, _factory: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        getMetamorphicContractAddress(_salt: PromiseOrValue<BytesLike>, _factory: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        getMetamorphicContractAddress(_salt: PromiseOrValue<BytesLike>, _factory: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
