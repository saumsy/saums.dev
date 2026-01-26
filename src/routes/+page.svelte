<script>
  import { MapPin, GraduationCap, MoveRight } from "lucide-svelte";

  let stack = [
    "python",
    "go",
    "swift",
    "rust",
    "typescript",
    "reactjs",
    "svelte",
    "tailwindcss",
    "git",
    "postgresql",
    "mongodb"
  ];
</script>

<svelte:head>
  <title>saums</title>
  <meta property="og:title" content="saums" />
  <meta property="og:description" content="a boring developer" />
  <meta property="og:image" content="https://saums.me/images/saumya-card.png" />
  <meta property="twitter:image" content="https://saums.me/images/saumya-card.png" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<main>
  <section>
    <h1 class="mb-4 font-mono text-4xl text-white">saums</h1>

    <p class="flex items-center gap-1 font-mono text-gray-500">
      <MapPin size={14} class="mr-1" /> blr, india
    </p>

    <p class="mb-8 mt-2 flex items-center gap-1 font-mono text-gray-500">
      <GraduationCap size={14} class="mr-1" /> student
    </p>

    <p class="text-lg text-gray-300">
      i'm a 18 y/o student, self taught developer. i love building stuff that helps me learn
      something new. if i'm not coding, i'm probably just vibing to my favorite music artists,
      playing or watching sports.
    </p>
  </section>

  <section id="stack" class="my-12">
    <h1 class="mb-4 flex items-center gap-2 font-mono text-2xl text-accent before:content-['>']">
      stack
    </h1>
    <p class="my-4 font-mono text-gray-500">stuff i can use in sleep</p>

    <div class="flex flex-wrap gap-2">
      {#each stack as tech}
        <span class="mr-2 inline-block rounded bg-[#222222] px-2 py-0.5 text-sm text-gray-300"
          >{tech}</span
        >
      {/each}
    </div>
  </section>

  <section id="projects" class="mt-12">
    <h1 class="mb-4 flex items-center gap-2 font-mono text-2xl text-accent before:content-['>']">
      projects
    </h1>
    <p class="mb-6 font-mono text-gray-500">stuff i've built</p>

    <div class="space-y-12">
      <div>
        <h2 class="mb-1 text-2xl">
          <a href="/macboard" class="text-white hover:text-accent">macboard</a>
        </h2>
        <p class="mb-4 font-mono text-gray-500">creator & maintainer</p>
        <p class="text-gray-300">a minimalistic clipboard manager for macos</p>
      </div>

      <div>
        <h2 class="mb-1 text-2xl">
          <a href="https://cricketguru.me" target="_blank" class="text-white hover:text-accent"
            >cricket guru</a
          >
        </h2>
        <p class="mb-4 font-mono text-gray-500">co-developer</p>
        <p class="text-gray-300">
          relive your favorite sport through the best cricket bot on discord with 50k+ users & 21k+
          servers
        </p>
      </div>

      <a
        href="/projects"
        class="mt-8 inline-flex items-center font-mono text-accent hover:underline"
      >
        all projects <MoveRight class="ml-1 size-4" />
      </a>
    </div>
  </section>
</main>

<footer class="mt-12 py-6">
  <div class="flex gap-4 font-mono text-sm">
    <a href="mailto:hi@saums.me" class="text-gray-500 hover:text-accent">email</a>
    <a href="https://twitter.com/saums27" target="_blank" class="text-gray-500 hover:text-accent"
      >x.com</a
    >
    <a href="https://github.com/saumsy" target="_blank" class="text-gray-500 hover:text-accent"
      >github</a
    >
    <a
      href="https://linkedin.com/in/saumyapat"
      target="_blank"
      class="text-gray-500 hover:text-accent">linkedin</a
    >
  </div>
</footer>
