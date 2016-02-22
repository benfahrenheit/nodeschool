export = (str: string): boolean => {
    return /\d+\.jpg$/.test(str) || /\d+\.jpeg$/.test(str);
}