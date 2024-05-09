// import { ChakraProvider, extendTheme } from '@chakra-ui/react';
// import {
//   EditablePreview,
//   Box,
//   useColorModeValue,
//   IconButton,
//   Input,
//   useDisclosure,
//   useEditableControls,
//   ButtonGroup,
//   SlideFade,
//   Editable,
//   Tooltip,
//   EditableInput,
//   Flex,
//   VStack,
//   HStack,
// } from '@chakra-ui/react';
// // import {edit} from "semantic-ui-react"
// import { CheckIcon, CloseIcon, EditIcon } from '@chakra-ui/icons';
// import React, { useState } from 'react';

// const theme = extendTheme({
//   config: {
//     useSystemColorMode: false,
//     initialColorMode: 'light',
//   },
// });

// function CustomControlsExample() {
//   const [editIndex, setEditIndex] = useState(null);
//   const attributes = [
//     'Attribute 1Attribute 1Attribute 1Attribute 1Attribute 1',
//     'Attribute 2',
//     'Attribute 3',
//     'Attribute 4',
//     'Attribute 5',
//     'Attribute 6',
//     'Attribute 7',
//     'Attribute 8',
//     'Attribute 9',
//     'Attribute 10',
//   ];

//   function EditableControls({ index, isEditing }) {
//     const {
//       getSubmitButtonProps,
//       getCancelButtonProps,
//       getEditButtonProps,
//     } = useEditableControls();

//     const handleEditClick = () => {
//       setEditIndex(index);
//     };

//     const handleUpdateClick = () => {
//       // Perform update logic here
//       setEditIndex(null);
//     };

//     const handleCancelClick = () => {
//       setEditIndex(null);
//     };

//     return isEditing ? (
//       <ButtonGroup justifyContent='center' size='sm'>
//         <IconButton
//           icon={<CheckIcon />}
//           {...getSubmitButtonProps({ onClick: handleUpdateClick })}
//         />
//         <IconButton
//           icon={<CloseIcon />}
//           {...getCancelButtonProps({ onClick: handleCancelClick })}
//         />
//       </ButtonGroup>
//     ) : (
//       <Flex justifyContent='center'>
//         <IconButton
//           size='sm'
//           icon={<EditIcon />}
//           {...getEditButtonProps({ onClick: handleEditClick })}
//         />
//       </Flex>
//     );
//   }

//   return (
//     <HStack spacing={8} align='center'>
//       {/* <VStack spacing={4} align='center'>
//         {attributes.map((attribute, index) => (
//           <Box key={index}>{attribute}</Box>
//         ))}
//       </VStack> */}
//       {attributes.map((attribute, index) => (
//         <Editable
//           key={index}
//           textAlign='center'
//           defaultValue={attribute}
//           fontSize='2xl'
//           isPreviewFocusable={false}
//           isEditing={editIndex === index}
//           style={{gap:'30px'}}
//         >
//           {(props) => (
//             <>
//               {props.isEditing ? null : (
//                 <EditablePreview as={SlideFade} in={!props.isEditing}>
//                   <Box fontSize='2xl'>{props.value}hiii</Box>
//                 </EditablePreview>
//               )}
//               <Input as={EditableInput} size="lg" variant="filled" colorScheme="facebook"/>
//               <EditableControls index={index} isEditing={props.isEditing} />
//             </>
//           )}
//         </Editable>
//       ))}
//       {/* <VStack spacing={4} align='center'>
//         {attributes.map((attribute, index) => (
//           <Box key={index}>{attribute}</Box>
//         ))}
//       </VStack> */}
//     </HStack>
//   );
// }

// // export default CustomControlsExample;

// export default CustomControlsExample;


// import React, { Component } from 'react';
// import EasyEdit from 'react-easy-edit';
// import { EditIcon } from '@chakra-ui/icons';
// function App() {

//   const save = (value) => {alert(value)}
//   const cancel = () => {alert("Cancelled")}

//   return (
//     <>
//         <EasyEdit
//             type="text"
//             onSave={() => {}}
//             // editComponent={<CustomInput />}
//             // displayComponent={<CustomDisplay />}
//             value="heiii"
//             saveButtonLabel="Save"
//             cancelButtonLabel="cancel"
//             editButtonStyle={<EditIcon/>}
//             style={{height:'100px'}}
//         />
//     </>
//   );
// }

// export default App;


// import React, { useState } from 'react';

// import { token } from '@atlaskit/tokens';

// import { InlineEditableTextfield } from '@atlaskit/inline-edit';
// import "./pde.css";
// const InlineEditableTextfieldCompactExample = () => {
//   const [editValue, setEditValue] = useState('');

//   return (
//     <div
//         style={{
//             display: 'flex',
//             alignItems: 'center',
//             padding: `${token('space.100', '8px')} ${token(
//             'space.100',
//             '8px',
//             )} ${token('space.600', '48px')}`,
//             width: '100%',
//             marginLeft: '30%',
//             fontSize: '30px',
//             marginBottom: '10%',
//             // height:'70vh'
//         }}
//         >
//         <div style={{ marginRight: '16px' }}>Name:</div>
//         <InlineEditableTextfield
//             testId="editable-text-field"
//             class="edita"
//             defaultValue={editValue}
//             label=""
//             onConfirm={(value) => setEditValue(value)}
//             placeholder="Enter your team name"
//             style={{ }}
//             isCompact
//         />
//     </div>
//   );
// };

// export default InlineEditableTextfieldCompactExample;


import React, { useState } from 'react';
import EdiText from 'react-editext';

function Example(props) {
  const [value, setValue] = useState('ABCDEF');

  const handleSave = (val) => {
    console.log('Edited Value -> ', val);
    setValue(val);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center',justifyContent:'center' }}>
      <div style={{ fontSize: '30px' }}>Name:&nbsp;&nbsp;</div>
      <div className="container" style={{ fontSize: '30px' }}>
        <EdiText type="text" value={value} onSave={handleSave} />
      </div>
    </div>
  );
}

export default Example;