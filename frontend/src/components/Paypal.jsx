"use client";

import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Toast,
  ToastToggle,
} from "flowbite-react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { HiCheck } from "react-icons/hi";
import { useState } from "react";

function Paypal({ openModalPaypal, setOpenModalPaypal, course }) {
  const [showToast, setShowToast] = useState(false);

  const initialOptions = {
    clientId: "test", // Replace by real clientId in production
    currency: "USD",
    intent: "capture",
  };

  const handleSuccessPayment = async (details, data) => {
    console.log("Chi tiết đơn hàng:", details);
    console.log("Data:", data);
    setShowToast(true);
    setOpenModalPaypal(false);
    setTimeout(() => {
      setShowToast(false);
    }, 6000);
  };

  return (
    <>
      <Modal show={openModalPaypal} onClose={() => setOpenModalPaypal(false)}>
        <ModalHeader>Thanh toán PayPal</ModalHeader>
        <ModalBody>
          <div className="space-y-6">
            <div className="rounded-lg bg-gray-100 p-4 text-sm text-gray-800 dark:bg-gray-700 dark:text-gray-200">
              <div className="mb-1">
                <span className="font-semibold">Tên khóa học: </span>
                {course?.title}
              </div>
              <div className="mb-1">
                <span className="font-semibold">Giá: </span>
                {course?.price?.toLocaleString()} VNĐ
              </div>
              <div>
                <span className="font-semibold">Giáo viên: </span>
                {course?.teacher?.name}
              </div>
            </div>

            <PayPalScriptProvider options={initialOptions}>
              <PayPalButtons
                style={{ layout: "vertical" }}
                createOrder={(data, actions) => {
                  return actions.order.create({
                    purchase_units: [
                      {
                        amount: {
                          value: "0.01", // TODO: đổi thành giá thật
                        },
                      },
                    ],
                  });
                }}
                onApprove={async (data, actions) => {
                  const details = await actions.order.capture();
                  handleSuccessPayment(details, data);
                }}
                onError={(err) => {
                  console.error("Lỗi thanh toán:", err);
                }}
              />
            </PayPalScriptProvider>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button onClick={() => setOpenModalPaypal(false)}>Đóng</Button>
        </ModalFooter>
      </Modal>

      {/* ✅ Toast Thành công */}
      {showToast && (
        <div className="fixed left-1/2 top-6 z-[9999] -translate-x-1/2">
          <Toast>
            <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
              <HiCheck className="h-5 w-5" />
            </div>
            <div className="ml-3 text-sm font-normal">
              Thanh toán thành công!
            </div>
            <ToastToggle onDismiss={() => setShowToast(false)} />
          </Toast>
        </div>
      )}
    </>
  );
}

export default Paypal;
