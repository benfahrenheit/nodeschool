export = (str: string): boolean => {
    return /^(cat|dog|robot)\d+$/.test(str);
}