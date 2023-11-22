import React from "react"
import { createContext, useState } from "react"

const Footer = createContext()

function FooterContext({ children }) {
	return <Footer.Provider>{children}asdasd</Footer.Provider>
}

export default FooterContext

export { Footer }
