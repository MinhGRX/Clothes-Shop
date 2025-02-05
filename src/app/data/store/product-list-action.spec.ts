import {
    ViewProduct,
    PickColor,
    PickSize,
    AddReview,
    VIEW_PRODUCT,
    PICK_COLOR,
    PICK_SIZE,
    ADD_REVIEW
  } from './product-list.actions';
  
  describe('ProductListActions', () => {
  
    describe('ViewProduct', () => {
      it('should create an action', () => {
        const payload = 0;
        const action = new ViewProduct(payload);
        expect({ ...action }).toEqual({ type: VIEW_PRODUCT, payload });
      });
    });
  
    describe('PickColor', () => {
      it('should create an action', () => {
        const payload = 'blue';
        const action = new PickColor(payload);
        expect({ ...action }).toEqual({ type: PICK_COLOR, payload });
      });
    });
  
    describe('PickSize', () => {
      it('should create an action', () => {
        const payload = 'S';
        const action = new PickSize(payload);
        expect({ ...action }).toEqual({ type: PICK_SIZE, payload });
      });
    });
  
    describe('AddReview', () => {
      it('should create an action', () => {
        const payload = { name: 'Bob', content: 'Lorem ipsum' };
        const action = new AddReview(payload);
        expect({ ...action }).toEqual({ type: ADD_REVIEW, payload });
      });
    });
  
  });