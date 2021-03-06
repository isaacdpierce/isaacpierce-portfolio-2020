/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import styled from "@emotion/styled"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

const StyledNotFound = styled.div`
  grid-column: 2/6;
`

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <StyledNotFound sx={{ p: 3 }}>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </StyledNotFound>
  </Layout>
)

export default NotFoundPage
