import Layout from "./com/layout";
import Button from "@material-ui/core/Button";
import Link from "next/link";
const IndexPage = () => (
  <Layout>
    <div>
      <h1>
        <strong>Simple, Fast, Free Quote Image Maker.</strong>
      </h1>

      <h2>
        QuotesCover turns any text you write into beautiful graphics for social,
        web, and printouts by combining worry-free licensed fonts and
        breathtaking backgrounds.
      </h2>
      <br />
      <h3>No Design Skill Or SignUp Required.</h3>
      <h4>START CREATING FOR FREE</h4>
      <Link href="/CreateQuotes" passHref>
        <Button variant="contained" color="secondary" borderRadius={120}>
          create your Quotes
        </Button>
      </Link>

      <style jsx global>
        {`
          h1 {
            color: red;
            font-weight: 900;
            font-family: serif;
            font-size: 80px;
          }
          body {
            background: lightgoldenrodyellow;
            text-align: center;
          }
          Button {
            height: 50px;
            width: 360px;
          }
        `}
      </style>
    </div>
  </Layout>
);

export default IndexPage;
