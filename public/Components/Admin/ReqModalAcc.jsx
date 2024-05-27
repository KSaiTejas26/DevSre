import React from 'react'
import {
  ModalContent,
  ModalActions,
  Button,
  Header,
  Icon,
  Modal,
} from 'semantic-ui-react'
import DoneAllIcon from '@mui/icons-material/DoneAll';

function ModalExampleBasic() {
  const [open, setOpen] = React.useState(false)

  return (
    <Modal
      basic
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      size='small'
      trigger={<Button Button basic color='green'>Accept</Button>}
    >
      <Header icon>
        {/* <Icon name='archive' /> */}
        <DoneAllIcon fontSize='large'/>
        Accept Request?
      </Header>
      <ModalContent>
        <p>
          Would you like to accept the request of the new vendor?
        </p>
      </ModalContent>
      <ModalActions>
        <Button basic color='red' inverted onClick={() => setOpen(false)}>
          <Icon name='remove' /> No
        </Button>
        <Button color='green' inverted onClick={() => setOpen(false)}>
          <Icon name='checkmark' /> Yes
        </Button>
      </ModalActions>
    </Modal>
  )
}

export default ModalExampleBasic
