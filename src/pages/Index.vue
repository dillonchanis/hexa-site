<template>
  <div>
    <Layout>
      <div class="mt-10 mx-auto max-w-screen-xl px-4 sm:px-6 md:mt-16 lg:mt-20">
        <div class="text-center">
          <h1
            class="text-4xl tracking-tight leading-10 font-extrabold text-cool-gray-100 sm:text-5xl sm:leading-none md:text-6xl"
          >
            Hexa
          </h1>
          <p
            class="mt-3 max-w-md mx-auto text-base text-cool-gray-400 sm:text-lg md:mt-5 md:text-2xl md:max-w-3xl"
          >
            A free color contrast tool for your desktop.
          </p>

          <div class="max-w-md mx-auto mt-12">
            <div class="flex justify-center items-center">
              <a
                href="#download"
                class="inline-flex items-center pb-1 text-base leading-6 font-bold border-b-2 border-transparent hover:border-pink-400 text-cool-gray-300 transition ease-in-out duration-150"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 48 58"
                  class="w-3 h-auto text-cool-gray-200 inline-block mr-2"
                >
                  <path
                    fill="currentColor"
                    d="M27.119 13.37c-.85.252-2.05.447-3.584.585.07-3.423.962-6.375 2.69-8.853C27.924 2.641 30.792.94 34.834 0c.026.066.058.198.09.38.03.183.062.309.087.378 0 .09.006.207.019.345.006.139.012.252.012.347 0 1.4-.333 2.96-.999 4.683-.686 1.723-1.755 3.308-3.2 4.755-1.24 1.237-2.485 2.067-3.723 2.482zm15.435 24.152c-1.583-2.27-2.376-4.836-2.376-7.684 0-2.596.743-4.974 2.239-7.13.804-1.176 2.112-2.528 3.93-4.068-1.196-1.472-2.39-2.615-3.584-3.445-2.163-1.491-4.61-2.24-7.344-2.24-1.629 0-3.616.39-5.955 1.17-2.25.786-3.898 1.172-4.93 1.172-.78 0-2.363-.342-4.753-1.033-2.414-.69-4.445-1.032-6.099-1.032-3.955 0-7.212 1.653-9.79 4.96C1.295 21.545 0 25.846 0 31.077c0 5.566 1.691 11.337 5.068 17.336 3.42 5.948 6.879 8.922 10.368 8.922 1.17 0 2.691-.39 4.547-1.17 1.86-.76 3.495-1.138 4.897-1.138 1.491 0 3.226.368 5.2 1.1 2.088.737 3.698 1.104 4.824 1.104 2.942 0 5.89-2.25 8.858-6.753 1.925-2.87 3.339-5.74 4.238-8.61-2.05-.623-3.86-2.07-5.446-4.345z"
                  />
                </svg>
                Get for Mac</a
              >

              <a
                href="#download"
                class="inline-flex items-center ml-12 pb-1 text-base leading-6 font-bold border-b-2 border-transparent hover:border-blue-400 text-cool-gray-300 transition ease-in-out duration-150"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 48 50"
                  class="w-3 h-auto inline-block mr-2 text-cool-gray-200"
                >
                  <path
                    fill="currentColor"
                    fill-rule="evenodd"
                    d="M1.013 7.092l17.731-2.66 1.393-.253V23.81H0V7.219l1.013-.127zM22.923 3.8L46.608.253 48 0v23.81H21.91V3.926l1.014-.127zM48 26.85v22.418l-1.393-.127-23.683-3.546-1.014-.254V25.583H48v1.267zM18.744 44.835l-17.73-2.66L0 42.047V25.583h20.137V45.087l-1.393-.253z"
                    clip-rule="evenodd"
                  />
                </svg>
                Get for Windows</a
              >
            </div>
          </div>
        </div>
      </div>

      <div class="relative mt-16">
        <div class="max-w-screen-md mx-auto">
          <g-image
            src="/app-screenshot.png"
            alt="App screenshot"
          />
        </div>
      </div>

      <div class="pt-16 pb-8">
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
            <p
              class="mt-4 max-w-2xl text-xl leading-7 text-cool-gray-400 lg:mx-auto"
            >
              Hexa is a tool I wanted when designing and developing
              applications. Its a quick way to check color contrast ratios to
              ensure they meet WCAG requirements.
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
                    Hexa offers a magnifier that makes it easy to select the
                    color pixel you choose anywhere on your desktop.
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
                    You'll instantly know if your foreground and background
                    colors meet the requirements for WCAG contrast ratios for
                    both small and large text.
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
                    default color palette for quick copy &amp; paste, a spacing
                    tool to convert pixels to the nearest spacing class and
                    quickly reference Tailwind color classes within the inputs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="download">
        <DownloadCTA />
      </div>
    </Layout>
  </div>
</template>

<script>
import DownloadCTA from '~/components/Download.vue'

export default {
  components: { DownloadCTA },
  metaInfo: {
    title: "Hexa | Color Contrast Tool",
  },
};
</script>
