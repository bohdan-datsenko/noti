export interface INote {
    id: number;
    title: string;
    text: string;
}

export interface NotesState {
    selectedId: number;
    notes: INote[];
}

export enum NoteActionTypes {
    SELECT_NOTE = 'SELECT_NOTE',
    ADD_NOTE = 'ADD_NOTE',
    UPDATE_NOTE = 'UPDATE_NOTE',
    REMOVE_NOTE = 'REMOVE_NOTE'
}

export interface SelectNoteAction {
    type: NoteActionTypes.SELECT_NOTE;
    payload: number;
}

export interface AddNoteAction {
    type: NoteActionTypes.ADD_NOTE;
    payload: INote;
}

export interface UpdateNoteAction {
    type: NoteActionTypes.UPDATE_NOTE;
    payload: INote;
}

export interface RemoveNoteAction {
    type: NoteActionTypes.REMOVE_NOTE;
    payload: number;
}

export type NoteAction = SelectNoteAction | AddNoteAction | RemoveNoteAction | UpdateNoteAction;
