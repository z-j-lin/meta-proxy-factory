import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../common";
export interface Mock3Interface extends utils.Interface {
    functions: {
        "_a()": FunctionFragment;
        "_name()": FunctionFragment;
        "setA(uint256)": FunctionFragment;
        "setMsg(string)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "_a" | "_name" | "setA" | "setMsg"): FunctionFragment;
    encodeFunctionData(functionFragment: "_a", values?: undefined): string;
    encodeFunctionData(functionFragment: "_name", values?: undefined): string;
    encodeFunctionData(functionFragment: "setA", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setMsg", values: [PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "_a", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_name", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setA", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMsg", data: BytesLike): Result;
    events: {};
}
export interface Mock3 extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: Mock3Interface;
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
        setA(a_: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setMsg(name_: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    _a(overrides?: CallOverrides): Promise<BigNumber>;
    _name(overrides?: CallOverrides): Promise<string>;
    setA(a_: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setMsg(name_: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        _a(overrides?: CallOverrides): Promise<BigNumber>;
        _name(overrides?: CallOverrides): Promise<string>;
        setA(a_: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setMsg(name_: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        _a(overrides?: CallOverrides): Promise<BigNumber>;
        _name(overrides?: CallOverrides): Promise<BigNumber>;
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
        setA(a_: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setMsg(name_: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
