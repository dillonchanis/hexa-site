<template>
  <div class="py-16 overflow-hidden lg:py-24">
    <div
      class="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-screen-xl"
    >
      <svg
        class="hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1/4"
        width="404"
        height="784"
        fill="none"
        viewBox="0 0 404 784"
      >
        <defs>
          <pattern
            id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect
              x="0"
              y="0"
              width="4"
              height="4"
              class="text-cool-gray-800"
              fill="currentColor"
            />
          </pattern>
        </defs>
        <rect
          width="404"
          height="784"
          fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)"
        />
      </svg>

      <div class="relative">
        <h2
          class="text-center text-3xl leading-8 font-extrabold tracking-tight text-cool-gray-100 sm:text-4xl sm:leading-10"
        >
          What is it?
        </h2>
        <p
          class="mt-4 max-w-3xl mx-auto text-center text-xl leading-7 text-cool-gray-400"
        >
          Hexa is a tool I wanted when designing and developing applications.
          Its a quick way to check color contrast ratios to ensure they meet
          WCAG requirements.
        </p>
      </div>

      <div
        class="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center"
      >
        <div class="relative">
          <h3
            class="text-2xl leading-8 font-extrabold text-cool-gray-100 tracking-tight sm:text-3xl sm:leading-9"
          >
            Ensure you meet standards
          </h3>
          <p class="mt-3 text-lg leading-7 text-cool-gray-400">
            It is important to take accessibility into consideration when
            designing websites and applications. Your color choices have an
            impact. Instantly find out if you meet the
            <a
              class="cursor-pointer inline-block font-semibold  border-b-2 border-transparent hover:border-yellow-300 transition ease-in-out duration-150"
              href="https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html"
              target="_blank"
              rel="nonoopener noreferrer"
              >WCAG standards</a
            >
            for color contrast.
          </p>

          <ul class="mt-10">
            <li>
              <div class="flex">
                <div class="flex-shrink-0">
                  <div
                    class="hexagon flex items-center justify-center text-indigo-500 bg-indigo-500 border-indigo-500 text-white"
                  >
                    <svg
                      class="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                      />
                    </svg>
                  </div>
                </div>
                <div class="ml-4">
                  <h4 class="text-lg leading-6 font-medium text-cool-gray-100">
                    Cross Platform
                  </h4>
                  <p class="mt-2 text-base leading-6 text-cool-gray-400">
                    Hexa is a taskbar application that works on both Mac and
                    Windows. Linux support on the way!
                  </p>
                </div>
              </div>
            </li>
            <li class="mt-10">
              <div class="flex">
                <div class="flex-shrink-0">
                  <div
                    class="hexagon flex items-center justify-center text-indigo-500 bg-indigo-500 border-indigo-500 text-white"
                  >
                    <svg
                      class="h-6 w-6 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                </div>
                <div class="ml-4">
                  <h4 class="text-lg leading-6 font-medium text-cool-gray-100">
                    Pixel Magnifier
                  </h4>
                  <p class="mt-2 text-base leading-6 text-cool-gray-400">
                    Hexa offers a magnifier that makes it easy to select the
                    color pixel you choose anywhere on your desktop.
                  </p>
                </div>
              </div>
            </li>
            <li class="mt-10">
              <div class="flex">
                <div class="flex-shrink-0">
                  <div
                    class="hexagon flex items-center justify-center text-indigo-500 bg-indigo-500 border-indigo-500 text-white"
                  >
                    <svg
                      class="h-6 w-6 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                </div>
                <div class="ml-4">
                  <h4 class="text-lg leading-6 font-medium text-cool-gray-100">
                    WCAG Contrast Checker
                  </h4>
                  <p class="mt-2 text-base leading-6 text-cool-gray-400">
                    You'll instantly know if your foreground and background
                    colors meet the requirements for WCAG contrast ratios for
                    both small and large text.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div class="mt-10 -mx-4 relative lg:mt-0">
          <svg
            class="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
            width="784"
            height="404"
            fill="none"
            viewBox="0 0 784 404"
          >
            <defs>
              <pattern
                id="ca9667ae-9f92-4be7-abcb-9e3d727f2941"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  class="text-cool-gray-800"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width="784"
              height="404"
              fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)"
            />
          </svg>
          <g-image
            class="relative mx-auto rounded shadow-lg opacity-75 p-6 sm:p-0"
            width="400"
            src="/color-dropper.png"
            alt="Hexa's color dropper hovering over some text."
          />
        </div>
      </div>

      <svg
        class="hidden lg:block absolute right-full transform translate-x-1/2 translate-y-12"
        width="404"
        height="784"
        fill="none"
        viewBox="0 0 404 784"
      >
        <defs>
          <pattern
            id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect
              x="0"
              y="0"
              width="4"
              height="4"
              class="text-cool-gray-800"
              fill="currentColor"
            />
          </pattern>
        </defs>
        <rect
          width="404"
          height="784"
          fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
        />
      </svg>

      <div class="relative mt-12 sm:mt-16 lg:mt-24">
        <div
          class="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center"
        >
          <div class="lg:col-start-2">
            <h3
              class="text-2xl leading-8 font-extrabold text-cool-gray-100 tracking-tight sm:text-3xl sm:leading-9"
            >
              Tailwind Extras
            </h3>
            <p class="mt-3 text-lg leading-7 text-cool-gray-400">
              As an avid Tailwind user I wanted some extra tooling that wasn't
              supported in other color contrast checkers.
            </p>

            <ul class="mt-10">
              <li>
                <div class="flex">
                  <div class="flex-shrink-0">
                    <div
                      class="hexagon flex items-center justify-center text-indigo-500 bg-indigo-500 border-indigo-500 text-white"
                    >
                      <svg
                        class="h-6 w-6 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                        />
                      </svg>
                    </div>
                  </div>
                  <div class="ml-4">
                    <h4
                      class="text-lg leading-6 font-medium text-cool-gray-100"
                    >
                      Default Palette
                    </h4>
                    <p class="mt-2 text-base leading-6 text-cool-gray-400">
                      Get quick access to Tailwind's default palette. Click to
                      copy to clipboard baked in.
                    </p>
                  </div>
                </div>
              </li>
              <li class="mt-10">
                <div class="flex">
                  <div class="flex-shrink-0">
                    <div
                      class="hexagon flex items-center justify-center text-indigo-500 bg-indigo-500 border-indigo-500 text-white"
                    >
                      <svg
                        class="h-6 w-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                        />
                      </svg>
                    </div>
                  </div>
                  <div class="ml-4">
                    <h4
                      class="text-lg leading-6 font-medium text-cool-gray-100"
                    >
                      Spacing Tool
                    </h4>
                    <p class="mt-2 text-base leading-6 text-cool-gray-400">
                      Have to convert pixels from a mockup to the nearest
                      Tailwind spacing class on the fly? This was a pain for me.
                      Just enter the amount in pixels and get the closest match!
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div class="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1 p-4 sm:p-0">
            <svg
              class="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
              width="784"
              height="404"
              fill="none"
              viewBox="0 0 784 404"
            >
              <defs>
                <pattern
                  id="e80155a9-dfde-425a-b5ea-1f6fadd20131"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x="0"
                    y="0"
                    width="4"
                    height="4"
                    class="text-cool-gray-800"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width="784"
                height="404"
                fill="url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)"
              />
            </svg>
            <g-image
              class="relative mx-auto w-88 opacity-90 sm:p-0"
              src="/features.png"
              alt="Showing off application features like hex color inputs, palette viewer and spacing tool."
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FeatureAlt",
};
</script>
