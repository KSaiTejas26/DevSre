import React, { useContext, useEffect, useRef, useState } from 'react';
import {
  MDBAccordion,
  MDBAccordionItem,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardFooter,
  MDBCardHeader,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBListGroup,
  MDBListGroupItem,
  MDBRow,
  MDBTypography
} from 'mdb-react-ui-kit';
import Navbar from './Navbar';
import prodcontext from './Context/ProductContext';

export default function Advanced() {
  const context = useContext(prodcontext);
  const { cart } = context;
  const formRef = useRef(null);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFixed(!entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0,
        rootMargin: '0px 0px -100% 0px'
      }
    );

    if (formRef.current) {
      observer.observe(formRef.current);
    }

    return () => {
      if (formRef.current) {
        observer.unobserve(formRef.current);
      }
    };
  }, []);

  const inputStyle = { marginBottom: '0.5rem', marginTop: '0.5rem' };

  return (
    <>
      <div className="mb-10"><Navbar /></div>
      <MDBContainer className="my-5 py-5" style={{ maxWidth: '1100px' }}>
        <section>
          <MDBRow>
            <MDBCol md="8">
              <div ref={formRef}>
                <MDBAccordion className="card mb-4">
                  <MDBAccordionItem collapseId={1} className="border-0" headerTitle='Promo/Student Code or Vouchers'>
                    <MDBInput label='Enter code' type='text' style={inputStyle} floating />
                  </MDBAccordionItem>
                </MDBAccordion>

                <MDBCard className="mb-4">
                  <MDBCardHeader className="py-3">
                    <MDBTypography tag="h5" className="mb-0 text-font text-uppercase">Delivery address</MDBTypography>
                  </MDBCardHeader>
                  <MDBCardBody>
                    <form>
                      <MDBRow className="mb-4">
                        <MDBCol>
                          <MDBInput label='First name' type='text' style={inputStyle} floating />
                        </MDBCol>
                        <MDBCol>
                          <MDBInput label='Last name' type='text' style={inputStyle} floating />
                        </MDBCol>
                      </MDBRow>

                      <MDBInput label='Company name' type='text' className="mb-4" style={inputStyle} floating />
                      <MDBInput label='Address' type='text' className="mb-4" style={inputStyle} floating />
                      <MDBInput label='Email' type='text' className="mb-4" style={inputStyle} floating />
                      <MDBInput label='Phone' type='text' className="mb-4" style={inputStyle} floating />
                    </form>
                  </MDBCardBody>
                </MDBCard>

                <div className="text-center">
                  <MDBBtn className="button-order col-md-10">Place order</MDBBtn>
                </div>
              </div>
            </MDBCol>

            <MDBCol md="4" className="mb-4" style={{ marginLeft: 'auto' }}>
              {cart.map((prod, index) => (
                <MDBCard key={index} className="mb-4">
                  <MDBCardHeader className="py-3">
                    <MDBTypography tag="h5" className="mb-0 text-font">
                      1 item <span className="float-end mt-1" style={{ fontSize: '13px' }}>Edit</span>
                    </MDBTypography>
                  </MDBCardHeader>
                  <MDBCardBody>
                    <MDBRow>
                      <MDBCol md="4">
                        <MDBCardImage
                          src={prod.image}
                          className="rounded-3"
                          style={{ width: '100px' }}
                          alt={prod.product_name}
                        />
                      </MDBCol>
                      <MDBCol md="6" className="ms-3">
                        <span className="mb-0 text-price">${prod.price}</span>
                        <p className="mb-0 text-descriptions">{prod.product_name.substring(0, 10) + "..."}</p>
                        <span className="text-descriptions fw-bold">{prod.brand}</span> <span className="text-descriptions fw-bold">UK 8</span>
                        <p className="text-descriptions mt-0">
                          Qty:<span className="text-descriptions fw-bold">1</span>
                        </p>
                      </MDBCol>
                    </MDBRow>
                  </MDBCardBody>
                  <MDBCardFooter className="mt-4">
                    <MDBListGroup flush>
                      <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 pb-0 text-muted">
                        Subtotal
                        <span>${prod.price}</span>
                      </MDBListGroupItem>
                      <MDBListGroupItem className="d-flex justify-content-between align-items-center px-0 fw-bold text-uppercase">
                        Total to pay
                        <span>$35.00</span>
                      </MDBListGroupItem>
                    </MDBListGroup>
                  </MDBCardFooter>
                </MDBCard>
              ))}
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      <style jsx>{`
        .fixed-form {
          position: fixed;
          top: 100px;
          left: 15px;
          width: calc(66.6667% - 30px);
        }
      `}</style>
    </>
  );
}
