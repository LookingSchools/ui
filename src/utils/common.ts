export function debounce(fn: Function, timeout: number, invokeAsap?: boolean, ctx?: any) {
    let timer: number | undefined;
    const debounce = function(this: any) {
        var args = arguments;
        ctx = ctx || this;

        invokeAsap && !timer && fn.apply(ctx, args);

        clearTimeout(timer);

        timer = setTimeout(function() {
            invokeAsap || fn.apply(ctx, args);
            timer = undefined;
        }, timeout) as unknown as number; // TS думает что setTimeout вернёт NodeJS.Timer
    };

    debounce.stop = function() {
        clearTimeout(timer);
        timer = undefined;
    };

    return debounce;
};