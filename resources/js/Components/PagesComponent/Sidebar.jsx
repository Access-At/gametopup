import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import MenuSide from "../Utils/MenuSide";

export default function Sidebar({ activator, Auth }) {
    const [isOpen, setIsOpen] = useState(false);

    const content = isOpen && (
        <Dialog
            as="div"
            className="relative z-10 lg:hidden"
            onClose={() => setIsOpen(false)}
        >
            <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className="fixed inset-0 bg-black opacity-90 sm:bg-opacity-70" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 -translate-x-8"
                        enterTo="opacity-100 translate-x-"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-x-8"
                        leaveTo="opacity-0 -translate-x-8"
                    >
                        <Dialog.Panel className="relative rounded-sm sm:bg-primary-500 px-5 w-full text-white sm:max-w-md">
                            <MenuSide setIsOpen={setIsOpen} Auth={Auth} />
                        </Dialog.Panel>
                    </Transition.Child>
                </div>
            </div>
        </Dialog>
    );

    return (
        <>
            {activator({ setIsOpen })}
            <Transition appear show={isOpen} as={Fragment}>
                {() => <div>{content}</div>}
            </Transition>
        </>
    );
}
