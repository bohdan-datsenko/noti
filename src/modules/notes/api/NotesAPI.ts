import axios, {CanceledError} from 'axios';
import {INote} from '../types/notes';

const BASE_URL = 'http://localhost:3001';
let abortController = new AbortController();
const abortPreviousRequest = () => {
  if (abortController) {
    abortController.abort();
    abortController = new AbortController();
  }
}

class NotesAPI {
  static async fetchAll() {
    try {
      abortPreviousRequest();
      const {data} = await axios.get<INote[]>(`${BASE_URL}/notes/`, {signal: abortController.signal});
      return {data};
    } catch (err: any) {
      if (!(err instanceof CanceledError)) {
        throw new Error('Failed to fetch notes: ' + err.message);
      }
    }
    return {data: []};
  }

  // todo remove any
  static async updateById(note: INote) {
    try {
      abortPreviousRequest();
      const {data, status} = await axios.patch<INote>(
        `${BASE_URL}/notes/${note.id}`,
        { ...note },
        {signal: abortController.signal}
      );
      return {data, status};
    } catch (err: any) {
      throw new Error(`Failed to update note with id ${note.id}: ` + err.message);
    }
  }

  static async createNote(title: string, text: string) {
    try {
      abortPreviousRequest();
      const {data, status} = await axios.post<INote>(
        `{BASE_URL}/notes/`,
        { title, text },
        {signal: abortController.signal}
      );
      return {data, status};
    } catch (err: any) {
      throw new Error('Failed to create note: ' + err.message);
    }
  }

  static async removeNoteById(id: number) {
    abortPreviousRequest();
    try {
      const {data, status} = await axios.delete<INote>(
        `${BASE_URL}/notes/${id}`,
        {signal: abortController.signal},
      );
      return {data, status};
    } catch (err: any) {
      throw new Error(`Failed to remove note with id ${id}: ` + err.message);
    }
  }
}

export {NotesAPI};