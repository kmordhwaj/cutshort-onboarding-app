// import React from 'react';
// import { styled } from '@mui/material/styles';
// import Stack from '@mui/material/Stack';
// import Stepper from '@mui/material/Stepper';
// import Step from '@mui/material/Step';
// import StepLabel, { stepLabelClasses } from '@mui/material/StepLabel';
// import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
// import { StepIconProps } from '@mui/material/StepIcon';

// const ColorlibConnector = styled(StepConnector)(() => ({
//   [`&.${stepConnectorClasses.alternativeLabel}`]: {
//     top: 30,
//   },
//   [`&.${stepConnectorClasses.active}`]: {
//     [`& .${stepConnectorClasses.line}`]: {
//       opacity: 1,
//     },
//   },
//   [`&.${stepConnectorClasses.completed}`]: {
//     [`& .${stepConnectorClasses.line}`]: {
//       opacity: 1,
//     },
//   },
//   [`& .${stepConnectorClasses.line}`]: {
//     height: 1,
//     border: 0,
//     backgroundColor: 'white',
//     opacity: 0.3,
//     marginLeft: 10,
//     marginRight: 10,
//   },
// }));

// const ColorlibStepIconRoot = styled('div')<{
//   ownerState: { completed?: boolean, active?: boolean }
// }>(({ ownerState }) => ({
//   background: 'transparent',
//   zIndex: 1,
//   color: 'white',
//   width: 62,
//   height: 62,
//   display: 'flex',
//   borderColor: 'white',
//   borderWidth: 1,
//   borderStyle: 'solid',
//   opacity: 0.3,
//   borderRadius: '50%',
//   justifyContent: 'center',
//   alignItems: 'center',
//   ...(ownerState.active && {
//     opacity: 1,
//   }),
//   ...(ownerState.completed && {
//     opacity: 1,
//   }),
// }));

// const ColorlibStepLabel = styled(StepLabel)(() => ({
//   [`&.${stepLabelClasses.active}`]: {
//     [`& .${stepLabelClasses.label}`]: {
//       color: '#fff',
//       padding: '15px',
//     },
//   },
//   [`&.${stepLabelClasses.completed}`]: {
//     [`& .${stepLabelClasses.label}`]: {
//       color: '#fff',
//     },
//   },
//   [`& .${stepLabelClasses.label}`]: {
//     color: 'rgb(255, 255, 255, 0.3)',
//   },
// }));

// function ColorlibStepIcon(props: StepIconProps) {
//   const { active, completed, className } = props;

//   const icons: { [index: string]: React.ReactElement } = {
//     1: <span style={{ fontSize: 30 }}>1</span>,
//     2: <span style={{ fontSize: 30 }}>2</span>,
//     3: <span style={{ fontSize: 30 }}>3</span>,
//   };

//   return (
//     <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
//       {icons[String(props.icon)]}
//     </ColorlibStepIconRoot>
//   );
// }

// const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad'];

// export default function CustomizedSteppers() {
//   return (
//     <Stack sx={{ width: '100%', background: 'black', paddingY: 5 }} spacing={4}>
//       <Stepper alternativeLabel activeStep={1} connector={<ColorlibConnector />}>
//         {steps.map((label) => (
//           <Step key={label}>
//             <ColorlibStepLabel StepIconComponent={ColorlibStepIcon}>{label}</ColorlibStepLabel>
//           </Step>
//         ))}
//       </Stepper>
//     </Stack>
//   );
// }
