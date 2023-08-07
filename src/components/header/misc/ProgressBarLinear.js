import React, { useState } from 'react';
import LinearProgress from '@mui/material/LinearProgress';

const ProgressBarLinear = (props) => {

  const [progress, setProgress] = React.useState(0);
  const [buffer, setBuffer] = React.useState(10);

  const progressRef = React.useRef(() => {});

  React.useEffect(() => {
    progressRef.current = () => {
      if (progress > 100) {
        setProgress(0);
        setBuffer(10);
      } else {
        const diff = Math.random() * 10;
        const diff2 = Math.random() * 10;
        setProgress(progress + diff);
        setBuffer(progress + diff + diff2);
      }
    };
  });

  React.useEffect(() => {
    const timer = setInterval(() => {
        progressRef.current();
    }, 280);

    return () => {
      clearInterval(timer);
      
    };
  }, []);

  React.useMemo(() => {
    const timer = setInterval(() => {
        props.off(false);
        props.on(false);
    }, 5000);
    
  })

  return (
    <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} />
  )
}

export default ProgressBarLinear