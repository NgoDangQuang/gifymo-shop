/* eslint-disable jsx-a11y/iframe-has-title */
import { InputAdornment, TextareaAutosize, TextField } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PersonIcon from '@mui/icons-material/Person';
import './styles.css';

export function Contact(props) {
  return (
    <div className="root-our-team">
      <div className="container-our-team">
        <div className="layout-our-team-page border-bottom-background">
          <div className="title-our-team flex j-center ">
            <h4 className="border-bottom-background">We here to help!</h4>
          </div>

          <div className="layout-contact j-between">
            <div className="get-in-touch">
              <h3>Get in Touch</h3>
              <h5>Contact us to find out more or how we can help you better.</h5>
              <TextField
                id="input-with-icon-textfield"
                placeholder="Dang Quang"
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonIcon />
                    </InputAdornment>
                  ),
                }}
                variant="standard"
                style={{ marginBottom: '40px' }}
              />
              <TextField
                id="input-with-icon-textfield"
                fullWidth
                placeholder="ngoquang@gmail.com"
                style={{ marginBottom: '50px' }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <MailOutlineIcon />
                    </InputAdornment>
                  ),
                }}
                variant="standard"
              />
              <TextareaAutosize
                minRows={8}
                placeholder="Say something ..."
                style={{
                  width: '93%',
                  border: 'none',
                  background: 'rgba(207, 204, 204, 0.377)',
                  padding: '20px',
                  fontSize: '16px',
                  borderRadius: '10px',
                }}
              />
              <p>SUBMIT</p>
            </div>

            <div className="map-contact">
              <div className="google-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.630840492935!2d106.67966462812917!3d10.762907824778463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f1c06f4e1dd%3A0x43900f1d4539a3d!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBLaG9hIGjhu41jIFThu7Egbmhpw6puIC0gxJDhuqFpIGjhu41jIFF14buRYyBnaWEgVFAuSENN!5e0!3m2!1svi!2s!4v1662952651922!5m2!1svi!2s"
                  style={{ border: 0, width: '100%', height: '350px' }}
                  allowfullscreen=""
                  loading="lazy"
                />
              </div>
              <div className="gg-map"></div>
              <h3>Opening hours :</h3>
              <div className="text-address flex">
                <h5>Adress : </h5>
                <h4> 0880 Berge Stravenue</h4>
              </div>

              <div className="text-address flex">
                <h5>Phone : </h5>
                <h4>826-668-9643 / 826-668-1983</h4>
              </div>

              <div className="text-address flex">
                <h5>Email : </h5>
                <h4>info.service@example.com</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
