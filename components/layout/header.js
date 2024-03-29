/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";

export default function Header() {
  return (
    <Popover className="relative bg-white">
      {({ open }) => (
        <>
          <div
            className="absolute inset-0 shadow pointer-events-none"
            aria-hidden="true"
          />
          <div className="relative">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-5 sm:px-6 sm:py-4 lg:px-8 md:justify-start md:space-x-10">
              <div>
                <a href="#" className="flex">
                  <span className="sr-only">Workflow</span>
                  <img
                    className="h-8 w-auto sm:h-10"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                    alt=""
                  />
                </a>
              </div>
              <div className="-mr-2 -my-2 md:hidden">
                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
              <div className="hidden md:flex-1 md:flex md:items-center md:justify-between">
                <Popover.Group as="nav" className="flex space-x-10">
                  <Link href="/blog">
                    <a className="text-base font-medium text-gray-500 hover:text-gray-900">
                      Blog
                    </a>
                  </Link>
                  <Link href="/contact">
                    <a className="text-base font-medium text-gray-500 hover:text-gray-900">
                      Contact
                    </a>
                  </Link>
                  <Link href="/contract">
                    <a className="text-base font-medium text-gray-500 hover:text-gray-900">
                      Contract
                    </a>
                  </Link>
                  <Link href="/leads">
                    <a className="text-base font-medium text-gray-500 hover:text-gray-900">
                      Leads
                    </a>
                  </Link>
                </Popover.Group>
                <div className="flex items-center md:ml-12">
                  <Link href="/signin">
                    <a className="text-base font-medium text-gray-500 hover:text-gray-900">
                      Sign in
                    </a>
                  </Link>
                  <Link href="/signup">
                    <a className="ml-8 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                      Sign up
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <Transition
            show={open}
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              static
              className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
            >
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                <div className="pt-5 pb-6 px-5 sm:pb-8">
                  <div className="flex items-center justify-between">
                    <div>
                      <img
                        className="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                        alt="Workflow"
                      />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Close menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                </div>
                <div className="py-6 px-5">
                  <div className="grid grid-cols-1 gap-4">
                    <Link href="/blog">
                      <a className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                        Blog
                      </a>
                    </Link>
                    <Link href="/contact">
                      <a className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                        Contact
                      </a>
                    </Link>
                    <Link href="/contract">
                      <a className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                        Contract
                      </a>
                    </Link>
                    <Link href="/leads">
                      <a className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                        Leads
                      </a>
                    </Link>
                  </div>
                  <div className="mt-6">
                    <Link href="/signup">
                      <a className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                        Sign up
                      </a>
                    </Link>

                    <p className="mt-6 text-center text-base font-medium text-gray-500">
                      Existing customer?{" "}
                      <Link href="/signin">
                        <a className="text-indigo-600 hover:text-indigo-500">
                          Sign in
                        </a>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
