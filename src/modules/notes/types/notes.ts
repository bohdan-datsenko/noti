export interface INote {
    id: number;
    title: string;
    text: string;
}

export interface IEditedNote extends INote {
    isEdited: boolean;
    isNew: boolean;
    draftTitle: string;
    draftText: string;
}