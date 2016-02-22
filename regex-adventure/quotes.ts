export = (str: string): string[] => {
    return str.match(/"[^"]*"/g);
}