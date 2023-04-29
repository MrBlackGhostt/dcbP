import React, { useEffect, useState } from "react"
import Navbar from "../global-components/navbar"
import Page_header from "../global-components/page-header"
import Footer_v1 from "../global-components/footer"

function PrivacyPopup() {
  const headStyle = { fontSize:"25px",fontWeight:"bold",margin:"4vh 0" }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
   
  return (
    <>
      <Navbar />
      <Page_header
        headertitle='Privacy Policy'
        backgroundImage='https://delhibycycle.s3.ap-south-1.amazonaws.com/being-a-female-tour-guide-in-india-header-blog-delhi-by-cycle.jpg'
      />

      <div
        className='privacy-popup'
        style={{
          position: "relative",
          margin: "0 auto",
          width: "80%",
          margin: "5vh auto",
        }}
      >
        <div
          className='pgcon1'
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignSelf: "center",
            width: "100%",
          }}
        >
          <h1 style={{ margin: "10vh" }}>Privacy Policy for Delhi By Cycle</h1>

          <p>
            At Delhi By Cycle, accessible from https://www.delhibycycle.com/,
            one of our main priorities is the privacy of our visitors. This
            Privacy Policy document contains types of information that is
            collected and recorded by Delhi By Cycle and how we use it.
          </p>

          <p>
            If you have additional questions or require more information about
            our Privacy Policy, do not hesitate to contact us.
          </p>

          <p>
            This Privacy Policy applies only to our online activities and is
            valid for visitors to our website with regards to the information
            that they shared and/or collect in Delhi By Cycle. This policy is
            not applicable to any information collected offline or via channels
            other than this website.
          </p>
        </div>

        <div className='pgcon1'>
          <h3 style={headStyle}> Consent</h3> 

          <p>
            By using our website, you hereby consent to our Privacy Policy and
            agree to its terms.
          </p>

          <h3 style={headStyle}> Information we collect</h3> 

          <p>
            The personal information that you are asked to provide, and the
            reasons why you are asked to provide it, will be made clear to you
            at the point we ask you to provide your personal information.
          </p>
          <p>
            If you contact us directly, we may receive additional information
            about you such as your name, email address, phone number, the
            contents of the message and/or attachments you may send us, and any
            other information you may choose to provide.
          </p>
          <p>
            When you register for an Account, we may ask for your contact
            information, including items such as name, company name, address,
            email address, and telephone number.
          </p>
        </div>

        <div className='pgcon1'>
          <h3 style={headStyle}> Log Files</h3> 

          <p>
            Delhi By Cycle follows a standard procedure of using log files.
            These files log visitors when they visit websites. All hosting
            companies do this and a part of hosting services' analytics. The
            information collected by log files include internet protocol (IP)
            addresses, browser type, Internet Service Provider (ISP), date and
            time stamp, referring/exit pages, and possibly the number of clicks.
            These are not linked to any information that is personally
            identifiable. The purpose of the information is for analyzing
            trends, administering the site, tracking users' movement on the
            website, and gathering demographic information.
          </p>

          <h3 style={headStyle}> Cookies and Web Beacons</h3> 

          <p>
            Like any other website, Delhi By Cycle uses "cookies". These cookies
            are used to store information including visitors' preferences, and
            the pages on the website that the visitor accessed or visited. The
            information is used to optimize the users' experience by customizing
            our web page content based on visitors' browser type and/or other
            information.
          </p>
        </div>

        <div className='pgcon1'>
          <h3 style={headStyle}> Advertising Partners Privacy Policies</h3> 

          <p>
            You may consult this list to find the Privacy Policy for each of the
            advertising partners of Delhi By Cycle.
          </p>

          <p>
            Third-party ad servers or ad networks uses technologies like
            cookies, JavaScript, or Web Beacons that are used in their
            respective advertisements and links that appear on Delhi By Cycle,
            which are sent directly to users' browser. They automatically
            receive your IP address when this occurs. These technologies are
            used to measure the effectiveness of their advertising campaigns
            and/or to personalize the advertising content that you see on
            websites that you visit.
          </p>

          <p>
            Note that Delhi By Cycle has no access to or control over these
            cookies that are used by third-party advertisers.
          </p>
        </div>

        <div className='pgcon1'>
          <h3 style={headStyle}> Third Party Privacy Policies</h3> 

          <p>
            Delhi By Cycle's Privacy Policy does not apply to other advertisers
            or websites. Thus, we are advising you to consult the respective
            Privacy Policies of these third-party ad servers for more detailed
            information. It may include their practices and instructions about
            how to opt-out of certain options.{" "}
          </p>

          <p>
            You can choose to disable cookies through your individual browser
            options. To know more detailed information about cookie management
            with specific web browsers, it can be found at the browsers'
            respective websites.
          </p>

          <h3> CCPA Privacy Rights (Do Not Sell My Personal Information)</h3> 

          <p>
            Under the CCPA, among other rights, California consumers have the
            right to:
          </p>
          <p>
            Request that a business that collects a consumer's personal data
            disclose the categories and specific pieces of personal data that a
            business has collected about consumers.
          </p>
          <p>
            Request that a business delete any personal data about the consumer
            that a business has collected.
          </p>
          <p>
            Request that a business that sells a consumer's personal data, not
            sell the consumer's personal data.
          </p>
          <p>
            If you make a request, we have one month to respond to you. If you
            would like to exercise any of these rights, please contact us.
          </p>
        </div>

        <div className='pgcon1'>
          <h3 style={headStyle}> GDPR Data Protection Rights</h3> 

          <p>
            We would like to make sure you are fully aware of all of your data
            protection rights. Every user is entitled to the following:
          </p>
          <p>
            The right to access – You have the right to request copies of your
            personal data. We may charge you a small fee for this service.
          </p>
          <p>
            The right to rectification – You have the right to request that we
            correct any information you believe is inaccurate. You also have the
            right to request that we complete the information you believe is
            incomplete.
          </p>
          <p>
            The right to erasure – You have the right to request that we erase
            your personal data, under certain conditions.
          </p>
          <p>
            The right to restrict processing – You have the right to request
            that we restrict the processing of your personal data, under certain
            conditions.
          </p>
          <p>
            The right to object to processing – You have the right to object to
            our processing of your personal data, under certain conditions.
          </p>
          <p>
            The right to data portability – You have the right to request that
            we transfer the data that we have collected to another organization,
            or directly to you, under certain conditions.
          </p>
          <p>
            If you make a request, we have one month to respond to you. If you
            would like to exercise any of these rights, please contact us.
          </p>
        </div>

        <div className='pgcon1'>
          <h3 style={headStyle}> Children's Information</h3> 

          <p>
            Another part of our priority is adding protection for children while
            using the internet. We encourage parents and guardians to observe,
            participate in, and/or monitor and guide their online activity.
          </p>

          <p>
            Delhi By Cycle does not knowingly collect any Personal Identifiable
            Information from children under the age of 13. If you think that
            your child provided this kind of information on our website, we
            strongly encourage you to contact us immediately and we will do our
            best efforts to promptly remove such information from our records.
          </p>

          <h3 style={headStyle}> Changes to This Privacy Policy</h3> 

          <p>
            We may update our Privacy Policy from time to time. Thus, we advise
            you to review this page periodically for any changes. We will notify
            you of any changes by posting the new Privacy Policy on this page.
            These changes are effective immediately, after they are posted on
            this page.
          </p>
        </div>

        <div className='pgcon1'>
          <h3 style={headStyle}> Contact Us</h3> 

          <p>
            If you have any questions or suggestions about our Privacy Policy,
            do not hesitate to contact us.
          </p>
          {/* <button type="button" class="btn btn-primary btn-sm" style={{marginRight:"10px"}}>Accept</button>
<button type="button" class="btn btn-secondary btn-sm">Reject</button> */}
        </div>
      </div>
      <Footer_v1 />
    </>
  )
}

export default PrivacyPopup
