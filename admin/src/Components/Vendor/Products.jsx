import React from "react";
import Header from "./Header";
import MVendor from "./MProduct";
import Search from "./SearchVendor";
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
// import DropDown from "./DropDown";
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

const Products = () => {
  const [state, dispatch] = React.useReducer(exampleReducer, {
    open: false,
    dimmer: undefined,
  });
  const { open, dimmer } = state;
  return (
    <>
      <Header />
      <div style={{ margin:"1%", display: "flex", justifyContent: "flex-start", alignItems: "center" }} >
      <div style={{marginLeft:"47%"}}>
        <h1 style={{ marginTop:'1%' }}>PRODUCTS</h1>
      </div>
      <div style={{marginLeft:"12%"}}>
        <Button
          onClick={() => dispatch({ type: "OPEN_MODAL", dimmer: "blurring" })}
          size="huge"
          style={{}}
          >
          <Icon name="pencil alternate" />
          Add Product
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
          <ModalHeader>Add New Product</ModalHeader>
          <ModalContent>
            <Form>
              <FormField>
                <label>Product Name</label>
                <input placeholder="Name" />
              </FormField>
              <FormField>
                <label>Product Description</label>
                <input placeholder="Name" />
              </FormField>
              {/* <FormField>
                <label>Vendor</label>
                <DropDown/>
              </FormField> */}
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

export default Products;