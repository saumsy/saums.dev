<script lang="ts">
  import Card from "../../components/Card.svelte";
  import { Download } from "lucide-svelte";

  let features: {
    title: string;
    image: string;
  }[] = [
    {
      title: "clean ui",
      image: "project-assets/sidebar.svg"
    },
    {
      title: "lightweight",
      image: "project-assets/feather.svg"
    },
    {
      title: "detailed",
      image: "project-assets/info.svg"
    },
    {
      title: "keyboard control",
      image: "project-assets/keyboard.svg"
    },
    {
      title: "secure & private",
      image: "project-assets/lock.svg"
    },
    {
      title: "open source",
      image: "project-assets/github.svg"
    }
  ];
</script>

<svelte:head>
  <title>macboard | saums</title>
  <meta property="og:title" content="macboard | saums" />
  <meta property="og:description" content="a minimalistic clipboard manager for macos" />
  <meta property="og:image" content="https://saums.dev/project-assets/macboard-full.png" />
  <meta property="twitter:image" content="https://saums.dev/project-assets/macboard-full.png" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="theme-color" content="#6A5ACD" />
</svelte:head>

<main>
  <h1 class="mb-8 flex items-center gap-2 font-mono text-3xl text-accent before:content-['>']">
    macboard
  </h1>

  <section class="mb-12 flex flex-col items-center gap-6 md:flex-row">
    <img src="project-assets/macboard.png" alt="macboard logo" class="h-32 w-32" />
    <div>
      <p class="mb-6 text-xl text-gray-300">
        a <span class="text-accent">minimalistic</span> clipboard manager for macos
      </p>

      <div class="flex flex-wrap gap-4">
        <a href="/download/Macboard.dmg" download>
          <button
            class="rounded-md bg-accent/90 px-4 py-2 font-mono text-white transition-colors hover:bg-accent"
          >
            <Download size={14} class="mr-1 inline" /> download
          </button>
        </a>
        <a href="https://github.com/saumsy/Macboard" target="_blank">
          <button
            class="rounded-md border border-accent/60 px-4 py-2 font-mono text-white transition-colors hover:border-accent"
          >
            <i class="fa fa-github"></i> github
          </button>
        </a>
      </div>

      <p class="mt-3 font-mono text-gray-500">
        <i class="fa-brands fa-apple"></i> macos monterey 12.0+
      </p>
    </div>
  </section>

  <div class="my-12">
    <img
      src="project-assets/macboard-demo.png"
      alt="macboard demo"
      class="mx-auto w-full rounded-xl shadow-lg shadow-accent/10 md:w-5/6"
    />
  </div>

  <section class="my-16">
    <h2 class="mb-12 font-mono text-2xl text-accent">why use macboard?</h2>

    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {#each features as feature}
        <Card>
          <div class="flex items-center gap-4">
            <div
              class="flex h-12 w-12 items-center justify-center rounded-lg border border-accent/30 bg-darkbg p-3"
            >
              <img
                src={feature.image}
                alt={feature.title}
                class="h-6 w-6 brightness-100 invert filter"
              />
            </div>
            <h3 class="font-mono text-accent">
              {feature.title}
            </h3>
          </div>
        </Card>
      {/each}
    </div>
  </section>

  <div class="mt-12 pb-4">
    <a href="/projects" class="font-mono text-gray-500 hover:text-accent">← back to projects</a>
  </div>
</main>
