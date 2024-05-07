// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
// import MuiAccordion from '@mui/material/Accordion';
// import MuiAccordionSummary from '@mui/material/AccordionSummary';
// import MuiAccordionDetails from '@mui/material/AccordionDetails';
// import Typography from '@mui/material/Typography';
// import CardInVenPro from './CardInVenPro';
// import Header from "./Header";
// const Accordion = styled((props) => (
// <MuiAccordion disableGutters elevation={0} square {...props} />
// ))(({ theme }) => ({
//   border: `1px solid ${theme.palette.divider}`,
//   '&:not(:last-child)': {
//     borderBottom: 0,
//   },
//   '&::before': {
//     display: 'none',
//   },
// }));

// const AccordionSummary = styled((props) => (
//   <MuiAccordionSummary
//     expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
//     {...props}
//   />
// ))(({ theme }) => ({
//   backgroundColor:
//     theme.palette.mode === 'dark'
//       ? 'rgba(255, 255, 255, .05)'
//       : 'rgba(0, 0, 0, .03)',
//   flexDirection: 'row-reverse',
//   '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
//     transform: 'rotate(90deg)',
//   },
//   '& .MuiAccordionSummary-content': {
//     marginLeft: theme.spacing(1),
//   },
// }));

// const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
//   padding: theme.spacing(2),
//   borderTop: '1px solid rgba(0, 0, 0, .125)',
// }));

// const CustomizedAccordions = () => {
//   const [expanded, setExpanded] = React.useState('panel1');

//   const handleChange = (panel) => (event, newExpanded) => {
//     setExpanded(newExpanded ? panel : false);
//   };

//   // Number of accordions and cards per row
//   const numberOfAccordions = 20;
//   const cardsPerRow = 3;
//   const numberOfCards = 20; // Number of cards per accordion
//   const curr=0;
//   const generateCards = (count) => {
//     const cards = [];
//     for (let i = 0; i < count; i++) {
//       if (i % 3 === 0) {
//         cards.push(<div key={i} style={{ display: 'flex', flexWrap: 'wrap' }}>{/* Create a new row */}</div>);
//       }
//       cards.push(
//         <div key={i} style={{ width: '33.33%', padding: '0px' }}>{/* Set width to 33.33% for 3 cards per row */}
//           <Typography>
//             <CardInVenPro />
//           </Typography>
//           <br />
//         </div>
//       );
//     }
//     return cards;
//   };
//   return (
//     <>
//         <Header/>
//         <div style={{ display: 'flex', justifyContent: 'center',width:'50%',alignItems:'center',marginLeft:'25%',marginTop:'2%'}}>
//         <div>
//             {[...Array(numberOfAccordions)].map((_, index) => (
//             <Accordion
//                 key={index}
//                 expanded={expanded === `panel${index + 1}`}
//                 onChange={handleChange(`panel${index + 1}`)}
//             >
//                 <AccordionSummary
//                 aria-controls={`panel${index + 1}d-content`}
//                 id={`panel${index + 1}d-header`}
//                 >
//                 <Typography>Vendor {index + 1}</Typography>
//                 </AccordionSummary>
//                 <AccordionDetails>
//                 <div
//                     style={{
//                     display: 'flex',
//                     flexWrap: 'wrap',
//                     justifyContent: 'flex-start',
//                     marginLeft: '-4px',
//                     }}
//                 >
//                     {generateCards(numberOfCards)}
//                 </div>
//                 <br />
//                 </AccordionDetails>
//             </Accordion>
//             ))}
//         </div>
//         </div>
//     </>
//   );
// };

// export default CustomizedAccordions;



import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import CardInVenPro from './CardInVenPro';
import Header from "./Header";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&::before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '1rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

const CustomizedAccordions = () => {
  const [expanded, setExpanded] = React.useState('panel1');
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // Number of accordions and cards per row
  const numberOfAccordions = 20;
  const cardsPerRow = 3;
  const numberOfCards = 20; // Number of cards per accordion
  const curr = 0;

  const generateCards = (count) => {
    const cards = [];
    for (let i = 0; i < count; i++) {
      if (i % 3 === 0) {
        cards.push(<div key={i} style={{ display: 'flex', flexWrap: 'wrap' }}>{/* Create a new row */}</div>);
      }
      cards.push(
        <div key={i} style={{ width: '33.33%', padding: '0px' }}>{/* Set width to 33.33% for 3 cards per row */}
          <Typography>
            <CardInVenPro />
          </Typography>
          <br />
        </div>
      );
    }
    return cards;
  };

  const filteredAccordions = [...Array(numberOfAccordions)].filter((_, index) =>
    `Vendor ${index + 1}`.toLowerCase().includes(searchTerm.toLowerCase())

  );

  return (
    <>
      <Header />
        <h1 style={{display:'flex',justifyContent:'center',alignItems:'center'}}>List of All Vendors with their Specific Products</h1>
      <div style={{ display: 'flex', justifyContent: 'center', width: '50%', alignItems: 'center', marginLeft: '25%', marginTop: '2%' }}>
        <div>
          {/* <input type="text" value={searchTerm} onChange={handleSearch} placeholder="Search" style={{ marginBottom: '16px' }} /> */}
          {filteredAccordions.map((_, index) => (
            <Accordion
              key={index}
              expanded={expanded === `panel${index + 1}`}
              onChange={handleChange(`panel${index + 1}`)}
              >
              <AccordionSummary
                aria-controls={`panel${index + 1}d-content`}
                id={`panel${index + 1}d-header`}
                style={{height:'100px'}}
              >
                <Typography variant='h5'>Vendor {index + 1}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'flex-start',
                    marginLeft: '8%',
                    // alignItems:'center'
                  }}
                >
                  {generateCards(numberOfCards)}
                </div>
                <br />
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>
        {/* {console.log(filteredAccordions)} */}
    </>
  );
};

export default CustomizedAccordions;