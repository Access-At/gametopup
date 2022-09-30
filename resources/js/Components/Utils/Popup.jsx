import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

export default function Popup({ activator, children }) {
    const [isOpen, setOpen] = useState(false);
    const handleOpen = () => setOpen(!isOpen);

    const dialog = isOpen && (
        <Dialog as="div" className="relative z-10" onClose={handleOpen}>
            <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className="fixed inset-0 bg-black bg-opacity-70" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <Dialog.Panel className="flex rounded-sm max-w-2xl container">
                            {children}
                        </Dialog.Panel>
                    </Transition.Child>
                </div>
            </div>
        </Dialog>
    );

    return (
        <>
            {activator({ handleOpen })}
            <Transition appear show={isOpen} as={Fragment}>
                {() => <div>{dialog}</div>}
            </Transition>
        </>
    );
}
