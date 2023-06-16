import * as React from "react"
import { useState, useEffect, useRef } from "react"
import Backdrop from "@mui/material/Backdrop"
import Box from "@mui/material/Box"
import Modal from "@mui/material/Modal"
import Fade from "@mui/material/Fade"
import { useForkRef } from "@mui/material"

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "2%",
  boxShadow: 30,
  p: 4,
}
const style1 = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 450,
  bgcolor: "background.paper",
  borderRadius: "2%",
  boxShadow: 30,
  p: 4,
}
const instructions = {
  fontSize: "0.75rem",
  borderRadius: "0.5rem",
  background: "#000",
  color: "#fff",
  padding: "0.25rem",
  position: "relative",
  bottom: "-10px",
}

const offscreen = {
  position: "absolute",
  left: "-9999px",
}

export default function TransitionsModal() {
  const [open, setOpen] = useState(false)
  const [registerOpen, setRegisterOpen] = useState(false)

  const emailRef = useRef()
  const errRef = useRef()
  const userRef = useRef()
  const pwdRef = useRef()

  const [email, setEmail] = useState("")
  const [user, setUser] = useState("")
  const [validEmail, setValidEmail] = useState(false)
  const [validName, setValidName] = useState(false)
  const [emailFocus, setEmailFocus] = useState(false)
  const [userFocus, setUserFocus] = useState(false)

  const [pwd, setPwd] = useState("")
  const [validPwd, setValidPwd] = useState(false)
  const [pwdFocus, setPwdFocus] = useState(false)

  const [matchPwd, setMatchPwd] = useState("")
  const [validMatch, setValidMatch] = useState(false)
  const [matchFocus, setMatchFocus] = useState(false)

  const [errMsg, setErrMsg] = useState("")
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    if (emailRef.current) {
      emailRef.current.focus()
    }
  }, [])

  useEffect(() => {
    if (userRef.current) {
      userRef.current.focus()
    }
  }, [])

  useEffect(() => {
    setValidName(USER_REGEX.test(user))
    console.log(USER_REGEX.test(user), "UserValid")
  }, [user])

  useEffect(() => {
    setValidEmail(emailRegex.test(email))
    console.log("EmailValid", emailRegex.test(email))
  }, [email])

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd))
    console.log(PWD_REGEX.test(pwd), "PasswordValid")
    setValidMatch(pwd === matchPwd)
    console.log(setValidMatch(pwd === matchPwd))
  }, [pwd, matchPwd])

  const loginHandle = async (e) => {
    e.preventDefault()
    const v1 = emailRegex.test(email)
    const v2 = PWD_REGEX.test(pwd)

    if (!v1) {
      alert("Please enter a valid email address.")
      return
    } else if (!v2) {
      alert(`8 to 24 characters.
          Must include uppercase and lowercase letters, a number and a special
          character.
          Allowed special characters:`)
      return
    }
    setEmail("")
    setPwd("")
  }

  const RegisterHandle = () => {
    e.preventDefault()
    const v1 = emailRegex.test(email)
    const v2 = USER_REGEX.test(user)
    const v3 = PWD_REGEX.test(pwd)

    console.log(email)
    console.log(user)

    if (!v1) {
      alert("Please enter a valid email address.")
      return
    } else if (!v2) {
      alert(`
          4 to 24 characters.
          Must begin with a letter.
          Letters, numbers, underscores, hyphens allowed.`)
      return
    }
    if (!v3) {
      alert(`
          8 to 24 characters.
          Must include uppercase and lowercase letters, a number and a special
          character.
          Allowed special characters:`)
      return
    }
    setEmail("")
    setUser("")
  }

  const handleOpen = () => {
    setOpen(true)
    setRegisterOpen(false) // Close the register modal
  }

  const handleClose = () => setOpen(false)

  const handleRegisterOpen = () => {
    setOpen(false) // Close the login modal
    setRegisterOpen(true)
  }

  const handleRegisterClose = () => setRegisterOpen(false)

  return (
    <div>
      <button
        className='atn btn-yellow'
        onClick={handleOpen}
        style={{ width: "7vw" }}
      >
        Login
      </button>
      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <form
              style={{
                justifyContent: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "2vh",
                padding: "2vh",
              }}
              onSubmit={loginHandle}
            >
              <h1>Login</h1>
              <input
                style={{
                  display: "block",
                  marginTop: "1vh",
                  marginBottom: "1vh",
                  padding: "15px",
                  width: "300px",
                }}
                ref={emailRef}
                id='email'
                type='email'
                placeholder='Email'
                required
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                aria-invalid={validEmail ? "false" : "true"}
                aria-describedby='uidnote'
                onFocus={() => setEmailFocus(true)}
                onBlur={() => setEmailFocus(false)}
              />
              <input
                style={{
                  display: "block",
                  marginTop: "1vh",
                  padding: "15px",
                  width: "300px",
                }}
                id='password'
                type='password'
                placeholder='Password'
                autoComplete='off'
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required
                aria-invalid={validPwd ? "false" : "true"}
                aria-describedby='pwdnote'
                onFocus={() => setPwdFocus(true)}
                onBlur={() => setPwdFocus(false)}
              />

              <span style={{ color: "red", cursor: "pointer" }}>
                Forgot your password?
              </span>
              <button
                className='btn btn-yellow'
                style={{
                  marginTop: "4vh",
                  textAlign: "center",
                  width: "300px",
                }}
              >
                Submit
              </button>
              <span>
                Don't have an account?
                <a
                  onClick={handleRegisterOpen}
                  s
                  style={{ color: "red", cursor: "pointer" }}
                >
                  Register
                </a>
              </span>
            </form>
          </Box>
        </Fade>
      </Modal>
      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        open={registerOpen}
        onClose={handleRegisterClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={registerOpen}>
          <Box sx={style1}>
            <form
              className='tp-form-wrap'
              style={{
                justifyContent: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "2vh",
                padding: "2vh",
              }}
              onSubmit={RegisterHandle}
            >
              <h1>Register</h1>
              <div className='row'>
                <div className='col-md-7'>
                  <label className='single-input-wrap style-two'>
                    <span className='single-input-title'>User Name</span>
                    <input
                      type='text'
                      name='Username'
                      id='username'
                      ref={userRef}
                      autoComplete='off'
                      onChange={(e) => setUser(e.target.value)}
                      value={user}
                      required
                      aria-invalid={validName ? "false" : "true"}
                      aria-describedby='uidnote'
                      onFocus={() => setUserFocus(true)}
                      onBlur={() => setUserFocus(false)}
                    />
                  </label>
                </div>
                {/* <div className='col-md-6'>
                  <label className='single-input-wrap style-two'>
                    <span className='single-input-title'>Last Name</span>
                    <input type='text' name='last-name' />
                  </label>
                </div> */}
                {/* <div className='col-lg-12'>
                  <label className='single-input-wrap style-two'>
                    <span className='single-input-title'>
                      Tell us about yourself.
                    </span>
                    <textarea defaultValue={""} name='message' />
                  </label>
                </div> */}
                <div className='col-md-9'>
                  <label className='single-input-wrap style-two'>
                    <span className='single-input-title'>Password</span>
                    <input
                      type='password'
                      name='country'
                      id='password'
                      ref={pwdRef}
                      autoComplete='off'
                      onChange={(e) => setPwd(e.target.value)}
                      value={pwd}
                      aria-invalid={validPwd ? "false" : "true"}
                      aria-describedby='pwdnote'
                      onFocus={() => setPwdFocus(true)}
                      onBlur={() => setPwdFocus(false)}
                      required
                    />
                  </label>
                  <p
                    id='confirmnote'
                    style={pwdFocus && !validPwd ? instructions : offscreen}
                  >
                    8 to 24 characters.
                    <br />
                    Must include uppercase and lowercase letters, a number and a
                    special character.
                    <br />
                    Allowed special characters:{" "}
                    <span aria-label='exclamation mark'>!</span>{" "}
                    <span aria-label='at symbol'>@</span>{" "}
                    <span aria-label='hashtag'>#</span>{" "}
                    <span aria-label='dollar sign'>$</span>{" "}
                    <span aria-label='percent'>%</span>
                  </p>
                </div>
                <div className='col-md-9'>
                  <label className='single-input-wrap style-two'>
                    <span className='single-input-title'>Confirm Password</span>
                    <input
                      type='password'
                      id='confirm_pwd'
                      onChange={(e) => setMatchPwd(e.target.value)}
                      value={matchPwd}
                      aria-invalid={validMatch ? "false" : "true"}
                      aria-describedby='pwdnote'
                      onFocus={() => setMatchFocus(true)}
                      onBlur={() => setMatchFocus(false)}
                      required
                    />
                  </label>
                  <p
                    id='confirmnote'
                    style={matchFocus && !validMatch ? instructions : offscreen}
                  >
                    Must match the first password input field.
                  </p>
                </div>
                <div className='col-md-7'>
                  <label className='single-input-wrap style-two'>
                    <span className='single-input-title'>Country</span>
                    <input type='text' name='country' required />
                  </label>
                </div>
                <div className='col-md-9'>
                  <label className='single-input-wrap style-two'>
                    <span className='single-input-title'>Email Address</span>
                    <input
                      name='email'
                      ref={emailRef}
                      id='email'
                      type='email'
                      placeholder='Email'
                      required
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      aria-invalid={validEmail ? "false" : "true"}
                      aria-describedby='uidnote'
                      onFocus={() => setEmailFocus(true)}
                      onBlur={() => setEmailFocus(false)}
                    />
                  </label>
                  <p
                    id='confirmnote'
                    style={emailFocus && !validEmail ? instructions : offscreen}
                  >
                    Enter The Valid Email
                  </p>
                </div>
                <div className='col-md-6'>
                  <label className='single-input-wrap style-two'>
                    <span className='single-input-title'>Whatsapp No.</span>
                    <input
                      type='text'
                      placeholder={+880}
                      name='phone'
                      required
                    />
                  </label>
                </div>
              </div>
              <button
                className='btn btn-yellow'
                style={{
                  marginTop: "4vh",
                  justifyContent: "center",
                  textAlign: "center",
                  width: "300px",
                }}
                disabled={
                  !validName || !validMatch || !validPwd || !validEmail
                    ? true
                    : false
                }
              >
                Submit
              </button>
              <span>
                Already have an account?
                <a
                  onClick={handleOpen}
                  style={{ color: "red", cursor: "pointer" }}
                >
                  Login
                </a>
              </span>
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  )
}
