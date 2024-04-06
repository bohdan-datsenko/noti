export interface INote {
    id: number;
    title: string;
    text: string;
}

export interface IDraftNote extends INote {
    draftTitle?: string;
    draftText?: string;
    isEdited: boolean;
    isNew: boolean;
}