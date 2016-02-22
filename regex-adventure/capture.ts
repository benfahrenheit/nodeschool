export = (str: string): string => {
    const matches: RegExpExecArray = /x=(\d+)/.exec(str);
    return matches ? matches[1] : null;
}