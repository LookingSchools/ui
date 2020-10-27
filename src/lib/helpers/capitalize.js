export function capitalize(string) {
    if (process.env.NODE_ENV !== 'production' && typeof string !== 'string') {
        throw new Error('Capitalize(string) expects a string argument.');
    }
    return string.charAt(0).toUpperCase() + string.slice(1);
}