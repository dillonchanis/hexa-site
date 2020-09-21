<template>
  <Layout>
    <!-- This component requires Tailwind CSS >= 1.5.1 and @tailwindcss/ui >= 0.4.0 -->
    <div class="relative py-16 overflow-hidden">
      <div class="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
        <div class="relative h-full text-lg max-w-prose mx-auto">
          <svg
            class="absolute top-12 left-full transform translate-x-32"
            width="404"
            height="384"
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
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
              height="384"
              fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
            />
          </svg>
          <svg
            class="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
            width="404"
            height="384"
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
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
              height="384"
              fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
            />
          </svg>
          <svg
            class="absolute bottom-12 left-full transform translate-x-32"
            width="404"
            height="384"
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="d3eb07ae-5182-43e6-857d-35c643af9034"
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
              height="384"
              fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
            />
          </svg>
        </div>
      </div>
      <div class="relative px-4 sm:px-6 lg:px-8">
        <div class="text-lg max-w-prose mx-auto mb-6">
          <p
            class="bg-clip-text text-base text-center leading-6 text-transparent bg-gradient-to-r from-pink-400 to-indigo-500 font-semibold tracking-wide uppercase"
          >
            Upcoming
          </p>
          <h1
            class="mt-2 mb-8 text-3xl text-center leading-8 font-extrabold tracking-tight text-cool-gray-100 sm:text-4xl sm:leading-10"
          >
            Hexa Roadmap
          </h1>
          <p class="text-xl text-cool-gray-400 leading-8">
            Here is a rough list of what I want to tackle next with Hexa. If you
            have suggestions follow the link below to submit!
          </p>
        </div>
        <div class="prose prose-lg text-cool-gray-400 mx-auto">
          <ul>
            <li>
              <span class="font-bold text-cool-gray-200">Dark Mode support</span> - This will be the first thing
              I tackle using Tailwind's experimental support for dark mode.
            </li>
            <li>
              <span class="font-bold text-cool-gray-200">App Signing</span> - Going to setup automatic signing
              with each release so you don't get that annyoing prompt.
            </li>
            <li>
              <span class="font-bold text-cool-gray-200">Linux Support</span> - I do not have a Linux machine so
              I cannot test the functionality yet.
            </li>
          </ul>
        </div>

        <div class="mt-16 text-lg max-w-prose mx-auto mb-6">
          <h2
            class="mt-2 mb-8 text-3xl text-center leading-8 font-extrabold tracking-tight text-cool-gray-100 sm:text-4xl sm:leading-10"
          >
            Don't see an idea you want?
          </h2>
          <p class="text-xl text-cool-gray-400 leading-8">
            Hexa is a passion project of mine. Its an idea I thought would be
            useful for my needs compared to other similar tools. I am totally
            open to suggestions if I think the idea makes sense for the project.
            Just open an issue here:
            <br />
            <a
              class="text-cool-gray-300 cursor-pointer inline-block font-semibold my-4  border-b-2 border-transparent hover:border-red-500 transition ease-in-out duration-150"
              href="https://github.com/dillonchanis/hexa-site/issues"
              target="_blank"
              rel="nonoopener noreferrer"
            >
              https://github.com/dillonchanis/hexa-site/issues
            </a>
            <br />
            And provide a brief description of what feature you'd like to see!
          </p>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Hexa | Roadmap",
  },
};
</script>
