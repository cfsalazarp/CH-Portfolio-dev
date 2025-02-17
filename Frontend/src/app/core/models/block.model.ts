export type TextBlock = {
    type: "text";
    text: string;
    bold?: boolean;
    italic?: true;
    underline?: true;
    strikethrough?: true;
    code?: boolean;
};

export type LinkBlock = {
    type: "link";
    url: string;
    children: TextBlock[];
};

export interface ParagraphBlock {
    type: "paragraph";
    children: Array<TextBlock | LinkBlock>;
}

export interface ListItemBlock {
    type: "list-item";
    children: TextBlock[];
}

export interface ListBlock {
    type: "list";
    format: "unordered" | "ordered";
    children: ListItemBlock[];
}

export interface HeadingBlock {
    type: "heading";
    level: number;
    children: TextBlock[];
}

export type Block = ParagraphBlock | ListBlock | HeadingBlock;