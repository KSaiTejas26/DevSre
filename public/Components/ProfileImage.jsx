import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import {
  EditablePreview,
  Box,
  useColorModeValue,
  IconButton,
  Input,
  useDisclosure,
  useEditableControls,
  ButtonGroup,
  SlideFade,
  Editable,
  Tooltip,
  EditableInput,
} from '@chakra-ui/react';
import { CheckIcon, CloseIcon } from '@chakra-ui/icons';

const theme = extendTheme({
  config: {
    useSystemColorMode: false,
    initialColorMode: 'light',
  },
});

export default function App() {
  /* Here's a custom control */
  function EditableControls() {
    const {
      isEditing,
      getSubmitButtonProps,
      getCancelButtonProps,
      getEditButtonProps,
    } = useEditableControls();

    return isEditing ? (
      <ButtonGroup justifyContent='end' size='sm' w='full' spacing={2} mt={2}>
        <IconButton icon={<CheckIcon />} {...getSubmitButtonProps()} />
        <IconButton icon={<CloseIcon boxSize={3} />} {...getCancelButtonProps()} />
      </ButtonGroup>
    ) : null;
  }

  return (
    <ChakraProvider theme={theme}>
      <Editable defaultValue='Rasengan ⚡️' isPreviewFocusable={true} selectAllOnFocus={false}>
        <Tooltip label='Click to edit' shouldWrapChildren={true}>
          <EditablePreview
            py={2}
            px={4}
            _hover={{
              background: useColorModeValue('gray.100', 'gray.700'),
            }}
          />
        </Tooltip>
        <Input py={2} px={4} as={EditableInput} />
        <EditableControls />
      </Editable>
    </ChakraProvider>
  );
}