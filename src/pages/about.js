/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import styled from "@emotion/styled"

import Layout from "../components/layout/layout"
import AnimatedListTextBox from "../components/textBox/animatedListTextBox"
import SEO from "../components/seo"

const valuesArray = [
  "I’m 60% introvert and 40% extrovert",
  "I value honesty and integrity",
  "It is important to me to understand the bigger picture",
  "It is important to me to be of service to others",
  "I work first, play later",
  "I'm always prepared,",
  "I keep myself organized",
  "I increase my knowledge and understanding",
  "I use my imagination",
  "I prefer to work in a calm, quiet office",
  "I value my privacy",
  "I let others start conversations",
  "I speak up",
  "I ask questions",
  "I like to cooperate",
  "I like to listen",
  "I like to be heard",
]

const valuesParsArray = [
  "I'm interested in ideas and possibilities, logical reasoning, and complex problem-solving. I respect systems and strategy while being open to spontaneity and rebellion. I'm a grounded dreamer and ferociously independent.",

  "I strive to improve myself and the systems I work within. My analytical skills are most rewarding when used to help others. I look for ways to be helpful to others while maintaining the determination to achieve my own goals.",

  "I enjoy my comfort zones and push myself to experience new things. I respect traditional values while remaining open to new and better ways. I lean on trusted and proven methods while expecting innovation and evolution.",
]

const AboutWrapper = styled.section`
  grid-column: 1 / -1;
  display: grid;
  align-content: space-between;
  justify-content: center;
  grid-template-columns: 40vw 10vw 40vw;
  min-height: calc(100vh - 70px);
`

const About = ({ location }) => {
  const valuesList = valuesArray.map(value => <li key={value}>{value}</li>)
  const valuesParagraphs = valuesParsArray.map(par => <p key={par}>{par}</p>)
  return (
    <Layout path={location.pathname}>
      <SEO title="About Isaac Pierce" />
      <AboutWrapper sx={{ py: [3, 4, 5] }}>
        <AnimatedListTextBox side="left">
          {valuesParagraphs}
        </AnimatedListTextBox>
        <AnimatedListTextBox side="right">{valuesList}</AnimatedListTextBox>
      </AboutWrapper>
    </Layout>
  )
}

export default About
