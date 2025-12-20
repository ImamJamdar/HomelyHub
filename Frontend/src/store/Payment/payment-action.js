import { paymentActions } from "./payment-slice";
import { axiosInstance } from "../../utils/axios";

// 1. checkout session creator
export const initiateCheckoutSession = (paymentData) => async (dispatch) => {
    try {
        dispatch(paymentActions.getCheckoutRequests());
        
        const response = await axiosInstance.post("/v1/rent/user/booking/create-order", paymentData);
        
        if (!response) {
            throw new Error("Failed to initiate checkout session");
        }
        
        // Dispatch only the data part of the Axios response
        dispatch(paymentActions.getCheckoutSuccess(response.data)); 
        
    } catch (error) {
        // Use optional chaining for safe access to error message
        dispatch(paymentActions.getErrors(error.response?.data?.message || error.message));
    }
};

// 2. Payment Verifier
export const verifyPayment = (verifyData) => async (dispatch) => {
    try {
        dispatch(paymentActions.getVerifyRequest());

        const response = await axiosInstance.post("/v1/rent/user/booking/verify-payment", verifyData);
        
        if (!response) {
            throw new Error("Failed to verify payment");
        }
        
        // Dispatch only the data part of the Axios response
        dispatch(paymentActions.getVerifySuccess(response.data)); 
        
    } catch (error) {
        // Use optional chaining for safe access to error message
        dispatch(paymentActions.getErrors(error.response?.data?.message || error.message));
    }
};