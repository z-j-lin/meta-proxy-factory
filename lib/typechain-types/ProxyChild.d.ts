import type { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface ProxyChildInterface extends utils.Interface {
    functions: {
        "getFactory()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "getFactory"): FunctionFragment;
    encodeFunctionData(functionFragment: "getFactory", values?: undefined): string;
    decodeFunctionResult(functionFragment: "getFactory", data: BytesLike): Result;
    events: {};
}
export interface ProxyChild extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ProxyChildInterface;
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
        getFactory(overrides?: CallOverrides): Promise<[string]>;
    };
    getFactory(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        getFactory(overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        getFactory(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        getFactory(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
