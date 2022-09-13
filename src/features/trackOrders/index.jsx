import { TextField } from '@mui/material';
import { useEffect } from 'react';
import './styles.css';

export function TrackOrders(props) {
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  });
  return (
    <div className="root-our-team">
      <div className="container-our-team">
        <div className="layout-our-team-page border-bottom-background">
          <div className="title-our-team flex j-center ">
            <h4 className="border-bottom-background">Track Orders</h4>
          </div>

          <div className="flex j-center">
            <div className="layout-track-orders">
              <div className="layout-track-orders-content flex j-center">
                <h4>
                  To track your order please enter your Order ID in the box below and press the
                  "Track" button. This was given to you on your receipt and in the confirmation
                  email you should have received.
                </h4>
              </div>

              <div className="layout-track-orders-contact flex j-center">
                <div className="track-order-items">
                  <h3>Order ID</h3>
                  <TextField
                    variant="outlined"
                    placeholder="Found in yout order confirmation email."
                    style={{ width: '390px', marginRight: '20px' }}
                    size="small"
                  />
                </div>

                <div className="track-order-items">
                  <h3>Billing email</h3>
                  <TextField
                    variant="outlined"
                    placeholder="Email you used during checkout."
                    style={{ width: '390px', marginRight: '20px' }}
                    size="small"
                  />
                </div>

                <div className="track-order-items-button">
                  <h5>TRACK</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
