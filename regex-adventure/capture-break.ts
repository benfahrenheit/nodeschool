export = (str: string): string => {
    const matches: RegExpExecArray = /\bx=(\d+)\b/.exec(str);
    return matches ? matches[1] : null;
}