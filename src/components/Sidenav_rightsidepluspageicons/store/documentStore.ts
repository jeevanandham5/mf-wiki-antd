import { create } from 'zustand';
import { Document, Folder, User } from '../types';

interface DocumentStore {
  documents: Document[];
  folders: Folder[];
  currentUser: User;
  currentDocument: Document | null;
  setCurrentDocument: (doc: Document) => void;
  duplicateDocument: (doc: Document, targetPath: string[]) => Document;
  moveDocument: (docId: string, targetPath: string[]) => void;
  convertToWiki: (docId: string) => void;
  updateLastEdited: (docId: string) => void;
  createDocument: (doc: Partial<Document>) => Document;
}

const defaultFolders: Folder[] = [
  {
    id: 'root',
    name: 'Root',
    path: [],
    documents: [],
    subfolders: [
      {
        id: 'personal',
        name: 'Personal',
        path: ['Personal'],
        documents: [],
        subfolders: []
      },
      {
        id: 'work',
        name: 'Work',
        path: ['Work'],
        documents: [],
        subfolders: []
      },
      {
        id: 'projects',
        name: 'Projects',
        path: ['Projects'],
        documents: [],
        subfolders: []
      }
    ]
  }
];

export const useDocumentStore = create<DocumentStore>((set, get) => ({
  documents: [],
  folders: defaultFolders,
  currentUser: {
    id: '1',
    name: 'Current User',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=current-user'
  },
  currentDocument: null,
  
  setCurrentDocument: (doc) => {
    set({ currentDocument: doc });
  },

  createDocument: (docData) => {
    const newDoc: Document = {
      id: Math.random().toString(36).substr(2, 9),
      title: docData.title || 'Untitled',
      content: docData.content || '',
      path: docData.path || [],
      type: docData.type || 'document',
      lastEditedBy: get().currentUser.name,
      lastEditedAt: new Date(),
      isWiki: false
    };

    set((state) => ({
      documents: [...state.documents, newDoc],
      currentDocument: newDoc
    }));

    return newDoc;
  },

  duplicateDocument: (doc, targetPath) => {
    const newDoc: Document = {
      ...doc,
      id: Math.random().toString(36).substr(2, 9),
      title: `${doc.title} (Copy)`,
      path: targetPath,
      lastEditedBy: get().currentUser.name,
      lastEditedAt: new Date()
    };
    set((state) => ({
      documents: [...state.documents, newDoc]
    }));
    return newDoc;
  },

  moveDocument: (docId, targetPath) => {
    set((state) => ({
      documents: state.documents.map(doc =>
        doc.id === docId
          ? { ...doc, path: targetPath, lastEditedAt: new Date(), lastEditedBy: get().currentUser.name }
          : doc
      )
    }));
  },

  convertToWiki: (docId) => {
    set((state) => ({
      documents: state.documents.map(doc =>
        doc.id === docId
          ? {
              ...doc,
              type: 'wiki',
              isWiki: true,
              lastEditedAt: new Date(),
              lastEditedBy: get().currentUser.name
            }
          : doc
      )
    }));
  },

  updateLastEdited: (docId) => {
    set((state) => ({
      documents: state.documents.map(doc =>
        doc.id === docId
          ? { ...doc, lastEditedAt: new Date(), lastEditedBy: get().currentUser.name }
          : doc
      )
    }));
  }
}));