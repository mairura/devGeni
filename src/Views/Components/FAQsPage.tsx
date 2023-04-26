import "../css/about.css";

const FAQsPage = () => {
  return (
    <div className="faqsContainer">
      <div className="faqsData">
        <div className="faqsHeader">
          <h4>Frequently Asked Questions</h4>
        </div>
        <div className="faqsBox">
          <div className="faqsQuiz">
            <details>
              <summary>How does nGeni Work?</summary>
              <p>
                DevGeni is an AI-powered platform that helps clients find the
                ideal software developer for their project(s) by showcasing
                developers&rsquo; skills and past work. Clients input their
                project requirements, and the platform uses this information to
                search its database for relevant matches. DevGeni then provides
                a list of developer portfolios, including their tech stack and
                GitHub profiles.
              </p>
            </details>
          </div>
          <div className="faqsQuiz">
            <details>
              <summary>What Kind of Developers Can I Find on DevGeni?</summary>
              <p>
                DevGeni features a diverse pool of software developers with
                expertise in various programming languages, frameworks, and
                technologies. You can find front-end developers skilled in HTML,
                CSS, and JavaScript, back-end developers proficient in Python,
                Java, and PHP, and full-stack developers adept in both.
                Additionally, there are developers specializing in smart
                contract languages and those experienced in building native and
                hybrid mobile apps for Android and iOS platforms.
              </p>
            </details>
          </div>
          <div className="faqsQuiz">
            <details>
              <summary>
                Can I Trust the Quality of Developers on DevGeni?
              </summary>
              <p>
                Yes, clients can trust the quality of developers on DevGeni. The
                platform allows clients to view developers' past projects and
                catalogs to pinpoint the right fit for their project, proving
                their work quality.
              </p>
            </details>
          </div>
          <div className="faqsQuiz">
            <details>
              <summary>
                What Is The Expected Timeline for Completing a Project on
                DevGeni?
              </summary>
              <p>
                At DevGeni, we strive to provide our clients with top-notch
                developer talent to ensure their projects are completed in a
                timely and efficient manner. However, the timeline for project
                completion varies based on the specifics of each project and the
                amount of time it takes to meet the client&rsquo;s requirements.
                Our intuitive platform and skilled developers work tirelessly to
                ensure client satisfaction and timely project delivery.
              </p>
            </details>
          </div>
          <div className="faqsQuiz">
            <details>
              <summary>
                How does DevGeni ensure the security of my project's
                information?
              </summary>
              <p>
                DevGeni takes the security of its clients' project information
                seriously. The platform uses industry-standard encryption
                protocols to ensure that all data transmitted is secure.
                Additionally, DevGeni has strict policies and procedures in
                place to prevent unauthorized access to clients&rsquo; project
                information.
              </p>
            </details>
          </div>
          <div className="more_info">
            Can’t find an answer to your question? Feel free to{" "}
            <a href="/contactus">contact us</a> at ask@devgeni.ai
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQsPage;
