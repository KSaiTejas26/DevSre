import React from 'react'
import {
  ModalContent,
  ModalActions,
  Button,
  Header,
  Icon,
  Modal,
} from 'semantic-ui-react'
function ModalExampleBasic() {
  const [open, setOpen] = React.useState(false)

  return (
    <Modal
      basic
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      size='small'
      trigger={<Button basic color='red'>Reject</Button>}
    >
      <Header icon>
        <Icon name='archive' />
        Rejecting Request?
      </Header>
      <ModalContent>
        <p>
          Are you sure you want to reject this vendor?
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
