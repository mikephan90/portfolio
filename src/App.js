import React, { Component } from "react";

import Header from "./pages/Header";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import Sidebar from "./pages/Sidebar";
import NavBar from "./components/navbar";

import resumeData from "./resumeData";
import { StylesProvider } from "@material-ui/core/styles";

class App extends Component {
	render() {
		return (
			<StylesProvider injectFirst>
				<NavBar />
				<Sidebar resumeData={resumeData} />
				<Header resumeData={resumeData} />
				<About resumeData={resumeData} />
				<Resume resumeData={resumeData} />
				<Portfolio resumeData={resumeData} />
				<Contact />
				<Footer />
			</StylesProvider>
		);
	}
}

export default App;
