import { createStore } from 'redux';

const initialState = {
  formData: {
    id: '',
    fullName: '',
    address: '',
    dob: '',
    email: '',
    phone: '',
    gender: '',
    houseName: '',
    landmark: '',
    pinCode: '',
    district: '',
    state: '',
    imageUrl: '',
    service: '',
    status: '',
    date: '',
  },
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_FORM':
      console.log('Updating form with:', action.payload);
      return {
        ...state,
        formData: {
          ...state.formData,
          ...action.payload,
        },
      };
    case 'SET_IMAGE_URL':
      return {
        ...state,
        formData: {
          ...state.formData,
          imageUrl: action.payload,
        },
      };
    default:
      return state;
  }
};

const store = createStore(formReducer);

export default store;
