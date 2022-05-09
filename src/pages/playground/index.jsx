import Layout from "../../components/Layout";
import styles from "../../components/styles/playground.module.scss";
import Link from "next/link";

function Playground() {
  return (
    <Layout>
      <section className="container">
        <h1 className="title">Playground</h1>
        <p className="description">
          This is a collection of random things which I may never use, but just
          felt like making.
        </p>
        <ul className="project_list">
          <Link href="/playground/markdown">
            <li>
              <a>Markdown</a>
            </li>
          </Link>
          <Link href="/playground/massivePreview">
            <li>
              <a>Massive Preview</a>
            </li>
          </Link>
        </ul>

        <style jsx>{`
          .container {
            height: 100%;

            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            font-family: "Roboto Mono", sans-serif;
          }

          .title {
            font-size: 1.5rem;
            margin-bottom: 0.5rem;
          }
          .description {
            width: 30rem;
            text-align: center;
            margin-bottom: 2rem;
          }

          .project_list {
            list-style: none;
            text-align: center;
          }

          .project_list li {
            margin-bottom: 1rem;
            padding: 0;
          }

          a {
            color: white;
            text-decoration: none;
            padding: 0 3px;
            cursor: pointer;

            background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
            background-repeat: no-repeat;
            background-size: 100% 0.1em;
            background-position: 0 100%;

            transition-duration: 0.1s;
          }

          a:hover {
            background-size: 100% 90%;
            background-position: 0 100%;
            color: black;

            transition-duration: 0.1s;
          }
        `}</style>
      </section>
    </Layout>
  );
}

export default Playground;
