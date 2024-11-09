import NumberTicker from "./ui/number-ticker";

export default function AboutMe() {
    return (
      <section
        id="about-me"
        data-section="about-me"
        className="py-36 scroll-m-20 w-full mx-auto container lg:max-w-4xl md:max-w-2xl"
      >
        <h2 className="flex items-center justify-center mb-6 text-3xl font-semibold gap-x-3 text-white">
          About Me
        </h2>
        <article className="flex flex-col items-center justify-center gap-8 md:flex-row">
          <div className="[&>p]:mb-4 [&>p>strong]:text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 [&>p>strong]:font-extrabold text-pretty order-2 md:order-1">
            <p className="text-xl text-white">
              My name is Diego, but within the community, I'm known as diegodev. At <NumberTicker value={14}/> years old, I had the opportunity to join the world of programming
              in late <NumberTicker value={2023}/> Since then, I have dedicated much of my time to{" "}
              <strong>developing my skills</strong> by collaborating on large projects for companies like Google.
            </p>
            <p className="text-xl text-white">
               particularly in areas like{" "}
              <strong>
                cybersecurity, ethical hacking, DevOps, and software development
              </strong>
              . My goal is to continue growing as a professional and to make a meaningful
              contribution to the tech community.
            </p>
          </div>
          <img
            width="200"
            height="200"
            src="/favicon.ico"
            alt="Diego"
            className="order-1 object-cover w-64 h-full p-1 md:order-2 rotate-3 lg:p-2 lg:w-64 aspect-square rounded-2xl"
            style={{ objectPosition: "50% 50%" }}
          />
        </article>
      </section>
    );
  }
  