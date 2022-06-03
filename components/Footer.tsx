export default function Footer({}) {
  return (
    <footer>
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:items-center lg:px-8">
        <div className="mt-8 md:mt-0 md:order-1">
          <p className="text-base text-center text-gray-400">
            &copy; 2022 stackOcean GmbH. All rights reserved |{" "}
            <a href="/imprint" target="_blank">
              Imprint
            </a>{" "}
            |{" "}
            <a href="/privacy" target="_blank">
              Privacy
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
