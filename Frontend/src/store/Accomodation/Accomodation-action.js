// import { accomodationActions } from "./Accomodation-slice";
// import { axiosInstance } from "../../utils/axios";

// export const createAccomodation = (accomodationData) => async (dispatch) => {
//     try {
//         dispatch(accomodationActions.getAccomodationRequest())
//         const response = await axiosInstance.post("/v1/rent/user/newAccomodation", accomodationData);
        
//         if (!response) {
//             throw new Error("Could not get any accomodation");
//         }
        
//         // Success dispatch would typically go here, e.g., dispatch(accomodationActions.getAccomodation(response.data))
        
//     } catch (error) {
//         // Use optional chaining for safer error access
//         dispatch(accomodationActions.getErrors(error.response?.data?.message || error.message));
//     }
// };

// export const getAllAccomodation = () => async (dispatch) => {
//     try {
//         dispatch(accomodationActions.getAccomodationRequest());

//         // Destructure 'data' property from the Axios response
//         const { data } = await axiosInstance.get("/v1/rent/user/myAccomodation");
        
//         // Assuming the actual array of accommodations is nested under data.data 
//         const accom = data.data; 
        
//         dispatch(accomodationActions.getAccomodation(accom));

//     } catch (error) {
//         // Use optional chaining for safer error access
//         dispatch(accomodationActions.getErrors(error.response?.data?.message || error.message));
//     }
// };



import { accomodationActions } from "./Accomodation-slice";
import { axiosInstance } from "../../utils/axios";

export const createAccomodation = (accomodationData) => async (dispatch) => {
    try {
        dispatch(accomodationActions.getAccomodationRequest());
        
        // This line was previously crashing if axiosInstance was undefined due to bad import
        // const response = await axiosInstance.post("/v1/rent/user/newAccomodation", accomodationData);
        const response = await axiosInstance.post("/v1/rent/user/newAccommodation", accomodationData);
        
        if (!response) {
            throw new Error("Could not get any accomodation");
        }
        
        // Success dispatch (assuming you want to dispatch the new accommodation data)
        dispatch(accomodationActions.getAccomodation(response.data)); 
        
    } catch (error) {
        // Use optional chaining for safer error access
        dispatch(accomodationActions.getErrors(error.response?.data?.message || error.message));
    }
};

export const getAllAccomodation = () => async (dispatch) => {
    try {
        dispatch(accomodationActions.getAccomodationRequest());
        //error is here first one
        // const { data } = await axiosInstance.get("/v1/rent/user/myAccomodation");
        const { data } = await axiosInstance.get("/v1/rent/user/myAccommodation");
        
        const accom = data.data; 
        
        dispatch(accomodationActions.getAccomodation(accom));

    } catch (error) {
        dispatch(accomodationActions.getErrors(error.response?.data?.message || error.message));
    }
};