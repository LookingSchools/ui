/*
 * Превращает число в натуральное, отбрасывая нециферные символы.
 * Также отбрасывает первые 0 если количество символов больше одного
 */
export function naturalNumber(num: string): string {
    const chars = [];
    let shouldRemoveZero = true;

    for (const ch of num) {
        if (ch >= '1' && ch <= '9' || ch === '0' && !shouldRemoveZero || ch === '0' && num.length === 1) {
            chars.push(ch);
            shouldRemoveZero = false;
        }
    }

    return chars.join('');
}
