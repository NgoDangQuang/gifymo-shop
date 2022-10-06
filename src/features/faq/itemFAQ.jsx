import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useState } from 'react';
import './styles.css';

export function ItemsFaq({data}) {
  const [visible, setVisible] = useState(false);

  return (
    <div className="layout-faq-content">
      <div className="flex j-between" onClick={() => setVisible(!visible)}>
        <h3>{data?.question}</h3>
        {!visible && (
          <ArrowForwardIosIcon fontSize="small" sx={{ color: 'gray', fontSize: '16px' }} />
        )}
        {visible && <KeyboardArrowUpIcon sx={{ color: 'gray', fontSize: '26px' }} />}
      </div>
      {visible && <h4>{data?.answer}</h4>}
    </div>
  );
}
