import React from "react";

// Components
import Layout from "../components/Layout";
import AniLink from "gatsby-plugin-transition-link/AniLink";

// Styles
import {
  greet,
  greetH,
  greetP,
  btns,
  btn,
} from "../styles/IndexPage.module.scss";

const IndexPage = () => {
  return (
    <Layout title="Home">
      <main>
        <section>
          <div className={greet}>
            <h2 className={greetH}>
              Hi &#128075;
              <br />I am Krish Garg.
            </h2>
            <p className={greetP}>
              I am a learning developer, currently very inspired and enlightened
              with web development.
            </p>
            <div className={btns}>
              <a
                rel="noreferrer"
                href="https://github.com/KrishGarg"
                target="_blank"
                className={btn}
              >
                Github
              </a>
              <AniLink
                color="#1e1e1e"
                duration={1}
                paintDrip
                to="/blog"
                className={btn}
              >
                Blogs
              </AniLink>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default IndexPage;
