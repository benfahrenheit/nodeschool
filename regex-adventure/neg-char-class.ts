export = (str: string): boolean => {
    return /^\D[^A-Z]/.test(str);
}