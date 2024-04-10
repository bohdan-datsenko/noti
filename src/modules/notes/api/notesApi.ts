import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {INote} from '../types/notes';

const BASE_URL = 'http://localhost:3001/notes/';

const notesApi = createApi({
  reducerPath: 'notesApi',
  baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
  tagTypes: ['notes'],
  endpoints: (builder) => ({
    fetchNotes: builder.query<INote[], void>({
      query: () => '', // todo can improve readability?
      providesTags: ['notes']
    }),
    removeNoteById: builder.mutation<number, number>({
      query: (id: number) => ({
        url: id.toString(),
        method: 'DELETE',
      }),
      transformResponse: (response: {id: number}) => response.id,
      invalidatesTags: ['notes'],
    }),
    createNote: builder.mutation<INote, Omit<INote, 'id'>>({
      query: (note) => ({
        url: '',
        method: 'POST',
        body: {title: note.title, text: note.text},
      }),
      invalidatesTags: ['notes'],
    }),
    updateNote: builder.mutation<INote, INote>({
      query: ((note) => ({
        url: note.id.toString(),
        method: 'PATCH',
        body: {title: note.title, text: note.text},
      })),
      invalidatesTags: ['notes'],
    }),
  }),
});

export const {
  useFetchNotesQuery,
} = notesApi;
export const {
  fetchNotes,
  removeNoteById,
  createNote,
  updateNote,
} = notesApi.endpoints
export default notesApi;