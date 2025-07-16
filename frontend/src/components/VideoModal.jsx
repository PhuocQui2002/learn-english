"use client";

import { Modal, ModalBody, ModalHeader } from "flowbite-react";

function VideoModal({ openModal, onClose }) {
  return (
    <Modal show={openModal} onClose={onClose} size="4xl">
      <ModalHeader>
        <span className="text-xl font-semibold text-gray-900 dark:text-white">
          Giới thiệu khóa học tiếng Anh online
        </span>
      </ModalHeader>
      <ModalBody className="p-0">
        <div className="h-[600px] w-full">
          <iframe
            className="h-full w-full rounded-b-lg"
            src="https://www.youtube.com/embed/66CbTxYqCyw?autoplay=1"
            title="Giới thiệu khóa học tiếng Anh online"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </ModalBody>
    </Modal>
  );
}

export default VideoModal;
