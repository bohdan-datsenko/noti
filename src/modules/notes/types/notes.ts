export interface INote {
    id: number;
    title: string;
    text: string;
}

export interface IDraftNote extends INote {
    newTitle?: string;
    newText?: string;
    isEdited: boolean;
    isNew: boolean;
}