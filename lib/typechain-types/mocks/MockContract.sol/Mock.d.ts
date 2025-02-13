import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../common";
export interface MockInterface extends utils.Interface {
    functions: {
        "_a()": FunctionFragment;
        "_name()": FunctionFragment;
        "getFactory()": FunctionFragment;
        "initialize(string,uint256)": FunctionFragment;
        "setA(uint256)": FunctionFragment;
        "setMsg(string)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "_a" | "_name" | "getFactory" | "initialize" | "setA" | "setMsg"): FunctionFragment;
    encodeFunctionData(functionFragment: "_a", values?: undefined): string;
    encodeFunctionData(functionFragment: "_name", values?: undefined): string;
    encodeFunctionData(functionFragment: "getFactory", values?: undefined): string;
    encodeFunctionData(functionFragment: "initialize", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setA", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setMsg", values: [PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "_a", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_name", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getFactory", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setA", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMsg", data: BytesLike): Result;
    events: {};
}
export interface Mock extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: MockInterface;
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
        _a(overrides?: CallOverrides): Promise<[BigNumber]>;
        _name(overrides?: CallOverrides): Promise<[string]>;
        getFactory(overrides?: CallOverrides): Promise<[string]>;
        initialize(name_: PromiseOrValue<string>, a_: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setA(a_: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setMsg(name_: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    _a(overrides?: CallOverrides): Promise<BigNumber>;
    _name(overrides?: CallOverrides): Promise<string>;
    getFactory(overrides?: CallOverrides): Promise<string>;
    initialize(name_: PromiseOrValue<string>, a_: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setA(a_: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setMsg(name_: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        _a(overrides?: CallOverrides): Promise<BigNumber>;
        _name(overrides?: CallOverrides): Promise<string>;
        getFactory(overrides?: CallOverrides): Promise<string>;
        initialize(name_: PromiseOrValue<string>, a_: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setA(a_: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setMsg(name_: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        _a(overrides?: CallOverrides): Promise<BigNumber>;
        _name(overrides?: CallOverrides): Promise<BigNumber>;
        getFactory(overrides?: CallOverrides): Promise<BigNumber>;
        initialize(name_: PromiseOrValue<string>, a_: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setA(a_: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setMsg(name_: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        _a(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        _name(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getFactory(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(name_: PromiseOrValue<string>, a_: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setA(a_: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setMsg(name_: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
