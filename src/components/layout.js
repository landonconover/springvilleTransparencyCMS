import * as React from "react"
import { useState } from "react"
import { Link, Script } from "gatsby"
import "../sass/main.scss"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  const [loaded, setLoaded] = useState(false)

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div id="wrapper">

				{/* <!-- Main --> */}
					<div id="main">
						<div className="inner">

							{/* <!-- Header --> */}
								<header id="header">
									<a href="index.html" className="logo"><strong>Springville Transparency</strong></a>
									<ul className="icons">
										<li><a href="#" className="icon brands fa-twitter"><span className="label">Twitter</span></a></li>
										<li><a href="#" className="icon brands fa-facebook-f"><span className="label">Facebook</span></a></li>
									</ul>
								</header>

                {children}



						</div>
					</div>

				{/* <!-- Sidebar --> */}
					<div id="sidebar">
						<div className="inner">

							

							{/* <!-- Menu --> */}
								<nav id="menu">
									<header className="major">
										<h2>Menu</h2>
									</header>
									<ul>
										<li><a href="/">Homepage</a></li>
										<li><a href="#">About</a></li>
										<li><a href="#">Meeting Summaries</a></li>
										<li><a href="#">Budget Summary</a></li>
										<li><a href="#">Donate</a></li>
									</ul>
								</nav>


							{/* <!-- Section --> */}
								<section>
									<header className="major">
										<h2>Get in touch</h2>
									</header>
									<p>Sed varius enim lorem ullamcorper dolore aliquam aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin sed aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
									<ul className="contact">
										<li className="icon solid fa-envelope"><a href="#">information@untitled.tld</a></li>
										<li className="icon solid fa-phone">(000) 000-0000</li>
										<li className="icon solid fa-home">1234 Somewhere Road #8254<br />
										Nashville, TN 00000-0000</li>
									</ul>
								</section>

							{/* <!-- Footer --> */}
								<footer id="footer">
									<p className="copyright">&copy; Landon Design Tech. All rights reserved. <br /> Design: <a href="https://html5up.net">HTML5 UP</a>.</p>
								</footer>

						</div>
					</div>

          <Script strategy="idle" src="/js/jquery.min.js" onLoad={() => setLoaded(true)}></Script>
          <Script strategy="idle" src="/js/browser.min.js"></Script>
          <Script strategy="idle" src="/js/breakpoints.min.js"></Script>
          {loaded && <Script strategy="idle" src="/js/util.js" />}
          {loaded && <Script strategy="idle" src="/js/main.js" />}
          
          

			</div>
  )
}

export default Layout
