import { useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

// TODO move to separate file
export interface IModal {
    children: React.ReactNode;
    modalState: boolean;
    setModalState: React.Dispatch<React.SetStateAction<IModal["modalState"]>>;
}

export const Modal = ({ children, modalState, setModalState }: IModal) => {
    // * Func to detect keyboard event and close modal if the Escape key is pressed
    const closeModalOnEsc = (e: KeyboardEvent) => {
        if (e.key === "Escape") setModalState(false);
    };

    // * Bind keyboard event listener to listen for Escape keydown events whenever modalState changes
    useEffect(() => {
        // * If modal is not displayed then don't add/remove any listener
        if (!modalState) return;

        // * Add keydown listener to document element
        document.documentElement.addEventListener("keydown", closeModalOnEsc);

        // * Remove keydown listener from document element
        return () => document.documentElement.removeEventListener("keydown", closeModalOnEsc);
    }, [modalState]);

    return modalState ? (
        <div className='fixed top-0 left-0 z-40 flex h-full w-full items-center justify-center bg-bg1/60 p-4' onClick={() => setModalState(false)}>
            <div
                className='relative flex h-full w-full flex-col items-center gap-4 overflow-auto rounded-lg border border-bg3 bg-bg2 p-8 lg:w-5/6'
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    className='absolute right-4 top-4 h-8 w-8 rounded-full border border-bg3 bg-bg3 text-onBg hover:border-primary'
                    onClick={() => setModalState(false)}
                >
                    <FontAwesomeIcon icon={faClose} />
                </button>
                {children}
            </div>
        </div>
    ) : null;
};
