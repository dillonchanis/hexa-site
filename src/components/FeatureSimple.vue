<template>
  <div
    class="max-w-screen-xl mx-auto pt-16 pb-20 px-4 sm:px-6 md:pb-24 lg:px-8"
  >
    <div class="lg:text-center">
      <h2
        id="features"
        class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-cool-gray-200 sm:text-4xl sm:leading-10"
      >
        What is it?
      </h2>
      <p class="mt-4 max-w-2xl text-xl leading-7 text-cool-gray-400 lg:mx-auto">
        Hexa is a tool I wanted when designing and developing applications. Its
        a quick way to check color contrast ratios to ensure they meet WCAG
        requirements.
      </p>
    </div>

    <div class="mt-12">
      <div class="lg:grid lg:grid-cols-3 lg:gap-8">
        <div>
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
          <div class="mt-5">
            <h3 class="text-lg leading-6 font-medium text-cool-gray-200">
              Pixel Magnifier
            </h3>
            <p class="mt-2 text-base leading-6 text-cool-gray-400">
              Hexa offers a magnifier that makes it easy to select the color
              pixel you choose anywhere on your desktop.
            </p>
          </div>
        </div>
        <div class="mt-10 lg:mt-0">
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
          <div class="mt-5">
            <h3 class="text-lg leading-6 font-medium text-cool-gray-200">
              WCAG Contrast Checker
            </h3>
            <p class="mt-2 text-base leading-6 text-cool-gray-400">
              You'll instantly know if your foreground and background colors
              meet the requirements for WCAG contrast ratios for both small and
              large text.
            </p>
          </div>
        </div>
        <div class="mt-10 lg:mt-0">
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
          <div class="mt-5">
            <h3 class="text-lg leading-6 font-medium text-cool-gray-200">
              Tailwind Goodies
            </h3>
            <p class="mt-2 text-base leading-6 text-cool-gray-400">
              <a
                class="font-semibold underline transition ease-in-out duration-150 hover:text-teal-300"
                href="https://tailwindcss.com/"
                target="_blank"
                rel="noopener noreferrer"
                >Tailwind's</a
              >
              default color palette for quick copy &amp; paste, a spacing tool
              to convert pixels to the nearest spacing class and quickly
              reference Tailwind color classes within the inputs.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FeatureSimple",
};
</script>
