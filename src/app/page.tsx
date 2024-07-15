import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center mt-28">
      <div className="relative mb-4">
        <div className="px-5 mx-auto max-w-[68rem] grid grid-cols-12 mt-8">
          <div className="md:col-span-12 col-span-12">
            <div className="flex flex-col relative items-center text-center">
              <p className="text-base leading-6 font-normal mb-3">ChatGPT</p>
              <h1
                className="text-5xl leading-tight font-normal"
                style={{ textWrap: "balance" }}
              >
                Get answers. Find inspiration. Be more productive.
              </h1>
              <div className="mt-6 md:grid md:grid-cols-12">
                <p
                  className="col-span-12 md:col-span-8 md:col-start-3 text-xl"
                  style={{ textWrap: "balance" }}
                >
                  Free to use. Easy to try. Just ask and ChatGPT can help with
                  writing, learning, brainstorming, and more.
                </p>
              </div>
              <div className="flex mt-4 min-h-16 justify-between">
                <div className="flex gap-4 items-start md:items-center md:flex-row2 items-center">
                  <Button className="rounded-full px-xs text-nowrap">
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
      <div className="px-5 max-w-[68rem] mx-auto grid grid-cols-12 mt-2xl m:mt-3xl">
        <div className="m:col-span-8 m:col-start-3 col-span-12">
          <div className="flex flex-col relative items-center text-center">
            <h3 className="text-h3 text-balance">
              Writes, brainstorms, edits, and explores ideas with you
            </h3>
          </div>
        </div>
      </div>
      <div className="w-full grid grid-cols-12 my-4 px-5 max-w-[68rem] mx-auto">
        <div className="col-span-12">
          <div className="w-full h-full grid gap-1 grid-cols-1 md:grid-cols-1 px-5 max-w-[68rem] p-0">
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
                      data-nimg="1"
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
    </div>
  );
}
