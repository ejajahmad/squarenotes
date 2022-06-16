import React from 'react';
import { AiFillFileAdd } from 'react-icons/ai';
import { useAppContext } from '../../service/context/AppContextProvider';
import NoteCreator from '../Forms/NoteCreator';

export default function NotesContainer() {
    const { showNoteCreator, setShowNoteCreator } = useAppContext();
    return (
        <div>
            <div className="w-full p-3">
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center gap-2"
                    onClick={() =>
                        setShowNoteCreator &&
                        setShowNoteCreator(!showNoteCreator)
                    }
                >
                    Add Note <AiFillFileAdd size={20} />
                </button>
            </div>
            <div className="w-full p-3 pt-0">NotesContainer</div>
            <NoteCreator />
        </div>
    );
}
