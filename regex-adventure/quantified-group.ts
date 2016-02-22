export = (str: string): boolean => {
    return /^(0x[\da-fA-F]{2}\s+){8}$/.test(str);
}