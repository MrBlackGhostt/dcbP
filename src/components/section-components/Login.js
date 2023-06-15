import * as React from "react"
import Backdrop from "@mui/material/Backdrop"
import Box from "@mui/material/Box"
import Modal from "@mui/material/Modal"
import Fade from "@mui/material/Fade"

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

export default function TransitionsModal() {
  const [open, setOpen] = React.useState(false)
  const [registerOpen, setRegisterOpen] = React.useState(false)

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
                id='email'
                type='email'
                placeholder='Email'
                required
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
                required
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
            >
              <h1>Register</h1>
              <div className='row'>
                <div className='col-md-6'>
                  <label className='single-input-wrap style-two'>
                    <span className='single-input-title'>First Name</span>
                    <input type='text' name='first-name' />
                  </label>
                </div>
                <div className='col-md-6'>
                  <label className='single-input-wrap style-two'>
                    <span className='single-input-title'>Last Name</span>
                    <input type='text' name='last-name' />
                  </label>
                </div>
                {/* <div className='col-lg-12'>
                  <label className='single-input-wrap style-two'>
                    <span className='single-input-title'>
                      Tell us about yourself.
                    </span>
                    <textarea defaultValue={""} name='message' />
                  </label>
                </div> */}
                <div className='col-md-7'>
                  <label className='single-input-wrap style-two'>
                    <span className='single-input-title'>Country</span>
                    <input type='text' name='country' />
                  </label>
                </div>
                <div className='col-md-6'>
                  <label className='single-input-wrap style-two'>
                    <span className='single-input-title'>Email Address</span>
                    <input type='text' name='email' />
                  </label>
                </div>
                <div className='col-md-6'>
                  <label className='single-input-wrap style-two'>
                    <span className='single-input-title'>Other Phone</span>
                    <input type='text' placeholder={+880} name='phone' />
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
