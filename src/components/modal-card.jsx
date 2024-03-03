import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { motion } from "framer-motion";
import { IoIosClose } from "react-icons/io";
export default function ModalCard({ data }) {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        onClick={openModal}
        className="col-span-1 divide-y h-[9.5rem] w-72 hover:cursor-pointer divide-gray-200 rounded-lg bg-white shadow transition-all hover:shadow-lg "
      >
        <div className="flex flex-col gap-2">
          <div className="pt-6 px-6 flex w-full items-center justify-between space-x-6">
            <div className="h-10 w-10 flex-shrink-0 rounded-full bg-gradient-to-r from-violet-500 to-indigo-500" />
            <div className="flex-1 truncate">
              <div className="flex  items-center space-x-3">
                <h3 className="truncate text-lg font-medium text-zinc-900">
                  {data.title.trim()}
                </h3>
              </div>
              <h4 className="text-[0.8rem]">{data.category}</h4>
            </div>
          </div>
        </div>
        <div className="px-6 mt-4 flex items-center justify-between py-2 text-xs text-zinc-500">
          <div className="flex p-1 rounded-md  text-[0.85rem] items-center gap-2">
            {data.tagline}
          </div>
        </div>
      </motion.div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    {data.title}
                  </Dialog.Title>
                  <div>
                    <p className="text-sm">{data.category}</p>
                  </div>
                  <div className="mt-2">
                    <p className=" text-gray-500">{data.content}</p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex top-4 right-5 absolute justify-center rounded-md border border-transparent text-sm font-medium   focus:outline-none "
                      onClick={closeModal}
                    >
                      <IoIosClose className="h-5 w-5" />
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}