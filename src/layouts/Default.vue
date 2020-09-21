<template>
  <div class="relative overflow-hidden">
    <div class="relative pt-6 pb-12 lg:pb-20">
      <div class="max-w-screen-xl mx-auto px-4 sm:px-6">
        <nav
          class="relative flex items-center justify-between sm:h-10 md:justify-center"
        >
          <div
            class="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0"
          >
            <div class="flex items-center justify-between w-full md:w-auto">
              <g-link to="/" aria-label="Home">
                <svg
                  class="h-10 w-auto sm:h-10"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 128 128"
                >
                  <g clip-path="url(#clip0)">
                    <path
                      fill="#4A5568"
                      d="M63.616 63.823L9.973 32.853 63.616 1.88v61.942z"
                    />
                    <path
                      fill="#4A5568"
                      d="M63.616 63.823V1.881l53.644 30.971-53.644 30.971z"
                    />
                    <path
                      fill="#4A5568"
                      d="M63.616 125.619L9.973 94.648l53.643-30.971v61.942z"
                    />
                    <path
                      fill="#4A5568"
                      d="M9.971 94.72V32.778l53.644 30.971L9.97 94.72zM117.258 32.778V94.72L63.615 63.75l53.643-30.972z"
                    />
                    <path
                      fill="#4A5568"
                      d="M63.616 125.619V63.677l53.644 30.97-53.644 30.972z"
                    />
                    <path
                      fill="#1A202C"
                      d="M64.117 65.564L32.376 47.238l31.741-18.326v36.652zM64.117 65.564V28.912L95.86 47.238 64.117 65.564z"
                    />
                    <path
                      fill="#1A202C"
                      d="M64.117 102.129L32.376 83.803l31.741-18.326v36.652z"
                    />
                    <path
                      fill="#1A202C"
                      d="M32.375 83.846V47.194L64.116 65.52 32.375 83.846zM95.858 47.194v36.652L64.116 65.52l31.742-18.326z"
                    />
                    <path
                      fill="#1A202C"
                      d="M64.117 102.129V65.477L95.86 83.803 64.117 102.13z"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <path fill="#fff" d="M0 0h128v128H0z" />
                    </clipPath>
                  </defs>
                </svg>
              </g-link>
            </div>
          </div>
          <div class="flex space-x-6 md:space-x-10">
            <g-link
              to="/"
              class="font-medium text-cool-gray-400 hover:text-cool-gray-100 transition duration-150 ease-in-out"
            >
              Home
            </g-link>
            <g-link
              to="/#features"
              class="font-medium text-cool-gray-400 hover:text-cool-gray-100 transition duration-150 ease-in-out"
            >
              Features
            </g-link>
            <g-link
              to="/roadmap"
              class="font-medium text-cool-gray-400 hover:text-cool-gray-100 transition duration-150 ease-in-out"
            >
              Roadmap
            </g-link>
            <g-link
              to="/#download"
              class="hidden sm:inline font-medium text-cool-gray-400 hover:text-cool-gray-100 transition duration-150 ease-in-out"
            >
              Download
            </g-link>
          </div>
        </nav>
      </div>

      <slot />
    </div>

    <footer
      class="border-t border-cool-gray-700 max-w-screen-xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8"
    >
      <nav class="-mx-5 -my-2 flex flex-wrap justify-center">
        <div class="px-5 py-2">
          <g-link
            to="/"
            class="text-base leading-6 text-cool-gray-400 hover:text-cool-gray-300"
          >
            Home
          </g-link>
        </div>
        <div class="px-5 py-2">
          <g-link
            to="/#features"
            class="text-base leading-6 text-cool-gray-400 hover:text-cool-gray-300"
          >
            Features
          </g-link>
        </div>
        <div class="px-5 py-2">
          <g-link
            to="/roadmap"
            class="text-base leading-6 text-cool-gray-400 hover:text-cool-gray-300"
          >
            Roadmap
          </g-link>
        </div>
        <div class="px-5 py-2">
          <g-link
            to="/#download"
            class="text-base leading-6 text-cool-gray-400 hover:text-cool-gray-300"
          >
            Download
          </g-link>
        </div>
      </nav>
      <div class="mt-8 flex justify-center">
        <a
          href="https://twitter.com/dillonchanis"
          class="text-cool-gray-400 hover:text-cool-gray-500"
        >
          <span class="sr-only">Twitter</span>
          <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
            />
          </svg>
        </a>
        <a
          href="https://github.com/dillonchanis"
          class="ml-6 text-cool-gray-400 hover:text-cool-gray-500"
        >
          <span class="sr-only">GitHub</span>
          <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path
              fill-rule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              clip-rule="evenodd"
            />
          </svg>
        </a>
      </div>
      <div class="mt-8">
        <p class="text-center text-base leading-6 text-cool-gray-400">
          Created by
          <a
            href="https://github.com/dillonchanis"
            class="cursor-pointer inline-block border-b-2 border-transparent hover:border-green-400 transition ease-in-out duration-150"
            >Dillon Chanis</a
          >
        </p>
      </div>
    </footer>
  </div>
</template>
