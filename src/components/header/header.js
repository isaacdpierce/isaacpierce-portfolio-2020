/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from "@emotion/styled"

import MainNav from "../navigation/mainNav"

const StyledHeader = styled.header`
  grid-column: ${props => props.gridStart} / ${props => props.gridEnd};
  grid-row: 1;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 99;
  box-shadow: 0 1px 1px 1px #00000015;
`

const Header = props => {
  return (
    <StyledHeader
      {...props}
      sx={{
        backgroundColor: "white",
      }}
    >
      <MainNav />
    </StyledHeader>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  gridStart: PropTypes.number,
  gridEnd: PropTypes.number,
}

Header.defaultProps = {
  siteTitle: ``,
  gridStart: 1,
  gridEnd: -1,
}

export default Header
