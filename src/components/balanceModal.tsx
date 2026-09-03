import React, { useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import {
  IoClose,
  IoWalletOutline,
} from 'react-icons/io5';
import { HiOutlineCash } from 'react-icons/hi';

interface BalanceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BalanceModal = ({ isOpen, onClose }: BalanceModalProps) => {
  const [step, setStep] = useState(1);
  const [balance, setBalance] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');
  const [isTouched, setIsTouched] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const validatePhone = (value: any) => {
    const digitsOnly = value.replace(/\D/g, '');

    if (digitsOnly.length === 0) {
      return 'Phone number is required';
    }
    if (/[a-zA-Z]/.test(value)) {
      return 'Phone number cannot contain letters';
    }
    if (digitsOnly.length < 10) {
      return 'Phone number must be at least 10 digits';
    }
    if (digitsOnly.length > 15) {
      return 'Phone number is too long';
    }
    return '';
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handlePhoneChange = (e: any) => {
    const value = e.target.value;
    const filtered = value.replace(/[^0-9+\s()\-]/g, '');
    setPhoneNumber(filtered);

    if (isTouched) {
      const errorMsg = validatePhone(filtered);
      setError(errorMsg);
    }
  };
  const handleBlur = () => {
    setIsTouched(true);
    const errorMsg = validatePhone(phoneNumber);
    setError(errorMsg);
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setSubmitted(true);

    const digitsOnly = phoneNumber.replace(/\D/g, '');
    const errorMsg = validatePhone(phoneNumber);

    if (errorMsg) {
      setError(errorMsg);
      setIsTouched(true);
      return;
    }
    console.log('Valid phone number:', digitsOnly);
    // alert(`Phone number submitted: ${phoneNumber}`);
  };

  const digitsOnly = phoneNumber.replace(/\D/g, '');
  const isValid = !error && digitsOnly.length >= 10;


  const handleCheckBalance = () => {
    if (!phoneNumber) {
      alert('Please enter your phone number');
      return;
    }
    // Simulate API call
    const mockBalance = Math.floor(Math.random() * 1000) + 100;
    setBalance(`RWF ${mockBalance}`);
    setStep(2);
  };

  const resetModal = () => {
    setStep(1);
    setPhoneNumber('');
    setBalance('');
  };

  const handleClose = () => {
    resetModal();
    onClose();
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={handleClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/50" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95 translate-y-full"
              enterTo="opacity-100 scale-100 translate-y-0"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100 translate-y-0"
              leaveTo="opacity-0 scale-95 translate-y-full"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-t-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="div"
                  className="flex justify-between items-center border-b border-gray-100 pb-4"
                >
                  <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                    {step === 1 ? (
                      <>
                        <IoWalletOutline className="w-5 h-5 text-[#0072CE]" />
                        Check Balance
                      </>
                    ) : (
                      <>
                        <HiOutlineCash className="w-5 h-5 text-[#0072CE]" />
                        Your Balance
                      </>
                    )}
                  </h3>
                  <button
                    onClick={handleClose}
                    className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <IoClose className="w-6 h-6 text-gray-500" />
                  </button>
                </Dialog.Title>

                {step === 1 ? (
                  // Enter Phone Number
                  <div className="mt-4 space-y-4">
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          className={`w-full px-4 py-2 border rounded-lg focus:ring-1 focus:ring-[#0072CE] focus:border-transparent outline-none transition-colors ${error && isTouched
                            ? 'border-red-500 bg-red-50'
                            : isValid && isTouched
                              ? 'border-green-500 bg-green-50'
                              : 'border-gray-300'
                            }`}
                          placeholder="Enter phone number"
                          value={phoneNumber}
                          onChange={handlePhoneChange}
                          onBlur={handleBlur}
                          maxLength={20}
                          required
                        />

                        {error && isTouched && (
                          <p className="mt-1 text-sm text-red-500 flex items-center">
                            {error}
                          </p>
                        )}
                      </div>
                      <button
                        type="submit"
                        onClick={handleCheckBalance}
                        className="w-1/2 flex mx-auto bg-[#0072CE] text-white py-2 rounded-lg font-semibold hover:bg-[#0062b0] transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
                        disabled={!phoneNumber || !isValid}
                      >
                        Check Balance
                      </button>
                    </form>


                  </div>
                ) : (
                  // Show Balance
                  <div className="mt-4 space-y-4">
                    <div className=" border border-blue-200 rounded-xl p-6">
                      <div className="bg-[#0072CE]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                        <IoWalletOutline className="w-8 h-8 text-[#0072CE]" />
                      </div>
                      <div className='flex flex-col gap-4 '>
                        <div className="mt-3 grid grid-cols-2 gap-4 text-gray-500">
                          <p className="text-base font-medium text-gray-600 ">Phone Number :</p>
                          <span>{phoneNumber}</span>
                        </div>
                        <div className='grid grid-cols-2 gap-4'>
                          <p className="text-base font-medium text-gray-600 ">4G Money Balance :</p>
                          <p className="text-xl font-semibold text-[#0072CE]">{balance}</p>
                        </div>
                        <div className='grid grid-cols-2 gap-4'>
                          <p className="text-base font-medium text-gray-600 ">Data  :</p>
                          <p className="text-xl font-semibold text-[#0072CE]">100MB</p>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={handleClose}
                      className="w-1/2 flex mx-auto bg-[#0072CE] text-white py-2 items-center justify-center  rounded-lg font-semibold hover:bg-[#0062b0] transition-colors"
                    >
                      Done
                    </button>
                  </div>
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
export default BalanceModal;