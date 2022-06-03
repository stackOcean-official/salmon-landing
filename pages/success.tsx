import Head from "next/head";
import Link from "next/link";

export default function WaitlistSuccess() {
  return (
    <>
      <Head>
        <title>A better way to deploy R &amp; Python Models</title>
        <meta
          name="description"
          content="A better way to deploy R &amp; Python Models"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative min-h-screen py-16 ">
        <div className="absolute w-5/6 m-auto rounded-full -inset-1 bg-gradient-to-r from-ocean-600 to-slate-700 opacity-20 filter blur-3xl h-2/3" />
        <div
          className="relative inset-x-0 top-0 hidden h-1/2 lg:block"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl lg:bg-transparent lg:px-8">
          <div className="lg:grid lg:grid-cols-12">
            <div className="relative z-10 lg:col-start-1 lg:row-start-1 lg:col-span-4 lg:py-16 lg:bg-transparent">
              <div
                className="absolute inset-x-0 h-1/2 lg:hidden"
                aria-hidden="true"
              />
              <div className="max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:max-w-none lg:p-0">
                <div className="aspect-w-10 aspect-h-6 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1">
                  {/* <img
                    className="object-center object-fit rounded-3xl"
                    src="/doodle-rocknroll- open source jotform alternative enterprise forms.svg"
                    alt=""
                  /> */}
                </div>
              </div>
            </div>

            <div className="relative lg:col-start-3 lg:row-start-1 lg:col-span-10 lg:rounded-3xl lg:grid lg:grid-cols-10 lg:items-center">
              <div
                className="absolute inset-0 hidden overflow-hidden rounded-3xl lg:block"
                aria-hidden="true"
              >
                <svg
                  className="absolute transform text-ocean-200 bottom-full left-full translate-y-1/3 -translate-x-2/3 xl:bottom-auto xl:top-0 xl:translate-y-0"
                  width={404}
                  height={384}
                  fill="none"
                  viewBox="0 0 404 384"
                  aria-hidden="true"
                >
                  <defs>
                    <pattern
                      id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                      x={0}
                      y={0}
                      width={20}
                      height={20}
                      patternUnits="userSpaceOnUse"
                    >
                      <rect
                        x={0}
                        y={0}
                        width={4}
                        height={4}
                        className="text-primary-transp"
                        fill="currentColor"
                      />
                    </pattern>
                  </defs>
                  <rect
                    width={404}
                    height={384}
                    fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
                  />
                </svg>
                <svg
                  className="absolute transform top-full -translate-y-1/3 -translate-x-1/3 xl:-translate-y-1/2"
                  width={404}
                  height={384}
                  fill="none"
                  viewBox="0 0 404 384"
                  aria-hidden="true"
                >
                  <defs>
                    <pattern
                      id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                      x={0}
                      y={0}
                      width={20}
                      height={20}
                      patternUnits="userSpaceOnUse"
                    >
                      <rect
                        x={0}
                        y={0}
                        width={4}
                        height={4}
                        className="text-primary-transp"
                        fill="currentColor"
                      />
                    </pattern>
                  </defs>
                  <rect
                    width={404}
                    height={384}
                    fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
                  />
                </svg>
              </div>
              <div className="relative max-w-md px-4 py-12 mx-auto space-y-6 sm:max-w-3xl sm:py-16 sm:px-6 lg:max-w-none lg:p-0 lg:col-start-4 lg:col-span-6">
                <h2
                  className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-ocean-600 to-cyan-600"
                  id="join-heading"
                >
                  Thanks for joining!
                </h2>
                <p className="text-lg text-gray-700">
                  We will keep you updated on the ML-model deployment revolution
                  and let you know as soon as we launch the first version of the
                  software for you to use.
                </p>
                <Link href="/">
                  <a className="block w-full px-5 py-3 text-base font-medium text-center text-white border border-transparent rounded-md shadow-md hover:bg-ocean-600 sm:inline-block sm:w-auto bg-gradient-to-r from-ocean-600 to-cyan-600 whitespace-nowrap">
                    Back to the Homepage
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
