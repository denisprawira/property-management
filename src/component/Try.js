import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import * as Icon from "./IconLib";

export default function Try() {
  return (
    <div >
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center items-center rounded-md bg-white-100  px-4 py-2 text-sm font-medium text-white hover:bg-white-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            <img className="w-10 h-10 rounded-full" loading="lazy" src="https://image.shutterstock.com/image-vector/march-2017-caricature-character-illustration-260nw-614624522.jpg" alt="Rounded avatar"/>
            <ChevronDownIcon
              className="ml-2 -mr-1 h-5 w-5 text-gray-500 hover:text-violet-100"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className=" p-4 absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1  ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
                <p className="text-orange-200">VERSION 1.0.0.0</p>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-slate-200 text-white hover:bg-grey-100' : 'text-gray-900'
                    } group flex w-full items-center rounded-md  py-2 text-sm`}
                  >
                    {active ? (
                      <Icon.MoonIconFill
                        className="mr-2 h-5 w-5 "
                        aria-hidden="true"
                      />
                    ) : (
                      <Icon.MoonIconOutline
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    )}
                    <p className=' ml-2.5'>Edit</p>
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-slate-200 text-white hover:bg-white-200' : 'text-gray-900'
                    } group flex w-full items-center rounded-md  py-2 text-sm`}
                  >
                    {active ? (
                      <Icon.ArrowLeftCircleFill
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    ) : (
                      <Icon.ArrowLeftCircleOutline
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    )}
                    <p className='ml-2.5'>Duplicate</p>
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}
