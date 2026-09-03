import React, { useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import {
  IoClose,
  IoCheckmarkCircle,
  IoWalletOutline,
  IoArrowBack,
} from 'react-icons/io5';
import Image from 'next/image';

const RechargeModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  type Errors = {
    phoneNumber?: string;
    amount?: string;
    paymentPhone?: string;
  };

  const [step, setStep] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [paymentPhone, setPaymentPhone] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Errors>({});

  // Validation functions
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const validatePhoneNumber = (phone: any) => {
    const digitsOnly = phone.replace(/\D/g, '');

    if (digitsOnly.length === 0) {
      return 'Phone number is required';
    }
    if (/[a-zA-Z]/.test(phone)) {
      return 'Phone number cannot contain letters';
    }
    if (digitsOnly.length < 10) {
      return 'Phone number must be at least 10 digits';
    }
    if (digitsOnly.length > 15) {
      return 'Phone number is too long (max 15 digits)';
    }
    return '';
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const validateAmount = (value: any) => {
    // Remove any non-numeric characters except decimal point
    const cleanValue = value.replace(/[^0-9.]/g, '');
    if (!cleanValue || cleanValue === '0' || cleanValue === '0.00') {
      return 'Amount is required';
    }
    const numAmount = parseFloat(cleanValue);
    if (isNaN(numAmount) || numAmount <= 0) {
      return 'Please enter a valid amount';
    }
    if (numAmount < 100) {
      return 'Minimum amount is 100 RWF';
    }
    return '';
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const validatePaymentPhone = (phone: any) => {
    const digitsOnly = phone.replace(/\D/g, '');

    if (digitsOnly.length === 0) {
      return 'Payment phone number is required';
    }

    if (/[a-zA-Z]/.test(phone)) {
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

  // Handle phone input change
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handlePhoneChange = (e: any) => {
    const value = e.target.value;
    const filtered = value.replace(/[^0-9+\s()\-]/g, '');
    setPhoneNumber(filtered);

    // Clear error when typing
    if (errors.phoneNumber) {
      setErrors(prev => ({ ...prev, phoneNumber: '' }));
    }
  };

  // Handle amount input change
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleAmountChange = (e: any) => {
    const value = e.target.value;
    // Allow only numbers and decimal point
    const filtered = value.replace(/[^0-9.]/g, '');
    setAmount(filtered);

    if (errors.amount) {
      setErrors(prev => ({ ...prev, amount: '' }));
    }
  };

  // Handle payment phone change
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handlePaymentPhoneChange = (e: any) => {
    const value = e.target.value;
    const filtered = value.replace(/[^0-9+\s()\-]/g, '');
    setPaymentPhone(filtered);

    if (errors.paymentPhone) {
      setErrors(prev => ({ ...prev, paymentPhone: '' }));
    }
  };

  const handleRecharge = () => {
    const newErrors: Errors = {};

    // Validate phone number
    const phoneError = validatePhoneNumber(phoneNumber);
    if (phoneError) newErrors.phoneNumber = phoneError;

    // Validate amount
    const amountError = validateAmount(amount);
    if (amountError) newErrors.amount = amountError;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Move to payment method step
    setStep(2);
  };

  const handlePayment = () => {
    const newErrors: Errors = {};

    // Validate payment method
    if (!paymentMethod) {
      alert('Please select a payment method');
      return;
    }

    // Validate payment phone
    const paymentPhoneError = validatePaymentPhone(paymentPhone);
    if (paymentPhoneError) {
      newErrors.paymentPhone = paymentPhoneError;
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Process payment
    setIsLoading(true);

    // Simulate payment processing
    setTimeout(() => {
      setIsLoading(false);
      // Move to confirmation step (step 3)
      setStep(3);
    }, 1500);
  };

  const resetModal = () => {
    setStep(1);
    setPhoneNumber('');
    setAmount('');
    setPaymentMethod('');
    setPaymentPhone('');
    setErrors({});
    setIsLoading(false);
  };

  const handleClose = () => {
    resetModal();
    onClose();
  };

  const goBack = () => {
    setStep(1);
    setPaymentMethod('');
    setPaymentPhone('');
    setErrors({});
  };

  // Get digits only for display
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const getDigitsOnly = (phone: any) => phone.replace(/\D/g, '');

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
                    {step === 1 && (
                      <>
                        <IoWalletOutline className="w-5 h-5 text-[#0072CE]" />
                        Recharge
                      </>
                    )}
                    {step === 2 && (
                      <>
                        <button
                          onClick={goBack}
                          className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                        >
                          <IoArrowBack className="w-5 h-5 text-gray-600" />
                        </button>
                        <span>Select Payment Method</span>
                      </>
                    )}
                    {step === 3 && (
                      <>
                        <span>Payment Initiated</span>
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

                {step === 1 && (
                  // Recharge Form
                  <div className="mt-4 space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-1 focus:ring-[#0072CE] focus:border-transparent outline-none transition-colors ${errors.phoneNumber
                          ? 'border-red-500 bg-red-50'
                          : phoneNumber && getDigitsOnly(phoneNumber).length >= 10
                            ? 'border-green-500 bg-green-50'
                            : 'border-gray-300'
                          }`}
                        placeholder="Enter phone number"
                        value={phoneNumber}
                        onChange={handlePhoneChange}
                        maxLength={20}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Amount (RWF) <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-1 focus:ring-[#0072CE] focus:border-transparent outline-none transition-colors ${errors.amount
                          ? 'border-red-500 bg-red-50'
                          : amount && parseFloat(amount) >= 100
                            ? 'border-green-500 bg-green-50'
                            : 'border-gray-300'
                          }`}
                        placeholder="Enter amount"
                        value={amount}
                        onChange={handleAmountChange}
                      />
                      {errors.amount && (
                        <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                          <span></span> {errors.amount}
                        </p>
                      )}
                      {/* {amount && !errors.amount && parseFloat(amount) >= 100 && (
                        <p className="mt-1 text-sm text-green-500 flex items-center gap-1">
                          <span>✓</span> Valid amount
                        </p>
                      )} */}
                      {amount && parseFloat(amount) > 0 && parseFloat(amount) < 100 && (
                        <p className="mt-1 text-xs text-yellow-500 flex items-center gap-1">
                          Minimum amount is 100 RWF
                        </p>
                      )}
                    </div>

                    <button
                      onClick={handleRecharge}
                      className="w-1/2 flex mx-auto bg-[#0072CE] text-white py-2 rounded-lg font-semibold hover:bg-[#0062b0] transition-colors items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={!phoneNumber || !amount || getDigitsOnly(phoneNumber).length < 10 || parseFloat(amount) < 100}
                    >
                      Recharge
                    </button>
                  </div>
                )}

                {step === 2 && (
                  // Payment Method
                  <div className="mt-4 space-y-4">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-sm text-gray-600 flex items-center gap-3">
                        Amount : <span className="font-semibold text-gray-900">{amount} RWF</span>
                      </p>
                      <p className="text-sm text-gray-600 flex items-center gap-2 mt-1">
                        Recharge for : <span className="font-semibold text-gray-900">{phoneNumber}</span>
                      </p>
                    </div>

                    <div className="space-y-3">
                      <button
                        onClick={() => {
                          setPaymentMethod('MoMo');
                          setErrors(prev => ({ ...prev, paymentPhone: '' }));
                        }}
                        className={`w-full flex items-center justify-between p-3 border rounded-lg transition-colors ${paymentMethod === 'MoMo'
                          ? 'border-[#0072CE] bg-blue-50'
                          : 'border-gray-300 hover:border-gray-400'
                          }`}
                      >
                        <span className="font-medium flex items-center gap-2">
                          <Image src="/assets/logos/mtnlogo.jpg" alt="MoMo" width={30} height={30} />
                          Mobile Money (MoMo)
                        </span>
                        {paymentMethod === 'MoMo' && (
                          <IoCheckmarkCircle className="w-6 h-6 text-[#0072CE]" />
                        )}
                      </button>

                      <button
                        onClick={() => {
                          setPaymentMethod('Airtel');
                          setErrors(prev => ({ ...prev, paymentPhone: '' }));
                        }}
                        className={`w-full flex items-center justify-between p-3 border rounded-lg transition-colors ${paymentMethod === 'Airtel'
                          ? 'border-[#0072CE] bg-blue-50'
                          : 'border-gray-300 hover:border-gray-400'
                          }`}
                      >
                        <span className="font-medium flex items-center gap-2">
                          <Image src="/assets/logos/Airtellogo.png" alt="Airtel Money" width={30} height={30} />
                          Airtel Money
                        </span>
                        {paymentMethod === 'Airtel' && (
                          <IoCheckmarkCircle className="w-6 h-6 text-[#0072CE]" />
                        )}
                      </button>
                    </div>

                    {paymentMethod && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          {paymentMethod} Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          className={`w-full px-4 py-2 border rounded-lg focus:ring-1 focus:ring-[#0072CE] focus:border-transparent outline-none transition-colors ${errors.paymentPhone
                            ? 'border-red-500 bg-red-50'
                            : paymentPhone && getDigitsOnly(paymentPhone).length >= 10
                              ? 'border-green-500 bg-green-50'
                              : 'border-gray-300'
                            }`}
                          placeholder={`Enter ${paymentMethod} phone number`}
                          value={paymentPhone}
                          onChange={handlePaymentPhoneChange}
                          maxLength={20}
                        />
                        {errors.paymentPhone && (
                          <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                            {errors.paymentPhone}
                          </p>
                        )}
                        {/* {paymentPhone && !errors.paymentPhone && getDigitsOnly(paymentPhone).length >= 10 && (
                          <p className="mt-1 text-sm text-green-500 flex items-center gap-1">
                            <span>✓</span> Valid phone number
                          </p>
                        )}
                        {paymentPhone && (
                          <p className="mt-1 text-xs text-gray-400">
                            {getDigitsOnly(paymentPhone).length}/15 digits
                          </p>
                        )} */}
                      </div>
                    )}

                    <button
                      onClick={handlePayment}
                      disabled={!paymentMethod || !paymentPhone || getDigitsOnly(paymentPhone).length < 10 || isLoading}
                      className="w-1/2 flex mx-auto bg-[#0072CE] text-white py-2 rounded-lg font-semibold hover:bg-[#0062b0] transition-colors items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isLoading ? (
                        <>
                          <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </>
                      ) : (
                        'Pay Now'
                      )}
                    </button>
                  </div>
                )}

                {step === 3 && (
                  // Confirmation Step
                  <div className="mt-4">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <IoCheckmarkCircle className="w-10 h-10 text-green-500" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Your recharge has been initiated successfully!
                      </h3>
                      <p className="text-sm text-gray-600 mb-6">
                        Please Authorize the payment amount on your Mobile Phone by entering your {paymentMethod} Pin to confirm payment. Thank you.
                        To approve your transaction dial *182*7*1#.
                      </p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Amount</span>
                        <span className="font-semibold text-gray-900">{amount} RWF</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Recharge for</span>
                        <span className="font-semibold text-gray-900">{phoneNumber}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Payment Method</span>
                        <span className="font-semibold text-gray-900">{paymentMethod}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Payment from</span>
                        <span className="font-semibold text-gray-900">{paymentPhone}</span>
                      </div>
                      <div className="flex justify-between text-sm pt-2 border-t border-gray-200">
                        <span className="text-gray-600">Status</span>
                        <span className="font-semibold text-green-500">Completed</span>
                      </div>
                    </div>
                    <button
                      onClick={handleClose}
                      className="w-1/2 flex mx-auto bg-[#0072CE] text-white py-2 rounded-lg font-semibold hover:bg-[#0062b0] transition-colors items-center justify-center gap-2 mt-6"
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
export default RechargeModal;