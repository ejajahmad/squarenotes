import { Transition } from '@headlessui/react';
import React from 'react';
import { MdClose } from 'react-icons/md';
import { useAppContext } from '../../service/context/AppContextProvider';

export default function NoteCreator() {
    const { showNoteCreator } = useAppContext();

    return (
        <Transition
            show={showNoteCreator}
            enter="transition-opacity duration-75"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
        >
            <form className="note w-[90%] h-[90%] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-lg z-10 bg-white rounded-md text-center">
                Note Creator
                <MdClose className="absolute top-1/2 right-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </form>
        </Transition>
    );
}
