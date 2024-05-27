import React, { useState } from 'react'
import PersonIcon from '@mui/icons-material/Person';
import DoneIcon from '@mui/icons-material/Done';
import CancelIcon from '@mui/icons-material/Cancel';
import AdminHeader from "../AdminHeader";
const GetAllVendors = () => {
    const [open,SetOpen] = useState(false);
    const handleOpen = ()=>{
        SetOpen(true);
    }
    const handleClose = ()=>{
        SetOpen(false);
    }
    const overlayClasses = `${open ?  'hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500' : 'mt-0 opacity-0'} shadow-lg ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto`;
  return (
    <>
    <AdminHeader/>
  {/* Table Section */}
  <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    {/* Card */}
    <div className="flex flex-col">
      <div className="-m-1.5 overflow-x-auto">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-neutral-900 dark:border-neutral-700">
            {/* Table */}
            <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
              <thead className="bg-gray-50 dark:bg-neutral-900">
                <tr>
                  <th scope="col" className="px-6 py-3 text-start">
                    <div className="flex items-center gap-x-2">
                      <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                        Business Name 
                      </span>
                      {/* <div className="hs-tooltip">
                        <div className="hs-tooltip-toggle">
                          <svg
                            className="flex-shrink-0 size-4 text-gray-500 dark:text-neutral-500"
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <circle cx={12} cy={12} r={10} />
                            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                            <path d="M12 17h.01" />
                          </svg>
                          <span
                            className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-neutral-700"
                            role="tooltip"
                          >
                            Invoice number related popup
                          </span>
                        </div>
                      </div> */}
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-3 text-start">
                    <div className="flex items-center gap-x-2">
                      <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                        GST Number
                      </span>
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-3 text-start">
                    <div className="flex items-center gap-x-2">
                      <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                        Business Registration Number
                      </span>
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-3 text-start">
                    <div className="flex items-center gap-x-2">
                      <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                        Email
                      </span>
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-3 text-start">
                    <div className="flex items-center gap-x-2">
                      <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                        Phone Number
                      </span>
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-3 text-end" />
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                <tr className="bg-white hover:bg-gray-50 dark:bg-neutral-900 dark:hover:bg-neutral-800">
                  <td className="size-px whitespace-nowrap">
                    <button
                      type="button"
                      className="block"
                      data-hs-overlay="#hs-ai-invoice-modal"
                    >
                      <span className="block px-6 py-2">
                        <span className="font-mono text-sm text-blue-600 dark:text-blue-500">
                          #ADUQ2189H1-0038
                        </span>
                      </span>
                    </button>
                  </td>
                  <td className="size-px whitespace-nowrap">
                    <button
                      type="button"
                      className="block"
                      data-hs-overlay="#hs-ai-invoice-modal"
                    >
                      <span className="block px-6 py-2">
                        <span className="text-sm text-gray-600 dark:text-neutral-400">
                          US $400.00
                        </span>
                      </span>
                    </button>
                  </td>
                  <td className="size-px whitespace-nowrap">
                    <button
                      type="button"
                      className="block"
                      data-hs-overlay="#hs-ai-invoice-modal"
                    >
                      <span className="block px-6 py-2">
                        <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full dark:bg-teal-500/10 dark:text-teal-500">
                          <svg
                            className="size-2.5"
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                            fill="currentColor"
                            viewBox="0 0 16 16"
                          >
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                          </svg>
                          Paid
                        </span>
                      </span>
                    </button>
                  </td>
                  <td className="size-px whitespace-nowrap">
                    <button
                      type="button"
                      className="block"
                      data-hs-overlay="#hs-ai-invoice-modal"
                    >
                      <span className="block px-6 py-2">
                        <span className="text-sm text-gray-600 dark:text-neutral-400">
                          10 Jan 2023
                        </span>
                      </span>
                    </button>
                  </td>
                  <td className="size-px whitespace-nowrap">
                    <button
                      type="button"
                      className="block"
                      data-hs-overlay="#hs-ai-invoice-modal"
                    >
                      <span className="block px-6 py-2">
                        <span className="text-sm text-gray-600 dark:text-neutral-400">
                          28 Dec, 12:12
                        </span>
                      </span>
                    </button>
                  </td>
                  <td className="size-px whitespace-nowrap">
                    <button
                      type="button"
                      className="block"
                      data-hs-overlay="#hs-ai-invoice-modal"
                      onClick={handleOpen}
                    >
                      <span className="px-6 py-1.5">
                        <span className="py-1 px-2 inline-flex justify-center items-center gap-2 rounded-lg border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
                          <svg
                            className="flex-shrink-0 size-4"
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                            fill="currentColor"
                            viewBox="0 0 16 16"
                          >
                            <path d="M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .801.13l.5 1A.5.5 0 0 1 15 2v12a.5.5 0 0 1-.053.224l-.5 1a.5.5 0 0 1-.8.13L13 14.707l-.646.647a.5.5 0 0 1-.708 0L11 14.707l-.646.647a.5.5 0 0 1-.708 0L9 14.707l-.646.647a.5.5 0 0 1-.708 0L7 14.707l-.646.647a.5.5 0 0 1-.708 0L5 14.707l-.646.647a.5.5 0 0 1-.708 0L3 14.707l-.646.647a.5.5 0 0 1-.801-.13l-.5-1A.5.5 0 0 1 1 14V2a.5.5 0 0 1 .053-.224l.5-1a.5.5 0 0 1 .367-.27zm.217 1.338L2 2.118v11.764l.137.274.51-.51a.5.5 0 0 1 .707 0l.646.647.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.509.509.137-.274V2.118l-.137-.274-.51.51a.5.5 0 0 1-.707 0L12 1.707l-.646.647a.5.5 0 0 1-.708 0L10 1.707l-.646.647a.5.5 0 0 1-.708 0L8 1.707l-.646.647a.5.5 0 0 1-.708 0L6 1.707l-.646.647a.5.5 0 0 1-.708 0L4 1.707l-.646.647a.5.5 0 0 1-.708 0l-.509-.51z" />
                            <path d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm8-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z" />
                          </svg>
                          View
                        </span>
                      </span>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            {/* End Table */}
            {/* Footer */}
            <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-t border-gray-200 dark:border-neutral-700">
              <div>
                <p className="text-sm text-gray-600 dark:text-neutral-400">
                  <span className="font-semibold text-gray-800 dark:text-neutral-200">
                    9
                  </span>{" "}
                  results
                </p>
              </div>
              <div>
                <div className="inline-flex gap-x-2">
                  <button
                    type="button"
                    className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
                  >
                    <svg
                      className="size-3"
                      width={16}
                      height={16}
                      viewBox="0 0 16 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.506 1.64001L4.85953 7.28646C4.66427 7.48172 4.66427 7.79831 4.85953 7.99357L10.506 13.64"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                      />
                    </svg>
                    Prev
                  </button>
                  <button
                    type="button"
                    className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
                  >
                    Next
                    <svg
                      className="size-3"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.50598 2L10.1524 7.64645C10.3477 7.84171 10.3477 8.15829 10.1524 8.35355L4.50598 14"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            {/* End Footer */}
          </div>
        </div>
      </div>
    </div>
    {/* End Card */}
  </div>
  {/* End Table Section */}
  {/* Modal */}
  { (

  <div
    id="hs-ai-invoice-modal"
    className="hs-overlayhidden size-full fixed top-12 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none"
  >
    <div className={overlayClasses}>
      <div className="relative flex flex-col bg-white shadow-lg rounded-xl pointer-events-auto dark:bg-neutral-800">
        <div className="relative overflow-hidden min-h-32 bg-gray-900 text-center rounded-t-xl">
          {/* Close Button */}
          <div className="absolute top-2 end-2">
            <button
              type="button"
              className="inline-flex flex-shrink-0 justify-center items-center size-8 rounded-lg text-gray-500 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all text-sm dark:focus:ring-neutral-700 dark:focus:ring-offset-gray-800"
              data-hs-overlay="#hs-ai-invoice-modal"
              onClick={handleClose}
            >
              <span className="sr-only">Close</span>
              <svg
                className="flex-shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
          {/* End Close Button */}
          {/* SVG Background Element */}
          <figure className="absolute inset-x-0 bottom-0">
            <svg
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 1920 100.1"
            >
              <path
                fill="currentColor"
                className="fill-white dark:fill-neutral-800"
                d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
              />
            </svg>
          </figure>
          {/* End SVG Background Element */}
        </div>
        <div className="relative z-10 -mt-12">
          {/* Icon */}
          <span className="mx-auto flex justify-center items-center size-[62px] rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400">
            {/* <svg
              className="size-6"
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .801.13l.5 1A.5.5 0 0 1 15 2v12a.5.5 0 0 1-.053.224l-.5 1a.5.5 0 0 1-.8.13L13 14.707l-.646.647a.5.5 0 0 1-.708 0L11 14.707l-.646.647a.5.5 0 0 1-.708 0L9 14.707l-.646.647a.5.5 0 0 1-.708 0L7 14.707l-.646.647a.5.5 0 0 1-.708 0L5 14.707l-.646.647a.5.5 0 0 1-.708 0L3 14.707l-.646.647a.5.5 0 0 1-.801-.13l-.5-1A.5.5 0 0 1 1 14V2a.5.5 0 0 1 .053-.224l.5-1a.5.5 0 0 1 .367-.27zm.217 1.338L2 2.118v11.764l.137.274.51-.51a.5.5 0 0 1 .707 0l.646.647.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.509.509.137-.274V2.118l-.137-.274-.51.51a.5.5 0 0 1-.707 0L12 1.707l-.646.647a.5.5 0 0 1-.708 0L10 1.707l-.646.647a.5.5 0 0 1-.708 0L8 1.707l-.646.647a.5.5 0 0 1-.708 0L6 1.707l-.646.647a.5.5 0 0 1-.708 0L4 1.707l-.646.647a.5.5 0 0 1-.708 0l-.509-.51z" />
              <path d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm8-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z" />
            </svg> */}
            <PersonIcon/>
          </span>
          {/* End Icon */}
        </div>
        {/* Body */}
        <div className="p-4 sm:p-7 overflow-y-auto">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
              Vendor Details
            </h3>
            {/* <p className="text-sm text-gray-500 dark:text-neutral-500">
              Invoice #3682303
            </p> */}
          </div>
          {/* Grid */}
          <div className="mt-5 sm:mt-10 grid grid-cols-2 sm:grid-cols-3 gap-5">
            <div>
              <span className="block text-xs uppercase text-gray-500 dark:text-neutral-500">
                Company Website URL:
              </span>
              <span className="block text-sm font-medium text-gray-800 dark:text-neutral-200">
                https://google.com
              </span>
            </div>
            {/* End Col */}
            <div className='ml-9'>
              <span className="block text-xs uppercase text-gray-500 dark:text-neutral-500">
                First Name:
              </span>
              <span className="block text-sm font-medium text-gray-800 dark:text-neutral-200">
                Abcd efg
              </span>
            </div>
            {/* End Col */}
            <div className='ml-5' >
              <span className="block text-xs uppercase text-gray-500 dark:text-neutral-500">
                Last Name:
              </span>
              <div className="flex items-center gap-x-2">
                {/* <svg
                  className="size-5"
                  width={400}
                  height={248}
                  viewBox="0 0 400 248"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0)">
                    <path d="M254 220.8H146V26.4H254V220.8Z" fill="#FF5F00" />
                    <path
                      d="M152.8 123.6C152.8 84.2 171.2 49 200 26.4C178.2 9.2 151.4 0 123.6 0C55.4 0 0 55.4 0 123.6C0 191.8 55.4 247.2 123.6 247.2C151.4 247.2 178.2 238 200 220.8C171.2 198.2 152.8 163 152.8 123.6Z"
                      fill="#EB001B"
                    />
                    <path
                      d="M400 123.6C400 191.8 344.6 247.2 276.4 247.2C248.6 247.2 221.8 238 200 220.8C228.8 198.2 247.2 163 247.2 123.6C247.2 84.2 228.8 49 200 26.4C221.8 9.2 248.6 0 276.4 0C344.6 0 400 55.4 400 123.6Z"
                      fill="#F79E1B"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect width={400} height="247.2" fill="white" />
                    </clipPath>
                  </defs>
                </svg> */}
                <span className="block text-sm font-medium text-gray-800 dark:text-neutral-200">
                  Abcd Efgh
                </span>
              </div>
            </div>
            {/* End Col */}
          </div>
          {/* End Grid */}
          <div className="mt-5 sm:mt-10">
            <h4 className="text-xs font-semibold uppercase text-gray-800 dark:text-neutral-200">
              Bank Details
            </h4>
            <ul className="mt-3 flex flex-col">
              <li className="inline-flex items-center gap-x-2 py-3 px-4 text-sm border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:border-neutral-700 dark:text-neutral-200">
                <div className="flex items-center justify-between w-full">
                  <span>Bank Account Name</span>
                  <span>AAAAAAAAAAAA</span>
                </div>
              </li>
              <li className="inline-flex items-center gap-x-2 py-3 px-4 text-sm border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:border-neutral-700 dark:text-neutral-200">
                <div className="flex items-center justify-between w-full">
                  <span>Bank Account Number</span>
                  <span>123AF737B29</span>
                </div>
              </li>
              <li className="inline-flex items-center gap-x-2 py-3 px-4 text-sm bg-gray-50 border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-200">
                <div className="flex items-center justify-between w-full">
                  <span>IFSC Code</span>
                  <span>9B234BIG432</span>
                </div>
              </li>
              <li className="inline-flex items-center gap-x-2 py-3 px-4 text-sm bg-gray-50 border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-200">
                <div className="flex items-center justify-between w-full">
                  <span>Account Holder Name</span>
                  <span>ABCDEFGH</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="mt-5 sm:mt-10">
            <h4 className="text-xs font-semibold uppercase text-gray-800 dark:text-neutral-200">
              Logistics and Operations
            </h4>
            <ul className="mt-3 flex flex-col">
              <li className="inline-flex items-center gap-x-2 py-3 px-4 text-sm border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:border-neutral-700 dark:text-neutral-200">
                <div className="flex items-center justify-between w-full">
                  <span>Expected Order Processing Time</span>
                  <span>24 Hours</span>
                </div>
              </li>
              <li className="inline-flex items-center gap-x-2 py-3 px-4 text-sm border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:border-neutral-700 dark:text-neutral-200">
                <div className="flex items-center justify-between w-full">
                  <span>Average Shipping Time</span>
                  <span>48 Hours</span>
                </div>
              </li>
            </ul>
          </div>
          {/* Product Description */}
          <div className="mt-5 sm:mt-10">
            <span>Product Categories</span>
            <div className="max-w-sm space-y-3 mt-3 flex flex-col">
              <textarea className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" rows="3" placeholder="Product Categories" readOnly></textarea>
            </div>
          </div>
          <div className="mt-5 sm:mt-10">
            <span>Product Description</span>
            <div className="max-w-sm space-y-3 mt-3 flex flex-col">
              <textarea className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" rows="3" placeholder="Product Description" readOnly></textarea>
            </div>
          </div>
          {/* Button */}
          {/* <div className="mt-5 flex justify-end gap-x-2"> */}
            {/* <a
              className="py-2 px-3 inline-flex justify-center bg-green-600  hover:bg-green-700 text-white items-center gap-2 rounded-lg border font-medium text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-neutral-800 dark:hover:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
              href="#"
            > */}
              {/* <svg
                className="flex-shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1={12} x2={12} y1={15} y2={3} />
              </svg> */}
              {/* <DoneIcon/>Accept */}
            {/* </a> */}
            {/* <a
              className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-red-600 text-white hover:bg-red-700 disabled:opacity-50 disabled:pointer-events-none"
              href="#"
            > */}
              {/* <svg
                className="flex-shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 6 2 18 2 18 9" />
                <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                <rect width={12} height={8} x={6} y={14} />
              </svg> */}
              {/* <CancelIcon/> Reject
            </a> */}
          {/* </div> */}
          {/* End Buttons */}
          <div className="mt-5 sm:mt-10">
            <p className="text-sm text-gray-500 dark:text-neutral-500">
              If you have any questions, please contact us at{" "}
              <a
                className="inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-500"
                href="#"
              >
                example@site.com
              </a>{" "}
              or call at{" "}
              <a
                className="inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-500"
                href="tel:+1898345492"
              >
                +1 898-34-5492
              </a>
            </p>
          </div>
        </div>
        {/* End Body */}
      </div>
    </div>
  </div>
  )}
  {/* End Modal */}
</>

  )
}
export default GetAllVendors;