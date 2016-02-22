import * as marked from "marked";

export = (str: string): string => {
    const md = marked(str);
    return md.replace(/@@(.+?)@@/g, "<blink>$1</blink>");
}