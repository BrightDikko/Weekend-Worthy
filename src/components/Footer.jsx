import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="px-4 py-6 bg-yellow-400 flex items-center justify-between">
        <span className="text-sm font-medium font-serif text-slate-600 sm:text-center">
          Developed by
          <a
            href="https://www.linkedin.com/in/bright-dikko"
            target="_blank"
            className="hover:decoration-underline hover:text-blue-900 hover:font-bold"
          >
            {" "}
            Bright Dikko © 2023 ™
          </a>
        </span>
        <div className="flex  space-x-6 sm:justify-center md:mt-0">
          <a
            href="https://www.instagram.com/dikko_mmii/"
            target="_blank"
            className="text-[#8A8A8A] hover:-translate-y-1  transition duration-300 ease-in-out"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                clip-rule="evenodd"
              />
            </svg>
            <span className="sr-only">Instagram page</span>
          </a>

          <a
            href="https://github.com/BrightDikko"
            target="_blank"
            className="text-[#8A8A8A] hover:-translate-y-1  transition duration-300 ease-in-out"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clip-rule="evenodd"
              />
            </svg>
            <span className="sr-only">GitHub account</span>
          </a>
          <a
            href="https://www.linkedin.com/in/bright-dikko"
            target="_blank"
            className="text-[#8A8A8A] hover:-translate-y-1  transition duration-300 ease-in-out"
          >
            <svg
              className="w-4 h-5"
              viewBox="0 0 26 26"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24.0371 0H1.91592C0.854585 0 0 0.838028 0 1.87049V24.085C0 25.1188 0.85883 25.9572 1.91592 25.9572H24.0371C25.0958 25.9572 25.9585 25.1183 25.9585 24.085V1.87049C25.9589 0.838028 25.0963 0 24.0371 0Z"
                fill="#8A8A8A"
              />
              <path
                d="M3.84883 9.73158H7.69935V22.1195H3.84883V9.73158ZM5.77494 3.57373C6.36659 3.57429 6.93384 3.80963 7.35212 4.22807C7.7704 4.64651 8.00553 5.21385 8.00586 5.8055C8.00575 6.3973 7.77072 6.96485 7.35242 7.38348C6.93411 7.8021 6.36674 8.03756 5.77494 8.03812C5.18278 8.03812 4.61486 7.80291 4.19609 7.38423C3.77733 6.96554 3.54201 6.39767 3.5419 5.8055C3.54224 5.21348 3.77765 4.64582 4.19639 4.22732C4.61513 3.80882 5.18292 3.57373 5.77494 3.57373ZM10.1137 9.73158H13.8063V11.4199H13.8572C14.3666 10.4461 15.6275 9.41913 17.4997 9.41913C21.3986 9.41913 22.1186 11.985 22.1186 15.3201V22.1148H18.2719V16.0864C18.2719 14.6498 18.2456 12.8018 16.2711 12.8018C14.2673 12.8018 13.9604 14.3666 13.9604 15.9824V22.1105H10.1141V9.72267L10.1137 9.73158Z"
                fill="white"
              />
            </svg>

            <span className="sr-only">GitHub account</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
