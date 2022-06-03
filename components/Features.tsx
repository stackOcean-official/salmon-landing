/* This example requires Tailwind CSS v2.0+ */
import { CodeIcon } from "@heroicons/react/outline";

import { FaDocker } from "react-icons/fa";
import { VscGraphScatter } from "react-icons/vsc";
import { AiOutlineApi } from "react-icons/ai";

const features = [
  {
    name: "Support for R & Python",
    description:
      "Data scientists have been arguing for years whether R or Python is the better language. We love them both and offer you the best deployment tools, no matter what you use.",
    icon: CodeIcon,
  },
  {
    name: "Docker-Support",
    description:
      "To get your models running universally on a wide variety of servers, we provide the tools to easily package the models into universal Docker containers so they run everywhere.",
    icon: FaDocker,
  },
  {
    name: "API-Support",
    description:
      "If you want to control your models universally (whether via web, app or other software), you need an API. With our tools you can quickly design an API interface to control your model without any programming knowledge.",
    icon: AiOutlineApi,
  },
  {
    name: "Visual Interface Support",
    description:
      "You don't need an API or additionally want to have a no-code web interface to try out the model? No problem, you always get that with us!",
    icon: VscGraphScatter,
  },
];

export default function Features() {
  return (
    <div className="relative py-12 bg-white" id="features">
      <div className="absolute w-5/6 m-auto rounded-full -inset-1 bg-gradient-to-r from-ocean-200 to-slate-300 opacity-30 filter blur-3xl h-2/3" />
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base font-semibold tracking-wide text-gray-500 uppercase">
            Help is coming
          </h2>
          <p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-ocean-600 to-cyan-600 sm:text-4xl">
            A better way to deploy models
          </p>
          <p className="max-w-2xl mt-4 text-xl text-gray-500 lg:mx-auto">
            A model in R and Python is easy for you to write but you don&apos;t
            know how to use it further? We help you to deploy it as an API to a
            server!
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center w-12 h-12 text-white">
                    <div className="absolute inset-0 rounded-md opacity-60 bg-blur-xl bg-gradient-to-r from-ocean-500 to-cyan-600" />
                    <div className="relative">
                      <div className="relative">
                        <feature.icon className="w-6 h-6" aria-hidden="true" />
                      </div>
                    </div>
                  </div>
                  <p className="ml-16 text-lg font-medium leading-6 text-gray-900">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
