import Link from "next/link";
import { ListOne, ListThree, ListTwo } from "../public/MovingList";
import HomeSectionHeader from "./components/common/HomeSectionHeader";
import VideoPlayer from "./components/common/VideoPlayer";
import { ListItemTickIcon } from "./components/icons/Icons";
import { Button } from "./components/ui/button";
import { InfiniteMovingCards } from "./components/ui/infinite-moving-cards";

export default function Home() {
  return (
    <div className="flex flex-col justify-center pt-24 bg-base dark:bg-black">
      <div className="relative mb-4">
        <div className="px-5 mx-auto max-w-[68rem] grid grid-cols-12 mt-8">
          <div className="md:col-span-12 col-span-12">
            <div className="flex flex-col relative items-center text-center">
              <p className="text-base leading-6 font-normal mb-3">
                ChatGPT-NEXT
              </p>
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
                  <Button className="rounded-full px-6 py-2 text-nowrap">
                    <Link
                      href="/chat"
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
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <span className="sr-only">(opens in a new window)</span>
                    </Link>
                  </Button>
                  <Link
                    className="text-btn-secondary-label border-b border-transparent relative group focus-visible:border-gray-50 focus-visible:border-transparent focus-visible:rounded-md py-1 flex items-center justify-center gap-[0.3em] text-sm font-normal leading-normal"
                    href="/download/"
                  >
                    Download the app
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="0.5625rem"
                      viewBox="0 0 14 8"
                      fill="none"
                      className="transform -rotate-90"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.292892 0.292894C0.683416 -0.0976306 1.31658 -0.0976315 1.70711 0.292892L7.00002 5.58579L12.2929 0.292894C12.6834 -0.0976306 13.3166 -0.0976315 13.7071 0.292892C14.0976 0.683416 14.0976 1.31658 13.7071 1.70711L7.70713 7.70711C7.51959 7.89464 7.26524 8 7.00002 8C6.7348 8 6.48045 7.89464 6.29291 7.70711L0.292894 1.70711C-0.0976306 1.31658 -0.0976315 0.683419 0.292892 0.292894Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <div className="absolute left-0 bottom-0 right-0 h-[1.5px] w-0 bg-underline group-hover:w-full transition-all duration-500 ease-in-out"></div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[30rem] rounded-md flex flex-col antialiased bg-base dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards items={ListOne} direction="right" speed="slow" />
        <InfiniteMovingCards items={ListTwo} direction="left" speed="slow" />
        <InfiniteMovingCards items={ListThree} direction="right" speed="slow" />
      </div>
      <HomeSectionHeader text="Writes, brainstorms, edits, and explores ideas with you" />
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
      <HomeSectionHeader text="Summarize meetings. Find new insights. Increase productivity." />
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
      <HomeSectionHeader text="Generate and debug code. Automate repetitive tasks. Learn new APIs." />
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
      <HomeSectionHeader text="Learn something new. Dive into a hobby. Answer complex questions." />
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
      <HomeSectionHeader text="Explore more features in ChatGPT-NEXT" />
      <div className="max-w-[68rem] mx-auto px-5 lg:px-0 mt-16 md:mt-20">
        <div className="token-surface-primary md:grid md:grid-cols-2 overflow-hidden rounded-md">
          <div className="px-6 py-12 md:p-16 flex flex-col self-center">
            <h5 className="text-2xl leading-tight font-medium mb-6">
              Type, talk, and use it your way
            </h5>
            <div className="my-6 max-w-[68rem] mx-auto px-5 lg:px-0 grid grid-cols-12 text-left !my-0 !flex !px-0 !mx-0 not-prose">
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
          <VideoPlayer src="https://cdn.openai.com/chatgpt/use_it_your_way.mp4" />
        </div>
      </div>
      <div className="max-w-[68rem] mx-auto px-5 lg:px-0 mt-16 md:mt-20">
        <div className="token-surface-primary md:grid md:grid-cols-2 overflow-hidden rounded-md">
          <div className="px-6 py-12 md:p-16 flex flex-col self-center">
            <h5 className="text-2xl leading-tight font-medium mb-6">
              Browse the web
            </h5>
            <div className="my-6 max-w-[68rem] mx-auto px-5 lg:px-0 grid grid-cols-12 text-left !my-0 !flex !px-0 !mx-0 not-prose">
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
          <VideoPlayer src="https://cdn.openai.com/chatgpt/browsing.mp4" />
        </div>
      </div>
      <div className="max-w-[68rem] mx-auto px-5 lg:px-0 mt-16 md:mt-20">
        <div className="token-surface-primary md:grid md:grid-cols-2 overflow-hidden rounded-md">
          <div className="px-6 py-12 md:p-16 flex flex-col self-center">
            <h5 className="text-2xl leading-tight font-medium mb-6">
              Analyze data and create charts
            </h5>
            <div className="my-6 max-w-[68rem] mx-auto px-5 lg:px-0 grid grid-cols-12 text-left !my-0 !flex !px-0 !mx-0 not-prose">
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
          <VideoPlayer src="https://cdn.openai.com/chatgpt/analyze.mp4" />
        </div>
      </div>
      <div className="max-w-[68rem] mx-auto px-5 lg:px-0 mt-16 md:mt-20">
        <div className="token-surface-primary md:grid md:grid-cols-2 overflow-hidden rounded-md">
          <div className="px-6 py-12 md:p-16 flex flex-col self-center">
            <h5 className="text-2xl leading-tight font-medium mb-6">
              Customize ChatGPT for work, daily tasks or inspiration with GPTs
            </h5>
            <div className="my-6 max-w-[68rem] mx-auto px-5 lg:px-0 grid grid-cols-12 text-left !my-0 !flex !px-0 !mx-0 not-prose">
              <div className="col-span-12 md:col-span-8 md:col-start-3 max-w-none prose opacity-100">
                <p>
                  <b>
                    <span></span>
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
          <div className="px-6 py-12 md:p-16 flex flex-col self-center">
            <h5 className="text-2xl leading-tight font-medium mb-6">
              Create images
            </h5>
            <div className="my-6 max-w-[68rem] mx-auto px-5 lg:px-0 grid grid-cols-12 text-left !my-0 !flex !px-0 !mx-0 not-prose">
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
                                <div className="relative h-full w-full overflow-hidden rounded-md aspect-auto bg-transparent transition-[background] ease-curve-d duration-normal [&_img]:mx-0 [&_img]:rounded-sm">
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
                            I&apos;ve created a birthday card for your daughter
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
          <div className="px-6 py-12 md:p-16 flex flex-col self-center">
            <h6 className="text-2xl leading-tight font-medium mb-6">
              Apple &amp; ChatGPT
            </h6>
            <div className="my-6 max-w-[68rem] mx-auto px-5 lg:px-0 grid grid-cols-12 text-left !my-0 !flex !px-0 !mx-0 not-prose">
              <div className="col-span-12 md:col-span-8 md:col-start-3 max-w-none prose opacity-100">
                <p className="mb-6">
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
                    href="https://openai.com/index/openai-and-apple-announce-partnership/"
                    target="_blank"
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
        <div className="mb-12 max-w-[68rem] mx-auto px-5 lg:px-0 grid grid-cols-12 p-0">
          <div className="md:col-span-8 md:col-start-3 col-span-12">
            <div className="flex flex-col relative items-center text-center">
              <h3 className="text-4xl leading-tight font-normal text-balance">
                Get started with ChatGPT today
              </h3>
              <div className="flex mt-8 min-h-8 justify-between">
                <div className="flex flex-col items-start md:items-center md:flex-row gap-6 items-center">
                  <Link
                    className="transition duration-200 ease-curve-a border-b border-transparent relative group focus-visible:border-gray-50 focus-visible:border-transparent focus-visible:rounded-md py-1 flex items-center justify-center gap-[0.3em] text-sm font-normal leading-normal"
                    href="/pricing/"
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
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="gap-3 flex justify-center flex-col md:flex-row">
          <div className="token-surface-primary p-12 inline-flex flex-col items-start rounded-sm md:rounded-md gap-8 md:px-8 gap-6 flex-1">
            <div className="flex flex-col gap-4">
              <div className="leading-tight text-xl font-medium">Free</div>
            </div>
            <div>
              <ul>
                <li className="flex py-3 gap-3 items-start">
                  <ListItemTickIcon />
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
                  <ListItemTickIcon />
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
                  <ListItemTickIcon />
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
                  <ListItemTickIcon />
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
              <Button className="rounded-full px-6 py-2">
                <Link
                  href="/chat"
                  className="transition duration-200 ease-curve-a rounded-full text-nowrap min-h-button flex items-center justify-center gap-[0.3em] text-sm font-normal leading-normal"
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
          <div className="token-surface-primary p-12 inline-flex flex-col items-start rounded-sm md:rounded-md gap-8 md:px-8 gap-6 flex-1">
            <div className="flex flex-col gap-4">
              <div className="leading-tight text-xl font-medium">Plus</div>
            </div>
            <div>
              <ul>
                <li className="flex py-3 gap-3 items-start">
                  <ListItemTickIcon />
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
                  <ListItemTickIcon />
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
                  <ListItemTickIcon />
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
                  <ListItemTickIcon />
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
                  <ListItemTickIcon />
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
                  <ListItemTickIcon />
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
              <Button className="rounded-full px-6 py-2">
                <Link
                  href="/chat"
                  className="transition duration-200 ease-curve-a text-nowrap min-h-button flex items-center justify-center gap-[0.3em] text-sm font-normal leading-normal"
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
              <Link
                className="border-b border-transparent relative group focus-visible:border-gray-50 focus-visible:border-transparent focus-visible:rounded-md py-1 flex items-center justify-center gap-[0.3em] text-sm font-normal leading-normal"
                href="https://help.openai.com/en/articles/6950777-what-is-chatgpt-plus#h_d78bb59065"
              >
                Limits apply
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="0.5625rem"
                  viewBox="0 0 14 8"
                  fill="none"
                  className="transform -rotate-90"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.292892 0.292894C0.683416 -0.0976306 1.31658 -0.0976315 1.70711 0.292892L7.00002 5.58579L12.2929 0.292894C12.6834 -0.0976306 13.3166 -0.0976315 13.7071 0.292892C14.0976 0.683416 14.0976 1.31658 13.7071 1.70711L7.70713 7.70711C7.51959 7.89464 7.26524 8 7.00002 8C6.7348 8 6.48045 7.89464 6.29291 7.70711L0.292894 1.70711C-0.0976306 1.31658 -0.0976315 0.683419 0.292892 0.292894Z"
                    fill="currentColor"
                  />
                </svg>
                <div className="absolute left-0 bottom-0 right-0 h-[1.5px] w-0 bg-underline group-hover:w-full transition-all duration-500 ease-in-out"></div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <section className="max-w-[68rem] mx-auto px-5 lg:px-0 p-4">
        <div className="max-w-[68rem] mx-auto px-5 lg:px-0 grid grid-cols-12 gap-2 token-surface-primary py-20 md:py-24 mt-8 md:mt-12 rounded-sm md:rounded-md">
          <div className="col-span-12 flex flex-col gap-8 md:col-span-8 md:col-start-3">
            <h2 className="text-center text-2xl md:text-3xl leading-tight text-balance">
              Join hundreds of millions of users and try ChatGPT today.
            </h2>
            <div className="flex items-center justify-center flex-row gap-2 flex-wrap">
              <Button className="rounded-full px-6 py-2">
                <Link
                  href="/chat"
                  className="flex items-center justify-center gap-1"
                  target="_blank"
                  rel="noreferrer"
                >
                  Try ChatGPT
                  <svg
                    width="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-1"
                  >
                    <path
                      d="M1 9L9 1M9 1H2.5M9 1V7.22222"
                      stroke="currentColor"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <span className="sr-only">(opens in a new window)</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
