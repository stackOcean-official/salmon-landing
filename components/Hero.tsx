import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { ChevronRightIcon } from "@heroicons/react/solid";

export default function Hero() {
  return (
    <div
      className="pt-10 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden"
      id="start"
    >
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="max-w-md px-4 mx-auto sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
            <div className="lg:py-24">
              <a
                href="https://github.com/stackocean-official"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center p-1 pr-2 text-white rounded-full bg-ocean-800 bg-opacity-40 bg-blur-lg sm:text-base lg:text-sm xl:text-base hover:text-gray-200"
              >
                <span className="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-ocean-500 rounded-full">
                  Just launched our boilerplates
                </span>
                <span className="inline-flex ml-4 text-sm">
                  {/*  <img
                    src="/img/github.png"
                    className="z-40 w-5 h-5 text-white"
                  /> */}
                  Check them out
                </span>
                <ChevronRightIcon
                  className="w-5 h-5 ml-2 text-white"
                  aria-hidden="true"
                />
              </a>
              <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-600 sm:mt-5 sm:text-5xl lg:mt-6 xl:text-5xl">
                <span className="block">A better way to</span>
                <span className="block py-2 text-transparent bg-clip-text bg-gradient-to-r from-ocean-600 to-cyan-600">
                  deploy R &amp; Python Models
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                With our framework we enable data scientist to focus on what
                they do best and take care of the deployment hassle
              </p>
              <div className="mt-10 sm:mt-12">
                <form
                  name="waitlist"
                  method="post"
                  action="/success"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  className="sm:max-w-xl sm:mx-auto lg:mx-0"
                >
                  <input type="hidden" name="form-name" value="waitlist" />
                  <p hidden>
                    <label>
                      Don&apos;t fill this out: <input name="bot-field" />
                    </label>
                  </p>
                  <div className="sm:flex">
                    <div className="flex-1 min-w-0">
                      <label htmlFor="email" className="sr-only">
                        Email address
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        className="block w-full px-4 py-3 text-base text-gray-900 placeholder-gray-500 border-0 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ocean-300 focus:ring-offset-gray-900"
                        required
                      />
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                      <button
                        type="submit"
                        className="block w-full px-4 py-3 font-medium text-white rounded-md shadow bg-ocean-500 hover:bg-ocean-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ocean-300 focus:ring-offset-gray-900"
                      >
                        Join waitlist
                      </button>
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-gray-400 sm:mt-4">
                    We will only inform you about the launch of the product and
                    delete your email address afterwards.
                  </p>
                </form>
              </div>
            </div>
          </div>
          <div className="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
            <div className="max-w-md px-4 mx-auto sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
              {/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}
              <img
                className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src="https://tailwindui.com/img/component-images/cloud-illustration-ocean-400.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
