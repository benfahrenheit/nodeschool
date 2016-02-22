export = (str: string): boolean => {
    return /^[aeiou0-9]/.test(str);
}