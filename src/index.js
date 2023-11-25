import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
/*image light box*/
import SimpleReactLightbox from "simple-react-lightbox";
/*import wrapping layout*/
import Layout from "./components/App";
// layout default import from compnent
import MainLayout from "./components/layout/Main";
import MainTwoLayout from "./components/layout/Main-two";
/*import all pages from components*/
import Error from "./components/pages/404/Error";
import About from "./components/pages/about/About";
import Blog from "./components/pages/Blog/Blog";
import BlogDetails from "./components/pages/Blog/BlogDetails";
import BlogSidebar from "./components/pages/Blog/BlogSidebar";
import BlogStandard from "./components/pages/Blog/BlogStandard";
import ContactPage from "./components/pages/contact/ContactPage";
import EventDetails from "./components/pages/events/eventDetails/EventDetails";
import Events from "./components/pages/events/Events";
import EventSidebar from "./components/pages/events/EventSidebar";
import FAQ from "./components/pages/Faq/FAQ";
import Gallary from "./components/pages/Gallary/Gallary";
import Pricing from "./components/pages/pricing/Pricing";
import Schedule from "./components/pages/Schedule/Schedule";
import Speaker from "./components/pages/speakers/Speaker";
import SpeakersDetails from "./components/pages/speakers/SpeakersDetails";
import SpeakerTopBar from "./components/pages/speakers/SpeakerTopBar";
import DataProvider from "./context/DataProvider";
/*initialization All css*/
import "./index.css";
import ErrorBoundary from "./utils/ErrorBoundary";
import Axie from "./components/pages/axie/axie";
import OrganizerStructure from "./components/pages/organizationalStructure/organizationalStructure";
import WritingGuide from "./components/pages/writingGuide/writingGuide";
import News from "./components/pages/Blog/news";

// default Warning Error hide
// console.log = console.warn = console.error = () => {};

/*
=>version : 0.1
=>Event : Rendering al content to web
=>Action: define all routes and page
@return HTML
*/

class Root extends React.Component {
    render() {
        return (
            <>
                {/* <BrowserRouter basename="/">
                    <Switch>
                        <Route exact path="/" component={MainLayout} />
                        <Route
                            path={`${process.env.PUBLIC_URL}/home-page-2`}
                            component={MainTwoLayout}
                        />
                        <Layout>
                            <Route
                                path={`${process.env.PUBLIC_URL}/about`}
                                component={About}
                            />
                            <Route
                                path={`${process.env.PUBLIC_URL}/contact`}
                                component={ContactPage}
                            />
                            <Route
                                path={`${process.env.PUBLIC_URL}/blog`}
                                component={Blog}
                            />
                            <Route
                                path={`${process.env.PUBLIC_URL}/blog-details`}
                                component={BlogDetails}
                            />
                            <Route
                                path={`${process.env.PUBLIC_URL}/blog-sidebar`}
                                component={BlogSidebar}
                            />
                            <Route
                                path={`${process.env.PUBLIC_URL}/blog-standard`}
                                component={BlogStandard}
                            />

                            <Route
                                path={`${process.env.PUBLIC_URL}/speaker`}
                                component={Speaker}
                            />
                            <Route
                                path={`${process.env.PUBLIC_URL}/speaker-topbar`}
                                component={SpeakerTopBar}
                            />
                            <Route
                                path={`${process.env.PUBLIC_URL}/speaker-details`}
                                component={SpeakersDetails}
                            />

                            <Route
                                path={`${process.env.PUBLIC_URL}/event`}
                                component={Events}
                            />
                            <Route
                                path={`${process.env.PUBLIC_URL}/event-sidebar`}
                                component={EventSidebar}
                            />
                            <Route
                                path={`${process.env.PUBLIC_URL}/event-details`}
                                component={EventDetails}
                            />

                            <Route
                                path={`${process.env.PUBLIC_URL}/schedule`}
                                component={Schedule}
                            />
                            <Route
                                path={`${process.env.PUBLIC_URL}/gallary`}
                                component={Gallary}
                            />
                            <Route
                                path={`${process.env.PUBLIC_URL}/pricing`}
                                component={Pricing}
                            />
                            <Route
                                path={`${process.env.PUBLIC_URL}/faq`}
                                component={FAQ}
                            />

                            <Route
                                path={`${process.env.PUBLIC_URL}/axies`}
                                component={axie}
                            />
                            <Route
                                path={`${process.env.PUBLIC_URL}/structure`}
                                component={OrganizerStructure}
                            />
                            <Route
                                path={`${process.env.PUBLIC_URL}/writing`}
                                component={writingGuide}
                            />
                            <Route
                                path={`${process.env.PUBLIC_URL}/news`}
                                component={news}
                            />
                        </Layout>
                    </Switch>
                </BrowserRouter> */}

                <BrowserRouter basename="/">
                    <Switch>
                        <Route exact path="/" component={MainLayout} />

                        <Route path={`${process.env.PUBLIC_URL}/about`}>
                            <Layout>
                                <About />
                            </Layout>
                        </Route>
                        <Route path={`${process.env.PUBLIC_URL}/contact`}>
                            <Layout>
                                <ContactPage />
                            </Layout>
                        </Route>

                        <Route path={`${process.env.PUBLIC_URL}/blog-details`}>
                            <Layout>
                                <BlogDetails />
                            </Layout>
                        </Route>

                        <Route path={`${process.env.PUBLIC_URL}/blog-sidebar`}>
                            <Layout>
                                <BlogSidebar />
                            </Layout>
                        </Route>

                        <Route path={`${process.env.PUBLIC_URL}/speaker`}>
                            <Layout>
                                <Speaker />
                            </Layout>
                        </Route>

                        <Route
                            path={`${process.env.PUBLIC_URL}/speaker-details`}
                        >
                            <Layout>
                                <SpeakersDetails />
                            </Layout>
                        </Route>

                        <Route path={`${process.env.PUBLIC_URL}/schedule`}>
                            <Layout>
                                <Schedule />
                            </Layout>
                        </Route>

                        <Route path={`${process.env.PUBLIC_URL}/gallary`}>
                            <Layout>
                                <Gallary />
                            </Layout>
                        </Route>

                        <Route path={`${process.env.PUBLIC_URL}/pricing`}>
                            <Layout>
                                <Pricing />
                            </Layout>
                        </Route>

                        <Route path={`${process.env.PUBLIC_URL}/faq`}>
                            <Layout>
                                <FAQ />
                            </Layout>
                        </Route>

                        <Route path={`${process.env.PUBLIC_URL}/axies`}>
                            <Layout>
                                <Axie />
                            </Layout>
                        </Route>

                        <Route path={`${process.env.PUBLIC_URL}/structure`}>
                            <Layout>
                                <OrganizerStructure />
                            </Layout>
                        </Route>

                        <Route path={`${process.env.PUBLIC_URL}/writing`}>
                            <Layout>
                                <WritingGuide />
                            </Layout>
                        </Route>

                        <Route path={`${process.env.PUBLIC_URL}/news`}>
                            <Layout>
                                <News />
                            </Layout>
                        </Route>
                        <Route>
                            <Layout>
                                <Error />
                            </Layout>
                        </Route>
                    </Switch>
                </BrowserRouter>
            </>
        );
    }
}

ReactDOM.render(
    // <React.StrictMode>
    <SimpleReactLightbox>
        <ErrorBoundary>
            <DataProvider>
                <Root />
            </DataProvider>
        </ErrorBoundary>
    </SimpleReactLightbox>,
    // </React.StrictMode>,
    document.getElementById("root")
);
