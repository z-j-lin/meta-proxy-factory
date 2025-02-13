import type { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../common";
export interface IProxyInterface extends utils.Interface {
    functions: {
        "getImplementationAddress()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "getImplementationAddress"): FunctionFragment;
    encodeFunctionData(functionFragment: "getImplementationAddress", values?: undefined): string;
    decodeFunctionResult(functionFragment: "getImplementationAddress", data: BytesLike): Result;
    events: {};
}
export interface IProxy extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IProxyInterface;
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
        getImplementationAddress(overrides?: CallOverrides): Promise<[string]>;
    };
    getImplementationAddress(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        getImplementationAddress(overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        getImplementationAddress(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        getImplementationAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
