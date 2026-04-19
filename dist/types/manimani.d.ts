declare module 'manimani' {
    export interface MoraNode {
        pos: number;
        val: string;
        children: MoraNode[];
        add(val: string): MoraNode;
    }
    export interface Mora {
        from: string;
        pos: number;
        node: MoraNode[];
    }
    export type TokenizeCallback = (err: Error | null, moras?: Mora[]) => void;
    export function tokenize(dic: string, sentence: string, callback: TokenizeCallback): void;
}
