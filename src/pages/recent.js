import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import AppAppBar from '../components/AppAppBar';
import MainContent from '../components/MainContent';
import Latest from '../components/Latest';
import Footer from '../components/Footer';
import AppTheme from '../shared-theme/AppTheme';
import { Link, graphql } from "gatsby"

// import Bio from "../components/bio"
// import Layout from "../components/layout"
import Seo from "../components/seo"

export default function Blog(props) {


	return (
	  <AppTheme {...props}>
		<CssBaseline enableColorScheme />
		<AppAppBar />
		<Container
		  maxWidth="lg"
		  component="main"
		  sx={{ display: 'flex', flexDirection: 'column', my: 16, gap: 4 }}
		>
		  <MainContent />
		  <Latest />
		</Container>
		<Footer />
	  </AppTheme>
	);
  }

// const BlogIndex = ({ data, location }) => {
//   const siteTitle = data.site.siteMetadata?.title || `Title`
//   const posts = data.allMarkdownRemark.nodes

//   if (posts.length === 0) {
//     return (
//       <Layout location={location} title={siteTitle}>
//         <Bio />
//         <p>
//           No blog posts found. Add markdown posts to "content/blog" (or the
//           directory you specified for the "gatsby-source-filesystem" plugin in
//           gatsby-config.js).
//         </p>
//       </Layout>
//     )
//   }

//   return (
//     <Layout location={location} title={siteTitle}>
//       							{/* <!-- Banner --> */}
//                     <section id="banner">
// 									<div className="content">
// 										<header> 
// 											<h2>Welcome!</h2>
// 											<p>Helping citizens understand what is going on in Springville City</p>
// 										</header>
// 										<p>I created this website to give citizens a clear, accessible view of what’s happening in our city government. Like many of you, I've often found it challenging to keep up with local decisions, policies, and projects that directly impact our lives. Springville Transparency is here to break down complex issues, provide straightforward summaries of meetings and initiatives, and give everyone an easy way to stay informed and engaged with the city government. This is your go-to resource for staying up-to-date and making sure your voice is heard in Springville.</p>
// 										<ul className="actions">
// 											<li><a href="#" className="button big">Learn More</a></li>
// 										</ul>
// 									</div>
// 									<span className="image object">
// 										<img src="images/pic10.jpg" alt="" />
// 									</span>
// 								</section>


// 							{/* <!-- Section --> */}
// 								<section>
// 									<header className="major">
// 										<h2>Past Council Meetings</h2>
// 									</header>
// 									<div className="posts">
// 										<article>
// 											<a href="#" className="image"><img src="images/pic01.jpg" alt="" /></a>
// 											<h3>October 1st Council</h3>
// 											<p>The main agenda item was the impact fee study presented by Jason Miller, which proposed an 89% increase in commercial impact fees to align with other local cities, shifting the financial burden of new developments off current residents. After discussion and a public hearing, the council unanimously approved the fee increase.</p>
// 											<ul className="actions">
// 												<li><a href="10-1council.html" className="button">More</a></li>
// 											</ul>
// 										</article>
// 										<article>
// 											<a href="#" className="image"><img src="images/pic02.jpg" alt="" /></a>
// 											<h3>Nulla amet dolore</h3>
// 											<p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
// 											<ul className="actions">
// 												<li><a href="#" className="button">More</a></li>
// 											</ul>
// 										</article>
// 										<article>
// 											<a href="#" className="image"><img src="images/pic03.jpg" alt="" /></a>
// 											<h3>Tempus ullamcorper</h3>
// 											<p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
// 											<ul className="actions">
// 												<li><a href="#" className="button">More</a></li>
// 											</ul>
// 										</article>
// 										<article>
// 											<a href="#" className="image"><img src="images/pic04.jpg" alt="" /></a>
// 											<h3>Sed etiam facilis</h3>
// 											<p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
// 											<ul className="actions">
// 												<li><a href="#" className="button">More</a></li>
// 											</ul>
// 										</article>
// 										<article>
// 											<a href="#" className="image"><img src="images/pic05.jpg" alt="" /></a>
// 											<h3>Feugiat lorem aenean</h3>
// 											<p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
// 											<ul className="actions">
// 												<li><a href="#" className="button">More</a></li>
// 											</ul>
// 										</article>
// 										<article>
// 											<a href="#" className="image"><img src="images/pic06.jpg" alt="" /></a>
// 											<h3>Amet varius aliquam</h3>
// 											<p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
// 											<ul className="actions">
// 												<li><a href="#" className="button">More</a></li>
// 											</ul>
// 										</article>
// 									</div>
// 								</section>
//     </Layout>
//   )
// }

// export default Blog

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="All posts" />

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
