<script>
  import Card from "../../components/Card.svelte";
  import { MoveUpRight } from "lucide-svelte";

  let projects = [
    {
      title: "macboard",
      description: "a minimalistic clipboard manager for macos",
      link: "/macboard",
      role: "creator & maintainer",
      tech: ["swift", "swiftui"]
    },
    {
      title: "cricket guru",
      description:
        "relive your favorite sport through the best cricket bot on discord with 52k+ users & 22k+ servers (co-developer)",
      link: "https://cricketguru.me",
      role: "co-developer",
      tech: ["python", "discord.py", "mongodb"]
    },
    {
      title: "localizer",
      description: "a cli tool that helps you localize your applications efficiently",
      link: "https://github.com/saumsy/localizer",
      role: "creator",
      tech: ["go", "google translate api"]
    },
    {
      title: "lines tally",
      description: "an elegant cli tool that returns the number of lines of code in a directory",
      link: "https://github.com/saumsy/lines-tally",
      role: "creator",
      tech: ["rust"]
    },
    {
      title: "create discord bot",
      description: "a blazingly fast 🚀 cli tool for quickly creating discord bot boilerplates",
      link: "https://github.com/saumsy/create-discord-bot",
      role: "creator",
      tech: ["rust", "fs"]
    },
    {
      title: "hangdev",
      description:
        "a cli game inspired from hangman made for developers to play right in their computer shell!",
      link: "https://github.com/saumsy/hangdev",
      role: "creator",
      tech: ["rust"]
    }
  ];
</script>

<svelte:head>
  <title>projects | saums</title>
  <meta property="og:title" content="projects | saums" />
  <meta property="og:description" content="saums's projects" />
</svelte:head>

<main>
  <h1 class="mb-8 flex items-center gap-2 font-mono text-3xl text-accent before:content-['>']">
    projects
  </h1>

  <p class="mb-8 font-mono text-gray-500">
    here are some of the projects i've worked on. i love building stuff that fixes problems and
    makes poeple's lives easier, while considering them as a source of learning new things.
  </p>

  {#each projects as project}
    <Card classes="mb-6 group">
      <div class="flex justify-between">
        <a
          href={project.link}
          target="_blank"
          class="text-xl hover:underline group-hover:text-accent">{project.title}</a
        >
        <a href={project.link} target="_blank" class="text-sm hover:text-accent">
          <MoveUpRight class="size-4" />
        </a>
      </div>
      <p class="mt-2 text-gray-300">{project.description}</p>
      <p class="mt-2 font-mono text-gray-500">{project.role}</p>
      <div class="mt-2 flex flex-wrap gap-2">
        {#each project.tech as tech}
          <span class="mr-2 inline-block rounded bg-[#222222] px-2 py-0.5 text-sm text-gray-300"
            >{tech}</span
          >
        {/each}
      </div>
    </Card>
  {/each}

  <div class="mt-8 pb-4">
    <a href="/" class="font-mono text-gray-500 hover:text-accent">← back home</a>
  </div>
</main>
