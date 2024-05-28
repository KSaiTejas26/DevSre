import React from "react";
import Header from "./Header";
import MVendor from "./MVendor";
import {
  ModalHeader,
  ModalContent,
  ModalActions,
  Button,
  Modal,
  FormField,
  Checkbox,
  Form,
  Icon,
} from "semantic-ui-react";
import MediaQuery from "react-responsive";
import Search from "./SearchVendor";
function exampleReducer(state, action) {
  switch (action.type) {
    case "OPEN_MODAL":
      return { open: true, dimmer: action.dimmer };
    case "CLOSE_MODAL":
      return { open: false };
    default:
      throw new Error();
  }
}

const Vendors = () => {
  const [state, dispatch] = React.useReducer(exampleReducer, {
    open: false,
    dimmer: undefined,
  });
  const { open, dimmer } = state;
  return (
    <>
      <Header />
      <div style={{ margin:"1%", display: "flex", justifyContent: "flex-start", alignItems: "center" }} className="dhb">
        <div style={{marginLeft:"47%"}} className="head">
          <h1 style={{ marginTop:'1%' }}>VENDORS</h1>
        </div>
        <div style={{marginLeft:"12%"}} className="but">
          <Button
            onClick={() => dispatch({ type: "OPEN_MODAL", dimmer: "blurring" })}
            size="huge"
            style={{}}
          >
            <Icon name="pencil alternate" />
            Add Vendor
          </Button>
        </div>
      </div>
      <Search/>
      <div>
        <Modal
          dimmer={dimmer}
          open={open}
          onClose={() => dispatch({ type: "CLOSE_MODAL" })}
        >
          <ModalHeader>Add New Vendor</ModalHeader>
          <ModalContent>
            <Form>
              <FormField>
                <label>Email</label>
                <input type="email" placeholder="Email" />
              </FormField>
              <FormField>
                <label>Password</label>
                <input type="password" placeholder="Password" />
              </FormField>
            </Form>
          </ModalContent>
          <ModalActions>
            {/* <Button negative onClick={() => dispatch({ type: 'CLOSE_MODAL' })}>
                Add
            </Button> */}
            <Button positive onClick={() => dispatch({ type: "CLOSE_MODAL" })}>
              Add
            </Button>
          </ModalActions>
        </Modal>
      </div>
      
      <MVendor />
    </>
  );
};

export default Vendors;