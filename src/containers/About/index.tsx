import React from "react"
import Title from "../../components/Title"
import Paragraph from "../../components/Paragraph"
import { GithubSecao } from "./styles"

const About = () => (
  <section>
    <Title fontSize={16}>Sobre mim</Title>
    <Paragraph>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus explicabo voluptates adipisci aut commodi aperiam quo repellat reprehenderit, error magni corrupti eum impedit, architecto ratione, asperiores accusamus quasi deserunt praesentium?e
    </Paragraph>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=janlucasjm&show_icons=true&theme=dracula&include_all_commits=true&count_private=true"/>
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=janlucasjm&layout=compact&langs_count=7&theme=dracula"/>
    </GithubSecao>
  </section>
)

export default About
