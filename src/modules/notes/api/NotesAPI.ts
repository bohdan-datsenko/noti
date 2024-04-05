import axios from 'axios';
import {INote} from '../types/notes';

const BASE_URL = 'http://localhost:3001';

class NotesAPI {
  static async fetchAll() {
    try {
      const {data, status} = await axios.get<INote[]>(`${BASE_URL}/notes/`);

      return {data, status};
    } catch (err: any) {
      throw new Error('Failed to fetch notes: ' + err.message);
    }
  }

  // todo remove any
  static async updateById(note: INote) {
    try {
      const {data, status} = await axios.patch<INote>(
        `${BASE_URL}/notes/${note.id}`,
        { ...note }
      );
      return {data, status};
    } catch (err: any) {
      throw new Error(`Failed to update note with id ${note.id}: ` + err.message);
    }
  }

  static async createNote(title: string, text: string) {
    try {
      const {data, status} = await axios.post<INote>(
        `${BASE_URL}/notes/`,
        { title, text }
      );
      return {data, status};
    } catch (err: any) {
      throw new Error('Failed to create note: ' + err.message);
    }
  }

  static async removeNoteById(id: number) {
    try {
      const {data, status} = await axios.delete<INote>(
        `${BASE_URL}/notes/${id}`,
      );
      return {data, status};
    } catch (err: any) {
      throw new Error(`Failed to remove note with id ${id}: ` + err.message);
    }
  }
}

export {NotesAPI};