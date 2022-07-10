import React from "react";
import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar.js"

describe("Navbar Component", ()=>{
  it('renders correct heading', ()=>{
    render(<Navbar></Navbar>);
    expect(screen.getByRole("heading").textContent).toMatch(/Super Hide & Seek/i);
  })
})