import Feed from "@components/Feed";

const page = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="mad-md:hidden" />
        <span className="orange_gradient text-center">AI-Powered Prompts</span>
      </h1>
      <p>
        Promptly is an open-source AI prompting platform designed for the modern era, enabling users to explore, craft,
        and share innovative prompts.
      </p>

      <Feed />
    </section>
  );
};

export default page;
