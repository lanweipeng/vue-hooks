export type noop = (...args:any[])=>void
export type Service<R,P extends any[]> = (...args:P)=>Promise<R>;
export interface FetchConfig<R,P extends any[]>{
    onSuccess?:(data:R,params:R)=>void;
    onError?:(e:Error,params:P)=>void;
}