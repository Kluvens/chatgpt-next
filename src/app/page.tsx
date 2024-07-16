import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";

export default function Home() {
  const testimonials = [
    {
      quote:
        "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
      name: "Charles Dickens",
      title: "A Tale of Two Cities",
    },
    {
      quote:
        "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
      name: "William Shakespeare",
      title: "Hamlet",
    },
    {
      quote: "All that we see or seem is but a dream within a dream.",
      name: "Edgar Allan Poe",
      title: "A Dream Within a Dream",
    },
    {
      quote:
        "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
      name: "Jane Austen",
      title: "Pride and Prejudice",
    },
    {
      quote:
        "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
      name: "Herman Melville",
      title: "Moby-Dick",
    },
  ];

  return (
    <div className="flex flex-col justify-center pt-24 bg-base">
      <div className="relative mb-4">
        <div className="px-5 mx-auto max-w-[68rem] grid grid-cols-12 mt-8">
          <div className="md:col-span-12 col-span-12">
            <div className="flex flex-col relative items-center text-center">
              <p className="text-base leading-6 font-normal mb-3">ChatGPT</p>
              <h1 className="text-5xl leading-tight font-normal text-balance">
                Get answers. Find inspiration. Be more productive.
              </h1>
              <div className="mt-6 md:grid md:grid-cols-12">
                <p className="col-span-12 md:col-span-8 md:col-start-3 text-xl text-balance">
                  Free to use. Easy to try. Just ask and ChatGPT can help with
                  writing, learning, brainstorming, and more.
                </p>
              </div>
              <div className="flex mt-8 md:mt-4 min-h-16 justify-between">
                <div className="flex flex-col gap-4 items-start md:items-center md:flex-row items-center">
                  <Button className="rounded-full px-6 text-nowrap">
                    <Link
                      href="/chat/123"
                      className="text-nowrap min-h-16 flex items-center justify-center gap-[0.3em] text-md"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Start now
                      <svg
                        width="0.625rem"
                        viewBox="0 0 10 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 9L9 1M9 1H2.5M9 1V7.22222"
                          stroke="currentColor"
                          stroke-width="1.25"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                      <span className="sr-only">(opens in a new window)</span>
                    </Link>
                  </Button>
                  <Link
                    className="text-btn-secondary-label border-b border-transparent relative group focus-visible:border-gray-50 focus-visible:border-transparent focus-visible:rounded-s py-1 flex items-center justify-center gap-[0.3em] text-cta"
                    href="/chatgpt/download/"
                  >
                    Download the app
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="0.5625rem"
                      viewBox="0 0 14 8"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0.292892 0.292894C0.683416 -0.0976306 1.31658 -0.0976315 1.70711 0.292892L7.00002 5.58579L12.2929 0.292894C12.6834 -0.0976306 13.3166 -0.0976315 13.7071 0.292892C14.0976 0.683416 14.0976 1.31658 13.7071 1.70711L7.70713 7.70711C7.51959 7.89464 7.26524 8 7.00002 8C6.7348 8 6.48045 7.89464 6.29291 7.70711L0.292894 1.70711C-0.0976306 1.31658 -0.0976315 0.683419 0.292892 0.292894Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <div className="absolute left-0 bottom-0 right-0 h-[0.1px] w-full mb-1 bg-btn-link-underline--hover opacity-0 group-hover:opacity-100 transition-opacity "></div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
      <div className="max-w-[68rem] mx-auto grid grid-cols-12 mt-16 md:mt-20">
        <div className="md:col-span-8 md:col-start-3 col-span-12">
          <div className="flex flex-col relative items-center text-center">
            <h3 className="text-4xl leading-tight font-normal-tight font-normal text-balance">
              Writes, brainstorms, edits, and explores ideas with you
            </h3>
          </div>
        </div>
      </div>
      <div className="w-full grid grid-cols-12 my-16 max-w-[68rem] mx-auto px-5 lg:px-0">
        <div className="col-span-12">
          <div className="w-full h-full grid gap-1 grid-cols-1 md:grid-cols-1 max-w-[68rem] p-0">
            <div
              className="flex flex-col w-full mx-auto transition-opacity ease-in-out duration-300 max-w-media relative"
              data-caption-height="0"
              data-caption-open="false"
            >
              <div className="relative w-full">
                <div className="relative h-full w-full overflow-hidden rounded-md aspect-auto bg-transparent transition-[background] ease-in-out duration-300">
                  <picture className="mx-auto">
                    <source
                      media="(min-width: 768px) and (prefers-color-scheme: light)"
                      srcSet="https://images.ctfassets.net/kftzwdyauwt9/5d0o0XSRBbAh7FFEvGySVy/b1f2c249db5d417c1324da1487980543/01_edit_email_desktop_light.png?w=640&q=80&fm=webp 640w, https://images.ctfassets.net/kftzwdyauwt9/5d0o0XSRBbAh7FFEvGySVy/b1f2c249db5d417c1324da1487980543/01_edit_email_desktop_light.png?w=750&q=80&fm=webp 750w, https://images.ctfassets.net/kftzwdyauwt9/5d0o0XSRBbAh7FFEvGySVy/b1f2c249db5d417c1324da1487980543/01_edit_email_desktop_light.png?w=828&q=80&fm=webp 828w, https://images.ctfassets.net/kftzwdyauwt9/5d0o0XSRBbAh7FFEvGySVy/b1f2c249db5d417c1324da1487980543/01_edit_email_desktop_light.png?w=1080&q=80&fm=webp 1080w, https://images.ctfassets.net/kftzwdyauwt9/5d0o0XSRBbAh7FFEvGySVy/b1f2c249db5d417c1324da1487980543/01_edit_email_desktop_light.png?w=1200&q=80&fm=webp 1200w, https://images.ctfassets.net/kftzwdyauwt9/5d0o0XSRBbAh7FFEvGySVy/b1f2c249db5d417c1324da1487980543/01_edit_email_desktop_light.png?w=1920&q=80&fm=webp 1920w, https://images.ctfassets.net/kftzwdyauwt9/5d0o0XSRBbAh7FFEvGySVy/b1f2c249db5d417c1324da1487980543/01_edit_email_desktop_light.png?w=2048&q=80&fm=webp 2048w, https://images.ctfassets.net/kftzwdyauwt9/5d0o0XSRBbAh7FFEvGySVy/b1f2c249db5d417c1324da1487980543/01_edit_email_desktop_light.png?w=3840&q=80&fm=webp 3840w"
                    />
                    <source
                      media="(prefers-color-scheme: light)"
                      srcSet="https://images.ctfassets.net/kftzwdyauwt9/5MQKiofhISM9xGRUZtR69A/2cd12e5961aba53772c794c8135d9629/01_edit_email_mobile_light.png?w=640&q=70&fm=webp 640w, https://images.ctfassets.net/kftzwdyauwt9/5MQKiofhISM9xGRUZtR69A/2cd12e5961aba53772c794c8135d9629/01_edit_email_mobile_light.png?w=750&q=70&fm=webp 750w, https://images.ctfassets.net/kftzwdyauwt9/5MQKiofhISM9xGRUZtR69A/2cd12e5961aba53772c794c8135d9629/01_edit_email_mobile_light.png?w=828&q=70&fm=webp 828w, https://images.ctfassets.net/kftzwdyauwt9/5MQKiofhISM9xGRUZtR69A/2cd12e5961aba53772c794c8135d9629/01_edit_email_mobile_light.png?w=1080&q=70&fm=webp 1080w, https://images.ctfassets.net/kftzwdyauwt9/5MQKiofhISM9xGRUZtR69A/2cd12e5961aba53772c794c8135d9629/01_edit_email_mobile_light.png?w=1200&q=70&fm=webp 1200w, https://images.ctfassets.net/kftzwdyauwt9/5MQKiofhISM9xGRUZtR69A/2cd12e5961aba53772c794c8135d9629/01_edit_email_mobile_light.png?w=1920&q=70&fm=webp 1920w, https://images.ctfassets.net/kftzwdyauwt9/5MQKiofhISM9xGRUZtR69A/2cd12e5961aba53772c794c8135d9629/01_edit_email_mobile_light.png?w=2048&q=70&fm=webp 2048w, https://images.ctfassets.net/kftzwdyauwt9/5MQKiofhISM9xGRUZtR69A/2cd12e5961aba53772c794c8135d9629/01_edit_email_mobile_light.png?w=3840&q=70&fm=webp 3840w"
                    />
                    <source
                      media="(min-width: 768px) and (prefers-color-scheme: dark)"
                      srcSet="https://images.ctfassets.net/kftzwdyauwt9/5BPmBoMLeRK0WOuOeIBSwu/ce6c17320399e80511773a39f10a1935/01_edit_email_desktop_dark.png?w=640&q=80&fm=webp 640w, https://images.ctfassets.net/kftzwdyauwt9/5BPmBoMLeRK0WOuOeIBSwu/ce6c17320399e80511773a39f10a1935/01_edit_email_desktop_dark.png?w=750&q=80&fm=webp 750w, https://images.ctfassets.net/kftzwdyauwt9/5BPmBoMLeRK0WOuOeIBSwu/ce6c17320399e80511773a39f10a1935/01_edit_email_desktop_dark.png?w=828&q=80&fm=webp 828w, https://images.ctfassets.net/kftzwdyauwt9/5BPmBoMLeRK0WOuOeIBSwu/ce6c17320399e80511773a39f10a1935/01_edit_email_desktop_dark.png?w=1080&q=80&fm=webp 1080w, https://images.ctfassets.net/kftzwdyauwt9/5BPmBoMLeRK0WOuOeIBSwu/ce6c17320399e80511773a39f10a1935/01_edit_email_desktop_dark.png?w=1200&q=80&fm=webp 1200w, https://images.ctfassets.net/kftzwdyauwt9/5BPmBoMLeRK0WOuOeIBSwu/ce6c17320399e80511773a39f10a1935/01_edit_email_desktop_dark.png?w=1920&q=80&fm=webp 1920w, https://images.ctfassets.net/kftzwdyauwt9/5BPmBoMLeRK0WOuOeIBSwu/ce6c17320399e80511773a39f10a1935/01_edit_email_desktop_dark.png?w=2048&q=80&fm=webp 2048w, https://images.ctfassets.net/kftzwdyauwt9/5BPmBoMLeRK0WOuOeIBSwu/ce6c17320399e80511773a39f10a1935/01_edit_email_desktop_dark.png?w=3840&q=80&fm=webp 3840w"
                    />
                    <source
                      media="(prefers-color-scheme: dark)"
                      srcSet="https://images.ctfassets.net/kftzwdyauwt9/3gtF0yMwo3meYqs4AfArEi/dc9cf9ed563401e5c3e35e37062f62be/01_edit_email_mobile_dark.png?w=640&q=70&fm=webp 640w, https://images.ctfassets.net/kftzwdyauwt9/3gtF0yMwo3meYqs4AfArEi/dc9cf9ed563401e5c3e35e37062f62be/01_edit_email_mobile_dark.png?w=750&q=70&fm=webp 750w, https://images.ctfassets.net/kftzwdyauwt9/3gtF0yMwo3meYqs4AfArEi/dc9cf9ed563401e5c3e35e37062f62be/01_edit_email_mobile_dark.png?w=828&q=70&fm=webp 828w, https://images.ctfassets.net/kftzwdyauwt9/3gtF0yMwo3meYqs4AfArEi/dc9cf9ed563401e5c3e35e37062f62be/01_edit_email_mobile_dark.png?w=1080&q=70&fm=webp 1080w, https://images.ctfassets.net/kftzwdyauwt9/3gtF0yMwo3meYqs4AfArEi/dc9cf9ed563401e5c3e35e37062f62be/01_edit_email_mobile_dark.png?w=1200&q=70&fm=webp 1200w, https://images.ctfassets.net/kftzwdyauwt9/3gtF0yMwo3meYqs4AfArEi/dc9cf9ed563401e5c3e35e37062f62be/01_edit_email_mobile_dark.png?w=1920&q=70&fm=webp 1920w, https://images.ctfassets.net/kftzwdyauwt9/3gtF0yMwo3meYqs4AfArEi/dc9cf9ed563401e5c3e35e37062f62be/01_edit_email_mobile_dark.png?w=2048&q=70&fm=webp 2048w, https://images.ctfassets.net/kftzwdyauwt9/3gtF0yMwo3meYqs4AfArEi/dc9cf9ed563401e5c3e35e37062f62be/01_edit_email_mobile_dark.png?w=3840&q=70&fm=webp 3840w"
                    />
                    <img
                      alt="A conversation between a user and ChatGPT on an interface about rewriting an email to appear friendly and professional."
                      loading="lazy"
                      width="1940"
                      height="1212"
                      decoding="async"
                      className="mx-auto"
                      sizes="(min-width: 1728px) 1728px, 100vw"
                      srcSet="https://images.ctfassets.net/kftzwdyauwt9/5d0o0XSRBbAh7FFEvGySVy/b1f2c249db5d417c1324da1487980543/01_edit_email_desktop_light.png?w=640&q=90&fm=webp 640w, https://images.ctfassets.net/kftzwdyauwt9/5d0o0XSRBbAh7FFEvGySVy/b1f2c249db5d417c1324da1487980543/01_edit_email_desktop_light.png?w=750&q=90&fm=webp 750w, https://images.ctfassets.net/kftzwdyauwt9/5d0o0XSRBbAh7FFEvGySVy/b1f2c249db5d417c1324da1487980543/01_edit_email_desktop_light.png?w=828&q=90&fm=webp 828w, https://images.ctfassets.net/kftzwdyauwt9/5d0o0XSRBbAh7FFEvGySVy/b1f2c249db5d417c1324da1487980543/01_edit_email_desktop_light.png?w=1080&q=90&fm=webp 1080w, https://images.ctfassets.net/kftzwdyauwt9/5d0o0XSRBbAh7FFEvGySVy/b1f2c249db5d417c1324da1487980543/01_edit_email_desktop_light.png?w=1200&q=90&fm=webp 1200w, https://images.ctfassets.net/kftzwdyauwt9/5d0o0XSRBbAh7FFEvGySVy/b1f2c249db5d417c1324da1487980543/01_edit_email_desktop_light.png?w=1920&q=90&fm=webp 1920w, https://images.ctfassets.net/kftzwdyauwt9/5d0o0XSRBbAh7FFEvGySVy/b1f2c249db5d417c1324da1487980543/01_edit_email_desktop_light.png?w=2048&q=90&fm=webp 2048w, https://images.ctfassets.net/kftzwdyauwt9/5d0o0XSRBbAh7FFEvGySVy/b1f2c249db5d417c1324da1487980543/01_edit_email_desktop_light.png?w=3840&q=90&fm=webp 3840w"
                      src="https://images.ctfassets.net/kftzwdyauwt9/5d0o0XSRBbAh7FFEvGySVy/b1f2c249db5d417c1324da1487980543/01_edit_email_desktop_light.png?w=3840&q=90&fm=webp"
                    />
                  </picture>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[68rem] mx-auto grid grid-cols-12 mt-16 md:mt-20">
        <div className="md:col-span-8 md:col-start-3 col-span-12">
          <div className="flex flex-col relative items-center text-center">
            <h3 className="text-4xl leading-tight font-normal-tight font-normal text-balance">
              Summarize meetings. Find new insights. Increase productivity.
            </h3>
          </div>
        </div>
      </div>
      <div className="w-full grid grid-cols-12 my-16 max-w-[68rem] mx-auto px-5 lg:px-0">
        <div className="col-span-12">
          <div className="w-full h-full grid gap-3 grid-cols-1 md:grid-cols-1 max-w-[68rem] mx-auto p-0">
            <div
              className="flex flex-col w-full mx-auto transition-opacity duration-normal max-w-media relative"
              data-caption-height="0"
              data-caption-open="false"
            >
              <div className="relative w-full">
                <div className="relative h-full w-full overflow-hidden rounded-md aspect-auto bg-transparent transition-[background] ease-curve-d duration-normal">
                  <picture className="mx-auto">
                    <source
                      media="(min-width: 768px) and (prefers-color-scheme: light)"
                      srcSet="
                      https://images.ctfassets.net/kftzwdyauwt9/2TGxQkhDFLiCHyxUZZKzC/668cbe2acdd27d36e8cbcd36538760a7/02_summarize_desktop_light.png?w=640&q=80&fm=webp 640w,
                      https://images.ctfassets.net/kftzwdyauwt9/2TGxQkhDFLiCHyxUZZKzC/668cbe2acdd27d36e8cbcd36538760a7/02_summarize_desktop_light.png?w=750&q=80&fm=webp 750w,
                      https://images.ctfassets.net/kftzwdyauwt9/2TGxQkhDFLiCHyxUZZKzC/668cbe2acdd27d36e8cbcd36538760a7/02_summarize_desktop_light.png?w=828&q=80&fm=webp 828w,
                      https://images.ctfassets.net/kftzwdyauwt9/2TGxQkhDFLiCHyxUZZKzC/668cbe2acdd27d36e8cbcd36538760a7/02_summarize_desktop_light.png?w=1080&q=80&fm=webp 1080w,
                      https://images.ctfassets.net/kftzwdyauwt9/2TGxQkhDFLiCHyxUZZKzC/668cbe2acdd27d36e8cbcd36538760a7/02_summarize_desktop_light.png?w=1200&q=80&fm=webp 1200w,
                      https://images.ctfassets.net/kftzwdyauwt9/2TGxQkhDFLiCHyxUZZKzC/668cbe2acdd27d36e8cbcd36538760a7/02_summarize_desktop_light.png?w=1920&q=80&fm=webp 1920w,
                      https://images.ctfassets.net/kftzwdyauwt9/2TGxQkhDFLiCHyxUZZKzC/668cbe2acdd27d36e8cbcd36538760a7/02_summarize_desktop_light.png?w=2048&q=80&fm=webp 2048w,
                      https://images.ctfassets.net/kftzwdyauwt9/2TGxQkhDFLiCHyxUZZKzC/668cbe2acdd27d36e8cbcd36538760a7/02_summarize_desktop_light.png?w=3840&q=80&fm=webp 3840w
                    "
                    />
                    <source
                      media="(prefers-color-scheme: light)"
                      srcSet="
                      https://images.ctfassets.net/kftzwdyauwt9/6lbGMIZCkeDq0XyR7pm63g/6e994c8e6df55d7b2a3bf8be32a3f94a/02_summarize_mobile_light.png?w=640&q=70&fm=webp 640w,
                      https://images.ctfassets.net/kftzwdyauwt9/6lbGMIZCkeDq0XyR7pm63g/6e994c8e6df55d7b2a3bf8be32a3f94a/02_summarize_mobile_light.png?w=750&q=70&fm=webp 750w,
                      https://images.ctfassets.net/kftzwdyauwt9/6lbGMIZCkeDq0XyR7pm63g/6e994c8e6df55d7b2a3bf8be32a3f94a/02_summarize_mobile_light.png?w=828&q=70&fm=webp 828w,
                      https://images.ctfassets.net/kftzwdyauwt9/6lbGMIZCkeDq0XyR7pm63g/6e994c8e6df55d7b2a3bf8be32a3f94a/02_summarize_mobile_light.png?w=1080&q=70&fm=webp 1080w,
                      https://images.ctfassets.net/kftzwdyauwt9/6lbGMIZCkeDq0XyR7pm63g/6e994c8e6df55d7b2a3bf8be32a3f94a/02_summarize_mobile_light.png?w=1200&q=70&fm=webp 1200w,
                      https://images.ctfassets.net/kftzwdyauwt9/6lbGMIZCkeDq0XyR7pm63g/6e994c8e6df55d7b2a3bf8be32a3f94a/02_summarize_mobile_light.png?w=1920&q=70&fm=webp 1920w,
                      https://images.ctfassets.net/kftzwdyauwt9/6lbGMIZCkeDq0XyR7pm63g/6e994c8e6df55d7b2a3bf8be32a3f94a/02_summarize_mobile_light.png?w=2048&q=70&fm=webp 2048w,
                      https://images.ctfassets.net/kftzwdyauwt9/6lbGMIZCkeDq0XyR7pm63g/6e994c8e6df55d7b2a3bf8be32a3f94a/02_summarize_mobile_light.png?w=3840&q=70&fm=webp 3840w
                    "
                    />
                    <source
                      media="(min-width: 768px) and (prefers-color-scheme: dark)"
                      srcSet="
                      https://images.ctfassets.net/kftzwdyauwt9/3XFFOMcLbDkEKU7xRWsxnK/400a4984d0726db6c4601dd3bca8adaf/02_summarize_desktop_dark.png?w=640&q=80&fm=webp 640w,
                      https://images.ctfassets.net/kftzwdyauwt9/3XFFOMcLbDkEKU7xRWsxnK/400a4984d0726db6c4601dd3bca8adaf/02_summarize_desktop_dark.png?w=750&q=80&fm=webp 750w,
                      https://images.ctfassets.net/kftzwdyauwt9/3XFFOMcLbDkEKU7xRWsxnK/400a4984d0726db6c4601dd3bca8adaf/02_summarize_desktop_dark.png?w=828&q=80&fm=webp 828w,
                      https://images.ctfassets.net/kftzwdyauwt9/3XFFOMcLbDkEKU7xRWsxnK/400a4984d0726db6c4601dd3bca8adaf/02_summarize_desktop_dark.png?w=1080&q=80&fm=webp 1080w,
                      https://images.ctfassets.net/kftzwdyauwt9/3XFFOMcLbDkEKU7xRWsxnK/400a4984d0726db6c4601dd3bca8adaf/02_summarize_desktop_dark.png?w=1200&q=80&fm=webp 1200w,
                      https://images.ctfassets.net/kftzwdyauwt9/3XFFOMcLbDkEKU7xRWsxnK/400a4984d0726db6c4601dd3bca8adaf/02_summarize_desktop_dark.png?w=1920&q=80&fm=webp 1920w,
                      https://images.ctfassets.net/kftzwdyauwt9/3XFFOMcLbDkEKU7xRWsxnK/400a4984d0726db6c4601dd3bca8adaf/02_summarize_desktop_dark.png?w=2048&q=80&fm=webp 2048w,
                      https://images.ctfassets.net/kftzwdyauwt9/3XFFOMcLbDkEKU7xRWsxnK/400a4984d0726db6c4601dd3bca8adaf/02_summarize_desktop_dark.png?w=3840&q=80&fm=webp 3840w
                    "
                    />
                    <source
                      media="(prefers-color-scheme: dark)"
                      srcSet="
                      https://images.ctfassets.net/kftzwdyauwt9/jXzARra8l4nlsIjhj3tSw/c51b9ca9baea90a1c1680dd26bfd7c6c/02_summarize_mobile_dark.png?w=640&q=70&fm=webp 640w,
                      https://images.ctfassets.net/kftzwdyauwt9/jXzARra8l4nlsIjhj3tSw/c51b9ca9baea90a1c1680dd26bfd7c6c/02_summarize_mobile_dark.png?w=750&q=70&fm=webp 750w,
                      https://images.ctfassets.net/kftzwdyauwt9/jXzARra8l4nlsIjhj3tSw/c51b9ca9baea90a1c1680dd26bfd7c6c/02_summarize_mobile_dark.png?w=828&q=70&fm=webp 828w,
                      https://images.ctfassets.net/kftzwdyauwt9/jXzARra8l4nlsIjhj3tSw/c51b9ca9baea90a1c1680dd26bfd7c6c/02_summarize_mobile_dark.png?w=1080&q=70&fm=webp 1080w,
                      https://images.ctfassets.net/kftzwdyauwt9/jXzARra8l4nlsIjhj3tSw/c51b9ca9baea90a1c1680dd26bfd7c6c/02_summarize_mobile_dark.png?w=1200&q=70&fm=webp 1200w,
                      https://images.ctfassets.net/kftzwdyauwt9/jXzARra8l4nlsIjhj3tSw/c51b9ca9baea90a1c1680dd26bfd7c6c/02_summarize_mobile_dark.png?w=1920&q=70&fm=webp 1920w,
                      https://images.ctfassets.net/kftzwdyauwt9/jXzARra8l4nlsIjhj3tSw/c51b9ca9baea90a1c1680dd26bfd7c6c/02_summarize_mobile_dark.png?w=2048&q=70&fm=webp 2048w,
                      https://images.ctfassets.net/kftzwdyauwt9/jXzARra8l4nlsIjhj3tSw/c51b9ca9baea90a1c1680dd26bfd7c6c/02_summarize_mobile_dark.png?w=3840&q=70&fm=webp 3840w
                    "
                    />
                    <img
                      alt="A conversation between a user and ChatGPT on an interface about summarizing meeting notes."
                      loading="lazy"
                      width="1940"
                      height="1212"
                      decoding="async"
                      className="mx-auto"
                      style={{ color: "transparent" }}
                      sizes="(min-width: 1728px) 1728px, 100vw"
                      srcSet="
                      https://images.ctfassets.net/kftzwdyauwt9/2TGxQkhDFLiCHyxUZZKzC/668cbe2acdd27d36e8cbcd36538760a7/02_summarize_desktop_light.png?w=640&q=90&fm=webp 640w,
                      https://images.ctfassets.net/kftzwdyauwt9/2TGxQkhDFLiCHyxUZZKzC/668cbe2acdd27d36e8cbcd36538760a7/02_summarize_desktop_light.png?w=750&q=90&fm=webp 750w,
                      https://images.ctfassets.net/kftzwdyauwt9/2TGxQkhDFLiCHyxUZZKzC/668cbe2acdd27d36e8cbcd36538760a7/02_summarize_desktop_light.png?w=828&q=90&fm=webp 828w,
                      https://images.ctfassets.net/kftzwdyauwt9/2TGxQkhDFLiCHyxUZZKzC/668cbe2acdd27d36e8cbcd36538760a7/02_summarize_desktop_light.png?w=1080&q=90&fm=webp 1080w,
                      https://images.ctfassets.net/kftzwdyauwt9/2TGxQkhDFLiCHyxUZZKzC/668cbe2acdd27d36e8cbcd36538760a7/02_summarize_desktop_light.png?w=1200&q=90&fm=webp 1200w,
                      https://images.ctfassets.net/kftzwdyauwt9/2TGxQkhDFLiCHyxUZZKzC/668cbe2acdd27d36e8cbcd36538760a7/02_summarize_desktop_light.png?w=1920&q=90&fm=webp 1920w,
                      https://images.ctfassets.net/kftzwdyauwt9/2TGxQkhDFLiCHyxUZZKzC/668cbe2acdd27d36e8cbcd36538760a7/02_summarize_desktop_light.png?w=2048&q=90&fm=webp 2048w,
                      https://images.ctfassets.net/kftzwdyauwt9/2TGxQkhDFLiCHyxUZZKzC/668cbe2acdd27d36e8cbcd36538760a7/02_summarize_desktop_light.png?w=3840&q=90&fm=webp 3840w
                    "
                      src="https://images.ctfassets.net/kftzwdyauwt9/2TGxQkhDFLiCHyxUZZKzC/668cbe2acdd27d36e8cbcd36538760a7/02_summarize_desktop_light.png?w=3840&q=90&fm=webp"
                    />
                  </picture>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[68rem] mx-auto grid grid-cols-12 mt-16 md:mt-20">
        <div className="md:col-span-8 md:col-start-3 col-span-12">
          <div className="flex flex-col relative items-center text-center">
            <h3 className="text-4xl leading-tight font-normal-tight font-normal text-balance">
              Generate and debug code. Automate repetitive tasks. Learn new
              APIs.
            </h3>
          </div>
        </div>
      </div>
      <div className="w-full grid grid-cols-12 my-16 max-w-[68rem] mx-auto px-5 lg:px-0">
        <div className="col-span-12">
          <div className="w-full h-full grid gap-3 grid-cols-1 md:grid-cols-1 max-w-[68rem] mx-auto p-0">
            <div
              className="flex flex-col w-full mx-auto transition-opacity duration-normal max-w-media relative"
              data-caption-height="0"
              data-caption-open="false"
            >
              <div className="relative w-full">
                <div className="relative h-full w-full overflow-hidden rounded-md aspect-auto bg-transparent transition-[background] ease-curve-d duration-normal">
                  <picture className="mx-auto">
                    <source
                      media="(min-width: 768px) and (prefers-color-scheme: light)"
                      srcSet="
                      https://images.ctfassets.net/kftzwdyauwt9/01qGC80lAevPov5jhoBQ6a/92e40c8d0e41e6943d854d154cb6cbd7/03_code_desktop_light.png?w=640&q=80&fm=webp 640w,
                      https://images.ctfassets.net/kftzwdyauwt9/01qGC80lAevPov5jhoBQ6a/92e40c8d0e41e6943d854d154cb6cbd7/03_code_desktop_light.png?w=750&q=80&fm=webp 750w,
                      https://images.ctfassets.net/kftzwdyauwt9/01qGC80lAevPov5jhoBQ6a/92e40c8d0e41e6943d854d154cb6cbd7/03_code_desktop_light.png?w=828&q=80&fm=webp 828w,
                      https://images.ctfassets.net/kftzwdyauwt9/01qGC80lAevPov5jhoBQ6a/92e40c8d0e41e6943d854d154cb6cbd7/03_code_desktop_light.png?w=1080&q=80&fm=webp 1080w,
                      https://images.ctfassets.net/kftzwdyauwt9/01qGC80lAevPov5jhoBQ6a/92e40c8d0e41e6943d854d154cb6cbd7/03_code_desktop_light.png?w=1200&q=80&fm=webp 1200w,
                      https://images.ctfassets.net/kftzwdyauwt9/01qGC80lAevPov5jhoBQ6a/92e40c8d0e41e6943d854d154cb6cbd7/03_code_desktop_light.png?w=1920&q=80&fm=webp 1920w,
                      https://images.ctfassets.net/kftzwdyauwt9/01qGC80lAevPov5jhoBQ6a/92e40c8d0e41e6943d854d154cb6cbd7/03_code_desktop_light.png?w=2048&q=80&fm=webp 2048w,
                      https://images.ctfassets.net/kftzwdyauwt9/01qGC80lAevPov5jhoBQ6a/92e40c8d0e41e6943d854d154cb6cbd7/03_code_desktop_light.png?w=3840&q=80&fm=webp 3840w
                    "
                    />
                    <source
                      media="(prefers-color-scheme: light)"
                      srcSet="
                      https://images.ctfassets.net/kftzwdyauwt9/2hLfeN5K62ta3kD9QVp0Zb/6c6233884d9c3d6336890156094aa649/03_code_mobile_light.png?w=640&q=70&fm=webp 640w,
                      https://images.ctfassets.net/kftzwdyauwt9/2hLfeN5K62ta3kD9QVp0Zb/6c6233884d9c3d6336890156094aa649/03_code_mobile_light.png?w=750&q=70&fm=webp 750w,
                      https://images.ctfassets.net/kftzwdyauwt9/2hLfeN5K62ta3kD9QVp0Zb/6c6233884d9c3d6336890156094aa649/03_code_mobile_light.png?w=828&q=70&fm=webp 828w,
                      https://images.ctfassets.net/kftzwdyauwt9/2hLfeN5K62ta3kD9QVp0Zb/6c6233884d9c3d6336890156094aa649/03_code_mobile_light.png?w=1080&q=70&fm=webp 1080w,
                      https://images.ctfassets.net/kftzwdyauwt9/2hLfeN5K62ta3kD9QVp0Zb/6c6233884d9c3d6336890156094aa649/03_code_mobile_light.png?w=1200&q=70&fm=webp 1200w,
                      https://images.ctfassets.net/kftzwdyauwt9/2hLfeN5K62ta3kD9QVp0Zb/6c6233884d9c3d6336890156094aa649/03_code_mobile_light.png?w=1920&q=70&fm=webp 1920w,
                      https://images.ctfassets.net/kftzwdyauwt9/2hLfeN5K62ta3kD9QVp0Zb/6c6233884d9c3d6336890156094aa649/03_code_mobile_light.png?w=2048&q=70&fm=webp 2048w,
                      https://images.ctfassets.net/kftzwdyauwt9/2hLfeN5K62ta3kD9QVp0Zb/6c6233884d9c3d6336890156094aa649/03_code_mobile_light.png?w=3840&q=70&fm=webp 3840w
                    "
                    />
                    <source
                      media="(min-width: 768px) and (prefers-color-scheme: dark)"
                      srcSet="
                      https://images.ctfassets.net/kftzwdyauwt9/1BwuuaPLJarThH7erMwjki/a80737b9e7fe8de3afb5e42e65c32c60/03_code_desktop_dark.png?w=640&q=80&fm=webp 640w,
                      https://images.ctfassets.net/kftzwdyauwt9/1BwuuaPLJarThH7erMwjki/a80737b9e7fe8de3afb5e42e65c32c60/03_code_desktop_dark.png?w=750&q=80&fm=webp 750w,
                      https://images.ctfassets.net/kftzwdyauwt9/1BwuuaPLJarThH7erMwjki/a80737b9e7fe8de3afb5e42e65c32c60/03_code_desktop_dark.png?w=828&q=80&fm=webp 828w,
                      https://images.ctfassets.net/kftzwdyauwt9/1BwuuaPLJarThH7erMwjki/a80737b9e7fe8de3afb5e42e65c32c60/03_code_desktop_dark.png?w=1080&q=80&fm=webp 1080w,
                      https://images.ctfassets.net/kftzwdyauwt9/1BwuuaPLJarThH7erMwjki/a80737b9e7fe8de3afb5e42e65c32c60/03_code_desktop_dark.png?w=1200&q=80&fm=webp 1200w,
                      https://images.ctfassets.net/kftzwdyauwt9/1BwuuaPLJarThH7erMwjki/a80737b9e7fe8de3afb5e42e65c32c60/03_code_desktop_dark.png?w=1920&q=80&fm=webp 1920w,
                      https://images.ctfassets.net/kftzwdyauwt9/1BwuuaPLJarThH7erMwjki/a80737b9e7fe8de3afb5e42e65c32c60/03_code_desktop_dark.png?w=2048&q=80&fm=webp 2048w,
                      https://images.ctfassets.net/kftzwdyauwt9/1BwuuaPLJarThH7erMwjki/a80737b9e7fe8de3afb5e42e65c32c60/03_code_desktop_dark.png?w=3840&q=80&fm=webp 3840w
                    "
                    />
                    <source
                      media="(prefers-color-scheme: dark)"
                      srcSet="
                      https://images.ctfassets.net/kftzwdyauwt9/4A4HyE48SruFIxETD17a4L/9498b93c837437e6eff57994bfd982c7/03_code_mobile_dark.png?w=640&q=70&fm=webp 640w,
                      https://images.ctfassets.net/kftzwdyauwt9/4A4HyE48SruFIxETD17a4L/9498b93c837437e6eff57994bfd982c7/03_code_mobile_dark.png?w=750&q=70&fm=webp 750w,
                      https://images.ctfassets.net/kftzwdyauwt9/4A4HyE48SruFIxETD17a4L/9498b93c837437e6eff57994bfd982c7/03_code_mobile_dark.png?w=828&q=70&fm=webp 828w,
                      https://images.ctfassets.net/kftzwdyauwt9/4A4HyE48SruFIxETD17a4L/9498b93c837437e6eff57994bfd982c7/03_code_mobile_dark.png?w=1080&q=70&fm=webp 1080w,
                      https://images.ctfassets.net/kftzwdyauwt9/4A4HyE48SruFIxETD17a4L/9498b93c837437e6eff57994bfd982c7/03_code_mobile_dark.png?w=1200&q=70&fm=webp 1200w,
                      https://images.ctfassets.net/kftzwdyauwt9/4A4HyE48SruFIxETD17a4L/9498b93c837437e6eff57994bfd982c7/03_code_mobile_dark.png?w=1920&q=70&fm=webp 1920w,
                      https://images.ctfassets.net/kftzwdyauwt9/4A4HyE48SruFIxETD17a4L/9498b93c837437e6eff57994bfd982c7/03_code_mobile_dark.png?w=2048&q=70&fm=webp 2048w,
                      https://images.ctfassets.net/kftzwdyauwt9/4A4HyE48SruFIxETD17a4L/9498b93c837437e6eff57994bfd982c7/03_code_mobile_dark.png?w=3840&q=70&fm=webp 3840w
                    "
                    />
                    <img
                      alt="A conversation between a user and ChatGPT on an interface about creating CSS with specific parameters."
                      loading="lazy"
                      width="1940"
                      height="1212"
                      decoding="async"
                      className="mx-auto"
                      style={{ color: "transparent" }}
                      sizes="(min-width: 1728px) 1728px, 100vw"
                      srcSet="
                      https://images.ctfassets.net/kftzwdyauwt9/01qGC80lAevPov5jhoBQ6a/92e40c8d0e41e6943d854d154cb6cbd7/03_code_desktop_light.png?w=640&q=90&fm=webp 640w,
                      https://images.ctfassets.net/kftzwdyauwt9/01qGC80lAevPov5jhoBQ6a/92e40c8d0e41e6943d854d154cb6cbd7/03_code_desktop_light.png?w=750&q=90&fm=webp 750w,
                      https://images.ctfassets.net/kftzwdyauwt9/01qGC80lAevPov5jhoBQ6a/92e40c8d0e41e6943d854d154cb6cbd7/03_code_desktop_light.png?w=828&q=90&fm=webp 828w,
                      https://images.ctfassets.net/kftzwdyauwt9/01qGC80lAevPov5jhoBQ6a/92e40c8d0e41e6943d854d154cb6cbd7/03_code_desktop_light.png?w=1080&q=90&fm=webp 1080w,
                      https://images.ctfassets.net/kftzwdyauwt9/01qGC80lAevPov5jhoBQ6a/92e40c8d0e41e6943d854d154cb6cbd7/03_code_desktop_light.png?w=1200&q=90&fm=webp 1200w,
                      https://images.ctfassets.net/kftzwdyauwt9/01qGC80lAevPov5jhoBQ6a/92e40c8d0e41e6943d854d154cb6cbd7/03_code_desktop_light.png?w=1920&q=90&fm=webp 1920w,
                      https://images.ctfassets.net/kftzwdyauwt9/01qGC80lAevPov5jhoBQ6a/92e40c8d0e41e6943d854d154cb6cbd7/03_code_desktop_light.png?w=2048&q=90&fm=webp 2048w,
                      https://images.ctfassets.net/kftzwdyauwt9/01qGC80lAevPov5jhoBQ6a/92e40c8d0e41e6943d854d154cb6cbd7/03_code_desktop_light.png?w=3840&q=90&fm=webp 3840w
                    "
                      src="https://images.ctfassets.net/kftzwdyauwt9/01qGC80lAevPov5jhoBQ6a/92e40c8d0e41e6943d854d154cb6cbd7/03_code_desktop_light.png?w=3840&q=90&fm=webp"
                    />
                  </picture>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[68rem] mx-auto grid grid-cols-12 mt-16 md:mt-20">
        <div className="md:col-span-8 md:col-start-3 col-span-12">
          <div className="flex flex-col relative items-center text-center">
            <h3 className="text-4xl leading-tight font-normal-tight font-normal text-balance">
              Learn something new. Dive into a hobby. Answer complex questions.
            </h3>
          </div>
        </div>
      </div>
      <div className="w-full grid grid-cols-12 my-16 max-w-[68rem] mx-auto px-5 lg:px-0">
        <div className="col-span-12">
          <div className="w-full h-full grid gap-3 grid-cols-1 md:grid-cols-1 max-w-[68rem] mx-auto p-0">
            <div
              className="flex flex-col w-full mx-auto transition-opacity duration-normal max-w-media relative"
              data-caption-height="0"
              data-caption-open="false"
            >
              <div className="relative w-full">
                <div className="relative h-full w-full overflow-hidden rounded-md aspect-auto bg-transparent transition-[background] ease-curve-d duration-normal">
                  <picture className="mx-auto">
                    <source
                      media="(min-width: 768px) and (prefers-color-scheme: light)"
                      srcSet="
                      https://images.ctfassets.net/kftzwdyauwt9/dj3TUYzcObBHupmeNKuoT/84827f81d82240279359525b3f988e50/04_learn_desktop_light.png?w=640&q=80&fm=webp 640w,
                      https://images.ctfassets.net/kftzwdyauwt9/dj3TUYzcObBHupmeNKuoT/84827f81d82240279359525b3f988e50/04_learn_desktop_light.png?w=750&q=80&fm=webp 750w,
                      https://images.ctfassets.net/kftzwdyauwt9/dj3TUYzcObBHupmeNKuoT/84827f81d82240279359525b3f988e50/04_learn_desktop_light.png?w=828&q=80&fm=webp 828w,
                      https://images.ctfassets.net/kftzwdyauwt9/dj3TUYzcObBHupmeNKuoT/84827f81d82240279359525b3f988e50/04_learn_desktop_light.png?w=1080&q=80&fm=webp 1080w,
                      https://images.ctfassets.net/kftzwdyauwt9/dj3TUYzcObBHupmeNKuoT/84827f81d82240279359525b3f988e50/04_learn_desktop_light.png?w=1200&q=80&fm=webp 1200w,
                      https://images.ctfassets.net/kftzwdyauwt9/dj3TUYzcObBHupmeNKuoT/84827f81d82240279359525b3f988e50/04_learn_desktop_light.png?w=1920&q=80&fm=webp 1920w,
                      https://images.ctfassets.net/kftzwdyauwt9/dj3TUYzcObBHupmeNKuoT/84827f81d82240279359525b3f988e50/04_learn_desktop_light.png?w=2048&q=80&fm=webp 2048w,
                      https://images.ctfassets.net/kftzwdyauwt9/dj3TUYzcObBHupmeNKuoT/84827f81d82240279359525b3f988e50/04_learn_desktop_light.png?w=3840&q=80&fm=webp 3840w
                    "
                    />
                    <source
                      media="(prefers-color-scheme: light)"
                      srcSet="
                      https://images.ctfassets.net/kftzwdyauwt9/621O2U40yGdN9x2SI7iMgW/91fdfb61f88a368491a424bee54f1605/04_learn_mobile_light.png?w=640&q=70&fm=webp 640w,
                      https://images.ctfassets.net/kftzwdyauwt9/621O2U40yGdN9x2SI7iMgW/91fdfb61f88a368491a424bee54f1605/04_learn_mobile_light.png?w=750&q=70&fm=webp 750w,
                      https://images.ctfassets.net/kftzwdyauwt9/621O2U40yGdN9x2SI7iMgW/91fdfb61f88a368491a424bee54f1605/04_learn_mobile_light.png?w=828&q=70&fm=webp 828w,
                      https://images.ctfassets.net/kftzwdyauwt9/621O2U40yGdN9x2SI7iMgW/91fdfb61f88a368491a424bee54f1605/04_learn_mobile_light.png?w=1080&q=70&fm=webp 1080w,
                      https://images.ctfassets.net/kftzwdyauwt9/621O2U40yGdN9x2SI7iMgW/91fdfb61f88a368491a424bee54f1605/04_learn_mobile_light.png?w=1200&q=70&fm=webp 1200w,
                      https://images.ctfassets.net/kftzwdyauwt9/621O2U40yGdN9x2SI7iMgW/91fdfb61f88a368491a424bee54f1605/04_learn_mobile_light.png?w=1920&q=70&fm=webp 1920w,
                      https://images.ctfassets.net/kftzwdyauwt9/621O2U40yGdN9x2SI7iMgW/91fdfb61f88a368491a424bee54f1605/04_learn_mobile_light.png?w=2048&q=70&fm=webp 2048w,
                      https://images.ctfassets.net/kftzwdyauwt9/621O2U40yGdN9x2SI7iMgW/91fdfb61f88a368491a424bee54f1605/04_learn_mobile_light.png?w=3840&q=70&fm=webp 3840w
                    "
                    />
                    <source
                      media="(min-width: 768px) and (prefers-color-scheme: dark)"
                      srcSet="
                      https://images.ctfassets.net/kftzwdyauwt9/gd0PuXvEN5eXAzXcfYxCT/d3d0270f2d4faf4154013b7a88e8dff2/04_learn_desktop_dark.png?w=640&q=80&fm=webp 640w,
                      https://images.ctfassets.net/kftzwdyauwt9/gd0PuXvEN5eXAzXcfYxCT/d3d0270f2d4faf4154013b7a88e8dff2/04_learn_desktop_dark.png?w=750&q=80&fm=webp 750w,
                      https://images.ctfassets.net/kftzwdyauwt9/gd0PuXvEN5eXAzXcfYxCT/d3d0270f2d4faf4154013b7a88e8dff2/04_learn_desktop_dark.png?w=828&q=80&fm=webp 828w,
                      https://images.ctfassets.net/kftzwdyauwt9/gd0PuXvEN5eXAzXcfYxCT/d3d0270f2d4faf4154013b7a88e8dff2/04_learn_desktop_dark.png?w=1080&q=80&fm=webp 1080w,
                      https://images.ctfassets.net/kftzwdyauwt9/gd0PuXvEN5eXAzXcfYxCT/d3d0270f2d4faf4154013b7a88e8dff2/04_learn_desktop_dark.png?w=1200&q=80&fm=webp 1200w,
                      https://images.ctfassets.net/kftzwdyauwt9/gd0PuXvEN5eXAzXcfYxCT/d3d0270f2d4faf4154013b7a88e8dff2/04_learn_desktop_dark.png?w=1920&q=80&fm=webp 1920w,
                      https://images.ctfassets.net/kftzwdyauwt9/gd0PuXvEN5eXAzXcfYxCT/d3d0270f2d4faf4154013b7a88e8dff2/04_learn_desktop_dark.png?w=2048&q=80&fm=webp 2048w,
                      https://images.ctfassets.net/kftzwdyauwt9/gd0PuXvEN5eXAzXcfYxCT/d3d0270f2d4faf4154013b7a88e8dff2/04_learn_desktop_dark.png?w=3840&q=80&fm=webp 3840w
                    "
                    />
                    <source
                      media="(prefers-color-scheme: dark)"
                      srcSet="
                      https://images.ctfassets.net/kftzwdyauwt9/IyfqwqAb9nCzSzjG5Rvsi/dfd01c3cf752c2d239f08d8a29b7c884/04_learn_mobile_dark.png?w=640&q=70&fm=webp 640w,
                      https://images.ctfassets.net/kftzwdyauwt9/IyfqwqAb9nCzSzjG5Rvsi/dfd01c3cf752c2d239f08d8a29b7c884/04_learn_mobile_dark.png?w=750&q=70&fm=webp 750w,
                      https://images.ctfassets.net/kftzwdyauwt9/IyfqwqAb9nCzSzjG5Rvsi/dfd01c3cf752c2d239f08d8a29b7c884/04_learn_mobile_dark.png?w=828&q=70&fm=webp 828w,
                      https://images.ctfassets.net/kftzwdyauwt9/IyfqwqAb9nCzSzjG5Rvsi/dfd01c3cf752c2d239f08d8a29b7c884/04_learn_mobile_dark.png?w=1080&q=70&fm=webp 1080w,
                      https://images.ctfassets.net/kftzwdyauwt9/IyfqwqAb9nCzSzjG5Rvsi/dfd01c3cf752c2d239f08d8a29b7c884/04_learn_mobile_dark.png?w=1200&q=70&fm=webp 1200w,
                      https://images.ctfassets.net/kftzwdyauwt9/IyfqwqAb9nCzSzjG5Rvsi/dfd01c3cf752c2d239f08d8a29b7c884/04_learn_mobile_dark.png?w=1920&q=70&fm=webp 1920w,
                      https://images.ctfassets.net/kftzwdyauwt9/IyfqwqAb9nCzSzjG5Rvsi/dfd01c3cf752c2d239f08d8a29b7c884/04_learn_mobile_dark.png?w=2048&q=70&fm=webp 2048w,
                      https://images.ctfassets.net/kftzwdyauwt9/IyfqwqAb9nCzSzjG5Rvsi/dfd01c3cf752c2d239f08d8a29b7c884/04_learn_mobile_dark.png?w=3840&q=70&fm=webp 3840w
                    "
                    />
                    <img
                      alt="A conversation between a user and ChatGPT on an interface about gathering a list of things needed to start a herb garden."
                      loading="lazy"
                      width="1940"
                      height="1212"
                      decoding="async"
                      className="mx-auto"
                      style={{ color: "transparent" }}
                      sizes="(min-width: 1728px) 1728px, 100vw"
                      srcSet="
                      https://images.ctfassets.net/kftzwdyauwt9/dj3TUYzcObBHupmeNKuoT/84827f81d82240279359525b3f988e50/04_learn_desktop_light.png?w=640&q=90&fm=webp 640w,
                      https://images.ctfassets.net/kftzwdyauwt9/dj3TUYzcObBHupmeNKuoT/84827f81d82240279359525b3f988e50/04_learn_desktop_light.png?w=750&q=90&fm=webp 750w,
                      https://images.ctfassets.net/kftzwdyauwt9/dj3TUYzcObBHupmeNKuoT/84827f81d82240279359525b3f988e50/04_learn_desktop_light.png?w=828&q=90&fm=webp 828w,
                      https://images.ctfassets.net/kftzwdyauwt9/dj3TUYzcObBHupmeNKuoT/84827f81d82240279359525b3f988e50/04_learn_desktop_light.png?w=1080&q=90&fm=webp 1080w,
                      https://images.ctfassets.net/kftzwdyauwt9/dj3TUYzcObBHupmeNKuoT/84827f81d82240279359525b3f988e50/04_learn_desktop_light.png?w=1200&q=90&fm=webp 1200w,
                      https://images.ctfassets.net/kftzwdyauwt9/dj3TUYzcObBHupmeNKuoT/84827f81d82240279359525b3f988e50/04_learn_desktop_light.png?w=1920&q=90&fm=webp 1920w,
                      https://images.ctfassets.net/kftzwdyauwt9/dj3TUYzcObBHupmeNKuoT/84827f81d82240279359525b3f988e50/04_learn_desktop_light.png?w=2048&q=90&fm=webp 2048w,
                      https://images.ctfassets.net/kftzwdyauwt9/dj3TUYzcObBHupmeNKuoT/84827f81d82240279359525b3f988e50/04_learn_desktop_light.png?w=3840&q=90&fm=webp 3840w
                    "
                      src="https://images.ctfassets.net/kftzwdyauwt9/dj3TUYzcObBHupmeNKuoT/84827f81d82240279359525b3f988e50/04_learn_desktop_light.png?w=3840&q=90&fm=webp"
                    />
                  </picture>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[68rem] mx-auto px-5 lg:px-0 grid grid-cols-12 mt-16 md:mt-20">
        <div className="md:col-span-8 md:col-start-3 col-span-12">
          <div className="flex flex-col relative items-center text-center">
            <h3 className="text-4xl leading-tight font-normal text-balance">
              Explore more features in ChatGPT
            </h3>
          </div>
        </div>
      </div>
      <div className="max-w-[68rem] mx-auto px-5 lg:px-0 mt-16 md:mt-20">
        <div className="token-surface-primary md:grid md:grid-cols-2 overflow-hidden rounded-md">
          <div className="px-6 py-12 md:p-l flex flex-col self-center">
            <h5 className="text-2xl leading-tight font-medium mb-6">
              Type, talk, and use it your way
            </h5>
            <div className="text-component mb-v mt-v max-w-[68rem] mx-auto px-5 lg:px-0 grid grid-cols-12 text-left !my-0 !flex !px-0 !mx-0 not-prose">
              <div className="col-span-12 md:col-span-8 md:col-start-3 max-w-none prose opacity-100">
                <p>
                  <span>
                    With ChatGPT, you can type or start a voice conversation by
                    tapping the headphone icon in the mobile app.&nbsp;
                  </span>
                </p>
                <p>
                  <span>
                    <br />
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="h-full w-full">
            <div
              className="w-full mx-auto transition-opacity ease-curve-c duration-normal max-w-media relative"
              data-caption-height="0"
              data-caption-open="false"
            >
              <div className="relative w-full" style={{ aspectRatio: "1 / 1" }}>
                <div
                  tabIndex={0}
                  className="relative rounded-s flex w-full overflow-hidden h-full group outline-none aspect-1/1"
                >
                  <video
                    playsInline
                    muted
                    autoPlay
                    className="aspect-1/1 md:aspect-1/1 lg:aspect-1/1 min-w-full min-h-full absolute left-0 top-0 w-full h-full object-cover"
                  >
                    <source
                      src="https://cdn.openai.com/chatgpt/use_it_your_way.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                  <div className="top-0 items-center absolute left-0 right-0 p-1 md:p-2 flex justify-between gap-1 text-gray-0 text-caption z-[1] transition-opacity duration-normal">
                    <div className="justify-start items-center flex flex-row-reverse w-full gap-1">
                      <button
                        type="button"
                        className="flex items-center justify-center disabled:text-gray-40 focus-visible:outline-offset-0 rounded-s w-[24px] h-[24px] hover:bg-btn-secondary-base--hover"
                        aria-label="Pause video"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="10"
                          viewBox="0 0 10 12"
                          fill="none"
                        >
                          <rect
                            width="3"
                            height="11"
                            y=".5"
                            fill="currentColor"
                            rx="1.5"
                          ></rect>
                          <rect
                            width="3"
                            height="11"
                            x="7"
                            y=".5"
                            fill="currentColor"
                            rx="1.5"
                          ></rect>
                        </svg>
                      </button>
                      <button
                        type="button"
                        className="flex items-center justify-center disabled:text-gray-40 focus-visible:outline-offset-0 rounded-s w-[24px] h-[24px] hover:bg-btn-secondary-base--hover"
                        aria-label="Unmute"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          viewBox="0 0 18 18"
                          fill="none"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.45913 6.36864L4.45569 6.37159C4.43756 6.38712 4.41448 6.39566 4.39061 6.39566H2.34614C1.62817 6.39566 1.04614 6.97769 1.04614 7.69566V10.5004C1.04614 11.2184 1.62817 11.8004 2.34614 11.8004H4.42523C4.44607 11.8004 4.46639 11.807 4.48335 11.8191L7.39872 13.9015C8.25915 14.5161 9.45433 13.901 9.45433 12.8436V11.3638L8.25433 10.1638V12.8436C8.25433 12.925 8.1624 12.9723 8.09621 12.925L5.18084 10.8426C4.96036 10.6851 4.69618 10.6004 4.42523 10.6004H2.34614C2.29091 10.6004 2.24614 10.5557 2.24614 10.5004V7.69566C2.24614 7.64044 2.29091 7.59566 2.34614 7.59566H4.39061C4.70093 7.59566 5.00102 7.48465 5.23664 7.2827L5.31017 7.21967L4.45913 6.36864ZM8.25433 9.10318L9.45433 10.3032V10.3031L8.25433 9.10306V9.10318ZM5.88129 6.73014L5.03026 5.8791L5.03032 5.87905L5.88135 6.73008L5.88129 6.73014ZM15.138 13.2291C17.1925 9.06923 15.9897 5.50585 14.7587 3.65933C14.5748 3.38362 14.2023 3.30911 13.9266 3.49292C13.6509 3.67673 13.5764 4.04926 13.7602 4.32497C14.7739 5.84558 15.814 8.7936 14.2361 12.3272L15.138 13.2291ZM12.7739 10.8651C13.8042 8.85611 12.9484 6.85056 12.3371 6.03547C12.1383 5.77038 11.7622 5.71665 11.4971 5.91547C11.232 6.1143 11.1783 6.49038 11.3771 6.75547C11.8023 7.32242 12.3457 8.6141 11.8617 9.95278L12.7739 10.8651ZM9.45433 7.54546V4.91352C9.45433 3.80286 8.15158 3.20368 7.3083 3.92649L6.51518 4.60631L7.36622 5.45734L8.08925 4.8376C8.11089 4.81905 8.12776 4.81423 8.14051 4.81274C8.15605 4.81092 8.17579 4.81332 8.19612 4.82267C8.21645 4.83202 8.23112 4.84545 8.23985 4.85843C8.24702 4.86908 8.25433 4.88502 8.25433 4.91352V6.34546L9.45433 7.54546Z"
                            fill="currentColor"
                          ></path>
                          <rect
                            x="1.64612"
                            y="0.797607"
                            width="22"
                            height="1.2"
                            rx="0.6"
                            transform="rotate(45 1.64612 0.797607)"
                            fill="currentColor"
                          ></rect>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="absolute inset-0 filter blur-[78.5px] bg-[rgba(0,0,0,0.30)] before:absolute before:inset-0 before:bg-[rgba(53,66,99,0.30)] transition-opacity duration-normal bottom-[80%] opacity-0 group-hover:opacity-100 group-focus:opacity-100 group-focus-within:opacity-100"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[68rem] mx-auto px-5 lg:px-0 mt-16 md:mt-20">
        <div className="token-surface-primary md:grid md:grid-cols-2 overflow-hidden rounded-md">
          <div className="px-6 py-12 md:p-l flex flex-col self-center">
            <h5 className="text-2xl leading-tight font-medium mb-6">
              Browse the web
            </h5>
            <div className="text-component mb-v mt-v max-w-[68rem] mx-auto px-5 lg:px-0 grid grid-cols-12 text-left !my-0 !flex !px-0 !mx-0 not-prose">
              <div className="col-span-12 md:col-span-8 md:col-start-3 max-w-none prose opacity-100">
                <p>
                  <span>
                    ChatGPT can answer your questions using its vast knowledge
                    and with information from the web.
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="h-full w-full">
            <div
              className="w-full mx-auto transition-opacity ease-curve-c duration-normal max-w-media relative"
              data-caption-height="0"
              data-caption-open="false"
            >
              <div className="relative w-full" style={{ aspectRatio: "1 / 1" }}>
                <div
                  tabIndex={0}
                  className="relative rounded-s flex w-full overflow-hidden h-full group outline-none aspect-1/1"
                >
                  <video
                    playsInline
                    muted
                    autoPlay
                    className="aspect-1/1 md:aspect-1/1 lg:aspect-1/1 min-w-full min-h-full absolute left-0 top-0 w-full h-full object-cover"
                  >
                    <source
                      src="https://cdn.openai.com/chatgpt/browsing.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                  <div className="top-0 items-center absolute left-0 right-0 p-1 md:p-2 flex justify-between gap-1 text-gray-0 text-caption z-[1] transition-opacity duration-normal">
                    <div className="justify-start items-center flex flex-row-reverse w-full gap-1">
                      <button
                        type="button"
                        className="flex items-center justify-center disabled:text-gray-40 focus-visible:outline-offset-0 rounded-s w-[24px] h-[24px] hover:bg-btn-secondary-base--hover"
                        aria-label="Pause video"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="10"
                          viewBox="0 0 10 12"
                          fill="none"
                        >
                          <rect
                            width="3"
                            height="11"
                            y=".5"
                            fill="currentColor"
                            rx="1.5"
                          ></rect>
                          <rect
                            width="3"
                            height="11"
                            x="7"
                            y=".5"
                            fill="currentColor"
                            rx="1.5"
                          ></rect>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="absolute inset-0 filter blur-[78.5px] bg-[rgba(0,0,0,0.30)] before:absolute before:inset-0 before:bg-[rgba(53,66,99,0.30)] transition-opacity duration-normal bottom-[80%] opacity-0 group-hover:opacity-100 group-focus:opacity-100 group-focus-within:opacity-100"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[68rem] mx-auto px-5 lg:px-0 mt-16 md:mt-20">
        <div className="token-surface-primary md:grid md:grid-cols-2 overflow-hidden rounded-md">
          <div className="px-6 py-12 md:p-l flex flex-col self-center">
            <h5 className="text-2xl leading-tight font-medium mb-6">
              Analyze data and create charts
            </h5>
            <div className="text-component mb-v mt-v max-w-[68rem] mx-auto px-5 lg:px-0 grid grid-cols-12 text-left !my-0 !flex !px-0 !mx-0 not-prose">
              <div className="col-span-12 md:col-span-8 md:col-start-3 max-w-none prose opacity-100">
                <p>
                  <span>
                    Upload a file and ask ChatGPT to help analyze data,
                    summarize information or create a chart.&nbsp;
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="h-full w-full">
            <div
              className="w-full mx-auto transition-opacity ease-curve-c duration-normal max-w-media relative"
              data-caption-height="0"
              data-caption-open="false"
            >
              <div className="relative w-full" style={{ aspectRatio: "1 / 1" }}>
                <div
                  tabIndex={0}
                  className="relative rounded-s flex w-full overflow-hidden h-full group outline-none aspect-1/1"
                >
                  <video
                    playsInline
                    muted
                    autoPlay
                    className="aspect-1/1 md:aspect-1/1 lg:aspect-1/1 min-w-full min-h-full absolute left-0 top-0 w-full h-full object-cover"
                  >
                    <source
                      src="https://cdn.openai.com/chatgpt/analyze.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                  <div className="top-0 items-center absolute left-0 right-0 p-1 md:p-2 flex justify-between gap-1 text-gray-0 text-caption z-[1] transition-opacity duration-normal">
                    <div className="justify-start items-center flex flex-row-reverse w-full gap-1">
                      <button
                        type="button"
                        className="flex items-center justify-center disabled:text-gray-40 focus-visible:outline-offset-0 rounded-s w-[24px] h-[24px] hover:bg-btn-secondary-base--hover"
                        aria-label="Pause video"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="10"
                          viewBox="0 0 10 12"
                          fill="none"
                        >
                          <rect
                            width="3"
                            height="11"
                            y=".5"
                            fill="currentColor"
                            rx="1.5"
                          ></rect>
                          <rect
                            width="3"
                            height="11"
                            x="7"
                            y=".5"
                            fill="currentColor"
                            rx="1.5"
                          ></rect>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="absolute inset-0 filter blur-[78.5px] bg-[rgba(0,0,0,0.30)] before:absolute before:inset-0 before:bg-[rgba(53,66,99,0.30)] transition-opacity duration-normal bottom-[80%] opacity-0 group-hover:opacity-100 group-focus:opacity-100 group-focus-within:opacity-100"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[68rem] mx-auto px-5 lg:px-0 mt-16 md:mt-20">
        <div className="token-surface-primary md:grid md:grid-cols-2 overflow-hidden rounded-md">
          <div className="px-6 py-12 md:p-l flex flex-col self-center">
            <h5 className="text-2xl leading-tight font-medium mb-6">
              Customize ChatGPT for work, daily tasks or inspiration with GPTs
            </h5>
            <div className="text-component mb-v mt-v max-w-[68rem] mx-auto px-5 lg:px-0 grid grid-cols-12 text-left !my-0 !flex !px-0 !mx-0 not-prose">
              <div className="col-span-12 md:col-span-8 md:col-start-3 max-w-none prose opacity-100">
                <p>
                  <b>
                    <span>​​</span>
                  </b>
                  <span>
                    Explore the GPT store and see what others have made. ChatGPT
                    Plus users can also create their own custom GPTs.&nbsp;
                  </span>
                  <span>
                    <br />
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="h-full w-full">
            <div
              className="w-full mx-auto transition-opacity ease-curve-c duration-normal max-w-media relative"
              data-caption-height="0"
              data-caption-open="false"
            >
              <div className="relative w-full" style={{ aspectRatio: "1 / 1" }}>
                <div className="relative h-full w-full overflow-hidden rounded-none aspect-1/1 bg-transparent transition-[background] ease-curve-d duration-normal">
                  <picture className="object-cover object-center">
                    <source
                      media="(min-width: 768px) and (prefers-color-scheme: light)"
                      srcSet="
                      https://images.ctfassets.net/kftzwdyauwt9/7Dg0i0yinRGkIeqeVXig6i/20dc76142190c28809a5aa1b8ee7c8f6/4a.png?w=640&q=80&fm=webp 640w,
                      https://images.ctfassets.net/kftzwdyauwt9/7Dg0i0yinRGkIeqeVXig6i/20dc76142190c28809a5aa1b8ee7c8f6/4a.png?w=750&q=80&fm=webp 750w,
                      https://images.ctfassets.net/kftzwdyauwt9/7Dg0i0yinRGkIeqeVXig6i/20dc76142190c28809a5aa1b8ee7c8f6/4a.png?w=828&q=80&fm=webp 828w,
                      https://images.ctfassets.net/kftzwdyauwt9/7Dg0i0yinRGkIeqeVXig6i/20dc76142190c28809a5aa1b8ee7c8f6/4a.png?w=1080&q=80&fm=webp 1080w,
                      https://images.ctfassets.net/kftzwdyauwt9/7Dg0i0yinRGkIeqeVXig6i/20dc76142190c28809a5aa1b8ee7c8f6/4a.png?w=1200&q=80&fm=webp 1200w,
                      https://images.ctfassets.net/kftzwdyauwt9/7Dg0i0yinRGkIeqeVXig6i/20dc76142190c28809a5aa1b8ee7c8f6/4a.png?w=1920&q=80&fm=webp 1920w,
                      https://images.ctfassets.net/kftzwdyauwt9/7Dg0i0yinRGkIeqeVXig6i/20dc76142190c28809a5aa1b8ee7c8f6/4a.png?w=2048&q=80&fm=webp 2048w,
                      https://images.ctfassets.net/kftzwdyauwt9/7Dg0i0yinRGkIeqeVXig6i/20dc76142190c28809a5aa1b8ee7c8f6/4a.png?w=3840&q=80&fm=webp 3840w
                    "
                    />
                    <source
                      media="(min-width: 768px) and (prefers-color-scheme: dark)"
                      srcSet="
                      https://images.ctfassets.net/kftzwdyauwt9/53q9pKH94nJAm9kDfMLFc2/dea82f83f8baf8f4efc766bfa6a5e1a3/4b.png?w=640&q=80&fm=webp 640w,
                      https://images.ctfassets.net/kftzwdyauwt9/53q9pKH94nJAm9kDfMLFc2/dea82f83f8baf8f4efc766bfa6a5e1a3/4b.png?w=750&q=80&fm=webp 750w,
                      https://images.ctfassets.net/kftzwdyauwt9/53q9pKH94nJAm9kDfMLFc2/dea82f83f8baf8f4efc766bfa6a5e1a3/4b.png?w=828&q=80&fm=webp 828w,
                      https://images.ctfassets.net/kftzwdyauwt9/53q9pKH94nJAm9kDfMLFc2/dea82f83f8baf8f4efc766bfa6a5e1a3/4b.png?w=1080&q=80&fm=webp 1080w,
                      https://images.ctfassets.net/kftzwdyauwt9/53q9pKH94nJAm9kDfMLFc2/dea82f83f8baf8f4efc766bfa6a5e1a3/4b.png?w=1200&q=80&fm=webp 1200w,
                      https://images.ctfassets.net/kftzwdyauwt9/53q9pKH94nJAm9kDfMLFc2/dea82f83f8baf8f4efc766bfa6a5e1a3/4b.png?w=1920&q=80&fm=webp 1920w,
                      https://images.ctfassets.net/kftzwdyauwt9/53q9pKH94nJAm9kDfMLFc2/dea82f83f8baf8f4efc766bfa6a5e1a3/4b.png?w=2048&q=80&fm=webp 2048w,
                      https://images.ctfassets.net/kftzwdyauwt9/53q9pKH94nJAm9kDfMLFc2/dea82f83f8baf8f4efc766bfa6a5e1a3/4b.png?w=3840&q=80&fm=webp 3840w
                    "
                    />
                    <img
                      alt="4a"
                      loading="lazy"
                      decoding="async"
                      data-nimg="fill"
                      className="object-cover object-center"
                      style={{
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0,
                        color: "transparent",
                      }}
                      sizes="(min-width: 68rem) 485px, 100vw"
                      srcSet="
                      https://images.ctfassets.net/kftzwdyauwt9/7Dg0i0yinRGkIeqeVXig6i/20dc76142190c28809a5aa1b8ee7c8f6/4a.png?w=640&q=90&fm=webp 640w,
                      https://images.ctfassets.net/kftzwdyauwt9/7Dg0i0yinRGkIeqeVXig6i/20dc76142190c28809a5aa1b8ee7c8f6/4a.png?w=750&q=90&fm=webp 750w,
                      https://images.ctfassets.net/kftzwdyauwt9/7Dg0i0yinRGkIeqeVXig6i/20dc76142190c28809a5aa1b8ee7c8f6/4a.png?w=828&q=90&fm=webp 828w,
                      https://images.ctfassets.net/kftzwdyauwt9/7Dg0i0yinRGkIeqeVXig6i/20dc76142190c28809a5aa1b8ee7c8f6/4a.png?w=1080&q=90&fm=webp 1080w,
                      https://images.ctfassets.net/kftzwdyauwt9/7Dg0i0yinRGkIeqeVXig6i/20dc76142190c28809a5aa1b8ee7c8f6/4a.png?w=1200&q=90&fm=webp 1200w,
                      https://images.ctfassets.net/kftzwdyauwt9/7Dg0i0yinRGkIeqeVXig6i/20dc76142190c28809a5aa1b8ee7c8f6/4a.png?w=1920&q=90&fm=webp 1920w,
                      https://images.ctfassets.net/kftzwdyauwt9/7Dg0i0yinRGkIeqeVXig6i/20dc76142190c28809a5aa1b8ee7c8f6/4a.png?w=2048&q=90&fm=webp 2048w,
                      https://images.ctfassets.net/kftzwdyauwt9/7Dg0i0yinRGkIeqeVXig6i/20dc76142190c28809a5aa1b8ee7c8f6/4a.png?w=3840&q=90&fm=webp 3840w
                    "
                      src="https://images.ctfassets.net/kftzwdyauwt9/7Dg0i0yinRGkIeqeVXig6i/20dc76142190c28809a5aa1b8ee7c8f6/4a.png?w=3840&q=90&fm=webp"
                    />
                  </picture>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[68rem] mx-auto px-5 lg:px-0 mt-16 md:mt-20">
        <div className="token-surface-primary md:grid md:grid-cols-2 overflow-hidden rounded-md">
          <div className="px-6 py-12 md:p-l flex flex-col self-center">
            <h5 className="text-2xl leading-tight font-medium mb-6">
              Create images
            </h5>
            <div className="text-component mb-v mt-v max-w-[68rem] mx-auto px-5 lg:px-0 grid grid-cols-12 text-left !my-0 !flex !px-0 !mx-0 not-prose">
              <div className="col-span-12 md:col-span-8 md:col-start-3 max-w-none prose opacity-100">
                <p>
                  <span>
                    ChatGPT Plus users can ask ChatGPT to create images using a
                    simple sentence or even a detailed paragraph.
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="h-full w-full">
            <div
              className="w-full mx-auto transition-opacity ease-curve-c duration-normal max-w-media relative"
              data-caption-height="0"
              data-caption-open="false"
            >
              <div className="relative w-full" style={{ aspectRatio: "1 / 1" }}>
                <div className="relative h-full w-full overflow-hidden rounded-none aspect-1/1 bg-transparent transition-[background] ease-curve-d duration-normal">
                  <img
                    alt="2a"
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    className="object-cover object-center"
                    style={{
                      position: "absolute",
                      height: "100%",
                      width: "100%",
                      left: 0,
                      top: 0,
                      right: 0,
                      bottom: 0,
                      color: "transparent",
                    }}
                    sizes="(min-width: 68rem) 485px, 100vw"
                    srcSet="
                    https://images.ctfassets.net/kftzwdyauwt9/7ihQsaaemgI8U2PMcXKdg0/5a5dc8235cd597668c279ef0422c0133/2a.png?w=640&q=90&fm=webp 640w,
                    https://images.ctfassets.net/kftzwdyauwt9/7ihQsaaemgI8U2PMcXKdg0/5a5dc8235cd597668c279ef0422c0133/2a.png?w=750&q=90&fm=webp 750w,
                    https://images.ctfassets.net/kftzwdyauwt9/7ihQsaaemgI8U2PMcXKdg0/5a5dc8235cd597668c279ef0422c0133/2a.png?w=828&q=90&fm=webp 828w,
                    https://images.ctfassets.net/kftzwdyauwt9/7ihQsaaemgI8U2PMcXKdg0/5a5dc8235cd597668c279ef0422c0133/2a.png?w=1080&q=90&fm=webp 1080w,
                    https://images.ctfassets.net/kftzwdyauwt9/7ihQsaaemgI8U2PMcXKdg0/5a5dc8235cd597668c279ef0422c0133/2a.png?w=1200&q=90&fm=webp 1200w,
                    https://images.ctfassets.net/kftzwdyauwt9/7ihQsaaemgI8U2PMcXKdg0/5a5dc8235cd597668c279ef0422c0133/2a.png?w=1920&q=90&fm=webp 1920w,
                    https://images.ctfassets.net/kftzwdyauwt9/7ihQsaaemgI8U2PMcXKdg0/5a5dc8235cd597668c279ef0422c0133/2a.png?w=2048&q=90&fm=webp 2048w,
                    https://images.ctfassets.net/kftzwdyauwt9/7ihQsaaemgI8U2PMcXKdg0/5a5dc8235cd597668c279ef0422c0133/2a.png?w=3840&q=90&fm=webp 3840w
                  "
                    src="https://images.ctfassets.net/kftzwdyauwt9/7ihQsaaemgI8U2PMcXKdg0/5a5dc8235cd597668c279ef0422c0133/2a.png?w=3840&q=90&fm=webp"
                  />
                </div>
              </div>
              <div className="flex absolute inset-x-0 inset-y-0 p-xs items-center justify-center">
                <div className="rounded-md w-full md:max-w-[21.875rem] max-h-full overflow-auto token-surface-primary/80 backdrop-blur-xl">
                  <div className="flex flex-col justify-center w-full h-full relative p-xs">
                    <div className="w-full mb-6">
                      <div className="flex gap-x-5xs items-center w-full text-small mb-5xs">
                        <div className="flex-none rounded-full bg-purple-50 w-[1.125rem] h-[1.125rem]"></div>
                        <div>You</div>
                      </div>
                      <div className="md:pl-[1.5625rem] max-w-full overflow-x-auto flex flex-col gap-y-5xs">
                        <div className="text-caption">
                          My daughter loves pink jellyfish. Can you design a
                          birthday card for her?
                        </div>
                      </div>
                    </div>
                    <div className="w-full max-w-full ui-overlay">
                      <div
                        className="expand-content"
                        style={{ animationDelay: "0.2s" }}
                      >
                        <div className="overflow-hidden">
                          <div className="flex gap-x-5xs items-center w-full text-small mb-5xs">
                            <div className="flex-none rounded-full overflow-hidden w-[1.125rem] h-[1.125rem]">
                              <div className="relative h-full w-full overflow-hidden rounded-md aspect-1/1 bg-transparent transition-[background] ease-curve-d duration-normal">
                                <img
                                  alt="DALL-E 3 Logo"
                                  loading="lazy"
                                  decoding="async"
                                  data-nimg="fill"
                                  className="object-cover object-center"
                                  sizes="(min-width: 1728px) 1728px, 100vw"
                                  srcSet="
                                  https://images.ctfassets.net/kftzwdyauwt9/32TaWeYDFTjsFWz6xjwTek/dfc579d0c4961d13ff95e178e87b0734/dall-e1.png?w=640&q=90&fm=webp 640w,
                                  https://images.ctfassets.net/kftzwdyauwt9/32TaWeYDFTjsFWz6xjwTek/dfc579d0c4961d13ff95e178e87b0734/dall-e1.png?w=750&q=90&fm=webp 750w,
                                  https://images.ctfassets.net/kftzwdyauwt9/32TaWeYDFTjsFWz6xjwTek/dfc579d0c4961d13ff95e178e87b0734/dall-e1.png?w=828&q=90&fm=webp 828w,
                                  https://images.ctfassets.net/kftzwdyauwt9/32TaWeYDFTjsFWz6xjwTek/dfc579d0c4961d13ff95e178e87b0734/dall-e1.png?w=1080&q=90&fm=webp 1080w,
                                  https://images.ctfassets.net/kftzwdyauwt9/32TaWeYDFTjsFWz6xjwTek/dfc579d0c4961d13ff95e178e87b0734/dall-e1.png?w=1200&q=90&fm=webp 1200w,
                                  https://images.ctfassets.net/kftzwdyauwt9/32TaWeYDFTjsFWz6xjwTek/dfc579d0c4961d13ff95e178e87b0734/dall-e1.png?w=1920&q=90&fm=webp 1920w,
                                  https://images.ctfassets.net/kftzwdyauwt9/32TaWeYDFTjsFWz6xjwTek/dfc579d0c4961d13ff95e178e87b0734/dall-e1.png?w=2048&q=90&fm=webp 2048w,
                                  https://images.ctfassets.net/kftzwdyauwt9/32TaWeYDFTjsFWz6xjwTek/dfc579d0c4961d13ff95e178e87b0734/dall-e1.png?w=3840&q=90&fm=webp 3840w
                                "
                                  src="https://images.ctfassets.net/kftzwdyauwt9/32TaWeYDFTjsFWz6xjwTek/dfc579d0c4961d13ff95e178e87b0734/dall-e1.png?w=3840&q=90&fm=webp"
                                />
                              </div>
                            </div>
                            <div>
                              <span
                                className="animate-type"
                                style={
                                  {
                                    animationDelay: "0.4s",
                                    "--n": 8,
                                  } as React.CSSProperties
                                }
                              >
                                DALL·E 3
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="md:pl-[1.5625rem] max-w-full overflow-x-auto flex flex-col gap-y-5xs">
                        <div
                          className="expand-content"
                          style={{ animationDelay: "0.4s" }}
                        >
                          <div className="overflow-hidden">
                            <div className="flex flex-wrap gap-5xs">
                              <div className="w-[6.25rem]">
                                <div className="relative h-full w-full overflow-hidden rounded-md aspect-auto bg-transparent transition-[background] ease-curve-d duration-normal [&_img]:mx-0 [&_img]:rounded-s">
                                  <img
                                    alt="jellyfish birthday card"
                                    loading="lazy"
                                    width="200"
                                    height="200"
                                    decoding="async"
                                    data-nimg="1"
                                    className="mx-auto"
                                    sizes="(min-width: 1728px) 1728px, 100vw"
                                    srcSet="
                                    https://images.ctfassets.net/kftzwdyauwt9/2OstCaAU9SDJ4qGKwizr9D/be6c73164f4ea4016697231ca67aa20d/jellyfish_birthday_card.png?w=640&q=90&fm=webp 640w,
                                    https://images.ctfassets.net/kftzwdyauwt9/2OstCaAU9SDJ4qGKwizr9D/be6c73164f4ea4016697231ca67aa20d/jellyfish_birthday_card.png?w=750&q=90&fm=webp 750w,
                                    https://images.ctfassets.net/kftzwdyauwt9/2OstCaAU9SDJ4qGKwizr9D/be6c73164f4ea4016697231ca67aa20d/jellyfish_birthday_card.png?w=828&q=90&fm=webp 828w,
                                    https://images.ctfassets.net/kftzwdyauwt9/2OstCaAU9SDJ4qGKwizr9D/be6c73164f4ea4016697231ca67aa20d/jellyfish_birthday_card.png?w=1080&q=90&fm=webp 1080w,
                                    https://images.ctfassets.net/kftzwdyauwt9/2OstCaAU9SDJ4qGKwizr9D/be6c73164f4ea4016697231ca67aa20d/jellyfish_birthday_card.png?w=1200&q=90&fm=webp 1200w,
                                    https://images.ctfassets.net/kftzwdyauwt9/2OstCaAU9SDJ4qGKwizr9D/be6c73164f4ea4016697231ca67aa20d/jellyfish_birthday_card.png?w=1920&q=90&fm=webp 1920w,
                                    https://images.ctfassets.net/kftzwdyauwt9/2OstCaAU9SDJ4qGKwizr9D/be6c73164f4ea4016697231ca67aa20d/jellyfish_birthday_card.png?w=2048&q=90&fm=webp 2048w,
                                    https://images.ctfassets.net/kftzwdyauwt9/2OstCaAU9SDJ4qGKwizr9D/be6c73164f4ea4016697231ca67aa20d/jellyfish_birthday_card.png?w=3840&q=90&fm=webp 3840w
                                  "
                                    src="https://images.ctfassets.net/kftzwdyauwt9/2OstCaAU9SDJ4qGKwizr9D/be6c73164f4ea4016697231ca67aa20d/jellyfish_birthday_card.png?w=3840&q=90&fm=webp"
                                    style={{ color: "transparent" }}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="bg-no-repeat expand-content text-caption"
                        style={{
                          animationDelay: "0.6s",
                        }}
                      >
                        <div className="overflow-hidden">
                          <span
                            className="inline animate-type"
                            data-content="I've created a birthday card for your daughter featuring a cheerful pink jellyfish! I hope it brings her joy and makes her birthday even more special."
                            style={{ animationDelay: "0.6s" }}
                          >
                            I've created a birthday card for your daughter
                            featuring a cheerful pink jellyfish! I hope it
                            brings her joy and makes her birthday even more
                            special.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[68rem] mx-auto px-5 lg:px-0 mt-16 md:mt-20">
        <div className="token-surface-primary md:grid md:grid-cols-2 overflow-hidden rounded-md">
          <div className="px-6 py-12 md:p-l flex flex-col self-center">
            <h6 className="text-2xl leading-tight font-medium mb-6">
              Apple &amp; ChatGPT
            </h6>
            <div className="text-component mb-v mt-v max-w-[68rem] mx-auto px-5 lg:px-0 grid grid-cols-12 text-left !my-0 !flex !px-0 !mx-0 not-prose">
              <div className="col-span-12 md:col-span-8 md:col-start-3 max-w-none prose opacity-100">
                <p>
                  <span>
                    At WWDC in June 2024, we announced a partnership with Apple
                    to{" "}
                  </span>
                  <span>
                    integrate ChatGPT into experiences within iOS, iPadOS, and
                    macOS.
                  </span>
                </p>
                <p>
                  <Link
                    className="transition ease-curve-a duration-250 underline-offset-[0.125rem] underline decoration-gray-40 dark:decoration-gray-60 hover:decoration-copy-primary"
                    href="/index/openai-and-apple-announce-partnership/"
                  >
                    <span>Learn more</span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="h-full w-full">
            <div
              className="w-full mx-auto transition-opacity ease-curve-c duration-normal max-w-media relative"
              data-caption-height="0"
              data-caption-open="false"
            >
              <div className="relative w-full" style={{ aspectRatio: "1 / 1" }}>
                <div className="relative h-full w-full overflow-hidden rounded-none aspect-1/1 bg-transparent transition-[background] ease-curve-d duration-normal">
                  <img
                    alt="ChatGPT > Two Up Text + Media > Plus > Apple + ChatGPT > Media Item > Apple abstract"
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    className="object-cover object-center"
                    style={{
                      position: "absolute",
                      height: "100%",
                      width: "100%",
                      left: 0,
                      top: 0,
                      right: 0,
                      bottom: 0,
                      color: "transparent",
                    }}
                    sizes="(min-width: 68rem) 485px, 100vw"
                    srcSet="
                    https://images.ctfassets.net/kftzwdyauwt9/6cPAUkFUSpBSsGDlrFZBeL/4d73c5107a1f6e00cec29ad35d772019/apple-art-2a-1x1.jpg?w=640&q=90&fm=webp 640w,
                    https://images.ctfassets.net/kftzwdyauwt9/6cPAUkFUSpBSsGDlrFZBeL/4d73c5107a1f6e00cec29ad35d772019/apple-art-2a-1x1.jpg?w=750&q=90&fm=webp 750w,
                    https://images.ctfassets.net/kftzwdyauwt9/6cPAUkFUSpBSsGDlrFZBeL/4d73c5107a1f6e00cec29ad35d772019/apple-art-2a-1x1.jpg?w=828&q=90&fm=webp 828w,
                    https://images.ctfassets.net/kftzwdyauwt9/6cPAUkFUSpBSsGDlrFZBeL/4d73c5107a1f6e00cec29ad35d772019/apple-art-2a-1x1.jpg?w=1080&q=90&fm=webp 1080w,
                    https://images.ctfassets.net/kftzwdyauwt9/6cPAUkFUSpBSsGDlrFZBeL/4d73c5107a1f6e00cec29ad35d772019/apple-art-2a-1x1.jpg?w=1200&q=90&fm=webp 1200w,
                    https://images.ctfassets.net/kftzwdyauwt9/6cPAUkFUSpBSsGDlrFZBeL/4d73c5107a1f6e00cec29ad35d772019/apple-art-2a-1x1.jpg?w=1920&q=90&fm=webp 1920w,
                    https://images.ctfassets.net/kftzwdyauwt9/6cPAUkFUSpBSsGDlrFZBeL/4d73c5107a1f6e00cec29ad35d772019/apple-art-2a-1x1.jpg?w=2048&q=90&fm=webp 2048w,
                    https://images.ctfassets.net/kftzwdyauwt9/6cPAUkFUSpBSsGDlrFZBeL/4d73c5107a1f6e00cec29ad35d772019/apple-art-2a-1x1.jpg?w=3840&q=90&fm=webp 3840w
                  "
                    src="https://images.ctfassets.net/kftzwdyauwt9/6cPAUkFUSpBSsGDlrFZBeL/4d73c5107a1f6e00cec29ad35d772019/apple-art-2a-1x1.jpg?w=3840&q=90&fm=webp"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[68rem] mx-auto px-5 lg:px-0 mt-16 md:mt-20">
        <div className="mb-m max-w-[68rem] mx-auto px-5 lg:px-0 grid grid-cols-12 p-0">
          <div className="md:col-span-8 md:col-start-3 col-span-12">
            <div className="flex flex-col relative items-center text-center">
              <h3 className="text-4xl leading-tight font-normal text-balance">
                Get started with ChatGPT today
              </h3>
              <div className="flex mt-s min-h-s justify-between">
                <div className="flex flex-col items-start md:items-center md:flex-row gap-6 items-center">
                  <a
                    className="transition duration-200 ease-curve-a text-btn-secondary-label border-b border-transparent relative group focus-visible:border-gray-50 focus-visible:border-transparent focus-visible:rounded-s py-5xs flex items-center justify-center gap-[0.3em] text-cta"
                    href="/chatgpt/pricing/"
                  >
                    View pricing plans
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="0.5625rem"
                      viewBox="0 0 14 8"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.292892 0.292894C0.683416 -0.0976306 1.31658 -0.0976315 1.70711 0.292892L7.00002 5.58579L12.2929 0.292894C12.6834 -0.0976306 13.3166 -0.0976315 13.7071 0.292892C14.0976 0.683416 14.0976 1.31658 13.7071 1.70711L7.70713 7.70711C7.51959 7.89464 7.26524 8 7.00002 8C6.7348 8 6.48045 7.89464 6.29291 7.70711L0.292894 1.70711C-0.0976306 1.31658 -0.0976315 0.683419 0.292892 0.292894Z"
                        fill="currentColor"
                      />
                    </svg>
                    <div
                      aria-hidden="true"
                      className="transition duration-200 ease-curve-a absolute left-0 bottom-0 right-0 h-[0.1px] w-full mb-1 bg-btn-link-underline--hover opacity-0 group-hover:opacity-100 transition-opacity"
                    ></div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="gap-3 flex justify-center flex-col md:flex-row">
          <div className="token-surface-primary p-12 inline-flex flex-col items-start rounded-s md:rounded-md gap-8 md:px-8 gap-6 flex-1">
            <div className="flex flex-col gap-4">
              <div className="text-h6-mobile md:text-h6-desktop">Free</div>
            </div>
            <div>
              <ul>
                <li className="flex py-3 gap-3 items-start">
                  <svg
                    className="shrink-0 relative top-[0.15em]"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.5rem"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M9.032 2.837a.5.5 0 0 1 .131.695l-3.75 5.5a.5.5 0 0 1-.767.072l-2.25-2.25a.5.5 0 1 1 .708-.708L4.927 7.97l3.41-5.002a.5.5 0 0 1 .695-.131Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p>
                    <span
                      className="text-caption-mobile md:text-caption-desktop"
                      style={{ fontWeight: "inherit" }}
                    >
                      Assistance with writing, problem solving and more
                    </span>
                  </p>
                </li>
                <li className="flex py-3 gap-3 items-start">
                  <svg
                    className="shrink-0 relative top-[0.15em]"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.5rem"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M9.032 2.837a.5.5 0 0 1 .131.695l-3.75 5.5a.5.5 0 0 1-.767.072l-2.25-2.25a.5.5 0 1 1 .708-.708L4.927 7.97l3.41-5.002a.5.5 0 0 1 .695-.131Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p>
                    <span
                      className="text-caption-mobile md:text-caption-desktop"
                      style={{ fontWeight: "inherit" }}
                    >
                      Access to GPT-3.5
                    </span>
                  </p>
                </li>
                <li className="flex py-3 gap-3 items-start">
                  <svg
                    className="shrink-0 relative top-[0.15em]"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.5rem"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M9.032 2.837a.5.5 0 0 1 .131.695l-3.75 5.5a.5.5 0 0 1-.767.072l-2.25-2.25a.5.5 0 1 1 .708-.708L4.927 7.97l3.41-5.002a.5.5 0 0 1 .695-.131Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p>
                    <span
                      className="text-caption-mobile md:text-caption-desktop"
                      style={{ fontWeight: "inherit" }}
                    >
                      Limited access to GPT-4o
                    </span>
                  </p>
                </li>
                <li className="flex py-3 gap-3 items-start">
                  <svg
                    className="shrink-0 relative top-[0.15em]"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.5rem"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M9.032 2.837a.5.5 0 0 1 .131.695l-3.75 5.5a.5.5 0 0 1-.767.072l-2.25-2.25a.5.5 0 1 1 .708-.708L4.927 7.97l3.41-5.002a.5.5 0 0 1 .695-.131Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p>
                    <span
                      className="text-caption-mobile md:text-caption-desktop"
                      style={{ fontWeight: "inherit" }}
                    >
                      Limited access to advanced data analysis, file uploads,
                      vision, web browsing, and custom GPTs
                    </span>
                  </p>
                </li>
              </ul>
              <p>
                <span
                  className="text-caption-mobile md:text-caption-desktop"
                  style={{ fontWeight: "inherit" }}
                ></span>
              </p>
            </div>
            <ul className="flex flex-col gap-2">
              <li className="inline-grid grid-cols-[auto,1fr] gap-2 items-center">
                <span className="text-xl leading-tight font-medium">US$0</span>
                <span>/ month</span>
              </li>
            </ul>
            <div className="flex items-center gap-6 mt-auto pt-4">
              <Button className="rounded-full">
                <Link
                  href="http://chatgpt.com/"
                  className="transition duration-200 ease-curve-a rounded-full px-6 text-nowrap min-h-button flex items-center justify-center gap-[0.3em] text-cta"
                  target="_blank"
                  rel="noreferrer"
                >
                  Start now
                  <svg
                    width="0.625rem"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 9L9 1M9 1H2.5M9 1V7.22222"
                      stroke="currentColor"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="sr-only">(opens in a new window)</span>
                </Link>
              </Button>
            </div>
          </div>
          <div className="token-surface-primary p-12 inline-flex flex-col items-start rounded-s md:rounded-md gap-8 md:px-8 gap-6 flex-1">
            <div className="flex flex-col gap-4">
              <div className="text-h6-mobile md:text-h6-desktop">Plus</div>
            </div>
            <div>
              <ul>
                <li className="flex py-3 gap-3 items-start">
                  <svg
                    className="shrink-0 relative top-[0.15em]"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.5rem"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M9.032 2.837a.5.5 0 0 1 .131.695l-3.75 5.5a.5.5 0 0 1-.767.072l-2.25-2.25a.5.5 0 1 1 .708-.708L4.927 7.97l3.41-5.002a.5.5 0 0 1 .695-.131Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p>
                    <span
                      className="text-caption-mobile md:text-caption-desktop"
                      style={{ fontWeight: "inherit" }}
                    >
                      Early access to new features
                    </span>
                  </p>
                </li>
                <li className="flex py-3 gap-3 items-start">
                  <svg
                    className="shrink-0 relative top-[0.15em]"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.5rem"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M9.032 2.837a.5.5 0 0 1 .131.695l-3.75 5.5a.5.5 0 0 1-.767.072l-2.25-2.25a.5.5 0 1 1 .708-.708L4.927 7.97l3.41-5.002a.5.5 0 0 1 .695-.131Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p>
                    <span
                      className="text-caption-mobile md:text-caption-desktop"
                      style={{ fontWeight: "inherit" }}
                    >
                      Access to GPT-4, GPT-4o, GPT-3.5
                    </span>
                  </p>
                </li>
                <li className="flex py-3 gap-3 items-start">
                  <svg
                    className="shrink-0 relative top-[0.15em]"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.5rem"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M9.032 2.837a.5.5 0 0 1 .131.695l-3.75 5.5a.5.5 0 0 1-.767.072l-2.25-2.25a.5.5 0 1 1 .708-.708L4.927 7.97l3.41-5.002a.5.5 0 0 1 .695-.131Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p>
                    <span
                      className="text-caption-mobile md:text-caption-desktop"
                      style={{ fontWeight: "inherit" }}
                    >
                      Up to 5x more messages for GPT-4o
                    </span>
                  </p>
                </li>
                <li className="flex py-3 gap-3 items-start">
                  <svg
                    className="shrink-0 relative top-[0.15em]"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.5rem"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M9.032 2.837a.5.5 0 0 1 .131.695l-3.75 5.5a.5.5 0 0 1-.767.072l-2.25-2.25a.5.5 0 1 1 .708-.708L4.927 7.97l3.41-5.002a.5.5 0 0 1 .695-.131Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p>
                    <span
                      className="text-caption-mobile md:text-caption-desktop"
                      style={{ fontWeight: "inherit" }}
                    >
                      Access to advanced data analysis, file uploads, vision,
                      and web browsing
                    </span>
                  </p>
                </li>
                <li className="flex py-3 gap-3 items-start">
                  <svg
                    className="shrink-0 relative top-[0.15em]"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.5rem"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M9.032 2.837a.5.5 0 0 1 .131.695l-3.75 5.5a.5.5 0 0 1-.767.072l-2.25-2.25a.5.5 0 1 1 .708-.708L4.927 7.97l3.41-5.002a.5.5 0 0 1 .695-.131Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p>
                    <span
                      className="text-caption-mobile md:text-caption-desktop"
                      style={{ fontWeight: "inherit" }}
                    >
                      DALL·E image generation
                    </span>
                  </p>
                </li>
                <li className="flex py-3 gap-3 items-start">
                  <svg
                    className="shrink-0 relative top-[0.15em]"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.5rem"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M9.032 2.837a.5.5 0 0 1 .131.695l-3.75 5.5a.5.5 0 0 1-.767.072l-2.25-2.25a.5.5 0 1 1 .708-.708L4.927 7.97l3.41-5.002a.5.5 0 0 1 .695-.131Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p>
                    <span
                      className="text-caption-mobile md:text-caption-desktop"
                      style={{ fontWeight: "inherit" }}
                    >
                      Create and use custom GPTs
                    </span>
                  </p>
                </li>
              </ul>
              <p>
                <span
                  className="text-caption-mobile md:text-caption-desktop"
                  style={{ fontWeight: "inherit" }}
                ></span>
              </p>
            </div>
            <ul className="flex flex-col gap-2">
              <li className="inline-grid grid-cols-[auto,1fr] gap-2 items-center">
                <span className="text-xl leading-tight font-medium">US$20</span>
                <span>/ month</span>
              </li>
            </ul>
            <div className="flex items-center gap-6 mt-auto pt-4">
              <Button className="rounded-full">
                <Link
                  href="https://chatgpt.com/#pricing"
                  className="transition duration-200 ease-curve-a px-6 text-nowrap min-h-button flex items-center justify-center gap-[0.3em] text-cta"
                  target="_blank"
                  rel="noreferrer"
                >
                  Start now
                  <svg
                    width="0.625rem"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 9L9 1M9 1H2.5M9 1V7.22222"
                      stroke="currentColor"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="sr-only">(opens in a new window)</span>
                </Link>
              </Button>
              <a
                className="transition duration-200 ease-curve-a text-btn-secondary-label border-b border-transparent relative group focus-visible:border-gray-50 focus-visible:border-transparent focus-visible:rounded-s py-5xs flex items-center justify-center gap-[0.3em] text-cta"
                href="https://help.openai.com/en/articles/6950777-what-is-chatgpt-plus#h_d78bb59065"
              >
                Limits apply
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="0.5625rem"
                  viewBox="0 0 14 8"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.292892 0.292894C0.683416 -0.0976306 1.31658 -0.0976315 1.70711 0.292892L7.00002 5.58579L12.2929 0.292894C12.6834 -0.0976306 13.3166 -0.0976315 13.7071 0.292892C14.0976 0.683416 14.0976 1.31658 13.7071 1.70711L7.70713 7.70711C7.51959 7.89464 7.26524 8 7.00002 8C6.7348 8 6.48045 7.89464 6.29291 7.70711L0.292894 1.70711C-0.0976306 1.31658 -0.0976315 0.683419 0.292892 0.292894Z"
                    fill="currentColor"
                  />
                </svg>
                <div
                  aria-hidden="true"
                  className="transition duration-200 ease-curve-a absolute left-0 bottom-0 right-0 h-[0.1px] w-full mb-1 bg-btn-link-underline--hover opacity-0 group-hover:opacity-100 transition-opacity"
                ></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
