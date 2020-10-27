export function generateCombinations(obj) {
    if (arguments.length > 1) {
        return [].slice.call(arguments).reduce(function(res, obj) {
            return res.concat(generateCombinations(obj));
        }, []);
    }

    var keys = Object.keys(obj),
        vals = keys.map(function(key) {
            return Array.isArray(obj[key]) ? obj[key] : [obj[key]];
        });

    return (function self(arr) {
        return arr.length === 1 ? arr[0] : arr[0].reduce(function(result, base) {
            self(arr.slice(1)).forEach(function(tail) {
                result.push([base].concat(tail));
            });
            return result;
        }, []);
    })(vals).map(function(arr) {
        return arr.reduce(function(result, val, i) {
            result[keys[i]] = val;
            return result;
        }, {});
    });
}
