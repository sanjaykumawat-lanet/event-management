<<<<<<< HEAD
import axios from "axios";
export const ADD_EVENT = "ADDEVENT";
export const ALL_EVENTS = "ALLEVENTS";
export const EVENT_IMAGE_UPLOAD = "EVENTIMAGEUPLOAD";
export const addEvent = (organiserId, data) => {
  return async (dispatch) => {
    try {
      let resp, uploadresp;
      if (data.file) {
        const form = new FormData();
        form.append("file", data.file);

        resp = await axios.post("http://localhost:3000/event/add", data);
        console.log("add response", resp);
        uploadresp = await axios.post(
          "http://localhost:3000/event/upload",
          form,
          {
            headers: {
              "Content-Type": `multipart/form-data; boundary=${form._boundary}`,
            },
            params: {
              event_id: resp.data.event._id,
            },
          }
        );
      } else {
        try {
          resp = await axios.post("http://localhost:3000/event/add", data);
        } catch (error) {
          if (error.response.data) {
            console.log("Error of add", error.response.data);
          }
        }
      }
      if (resp.status === 201) {
        dispatch({
          type: ADD_EVENT,
          payload: resp.data,
        });
        if (uploadresp) {
          dispatch({
            type: EVENT_IMAGE_UPLOAD,
            payload: {
              display_image: uploadresp.data,
              event_id: resp.data.event._id,
            },
          });
        }
      }
    } catch (error) {
      console.log("error", error);
    }
  };
};

export const getAllEvents = () => {
  return async (dispatch) => {
    try {
      const resp = await axios.get("http://localhost:3000/event/all");
      dispatch({
        type: ALL_EVENTS,
        payload: resp.data,
      });
    } catch (error) {
      console.log("error", error);
    }
  };
};
=======
import axios from "axios";
export const ADD_EVENT = "ADDEVENT";
export const ALL_EVENTS = "ALLEVENTS";
export const EVENT_IMAGE_UPLOAD = "EVENTIMAGEUPLOAD";
export const addEvent = (organiserId, data) => {
  return async (dispatch) => {
    try {
      let resp, uploadresp;
      if (data.file) {
        const form = new FormData();
        form.append("file", data.file);

        resp = await axios.post("http://localhost:3000/event/add", data);
        console.log("add response", resp);
        uploadresp = await axios.post(
          "http://localhost:3000/event/upload",
          form,
          {
            headers: {
              "Content-Type": `multipart/form-data; boundary=${form._boundary}`,
            },
            params: {
              event_id: resp.data.event._id,
            },
          }
        );
      } else {
        try {
          resp = await axios.post("http://localhost:3000/event/add", data);
        } catch (error) {
          if (error.response.data) {
            console.log("Error of add", error.response.data);
          }
        }
      }
      if (resp.status === 201) {
        dispatch({
          type: ADD_EVENT,
          payload: resp.data,
        });
        if (uploadresp) {
          dispatch({
            type: EVENT_IMAGE_UPLOAD,
            payload: {
              display_image: uploadresp.data,
              event_id: resp.data.event._id,
            },
          });
        }
      }
    } catch (error) {
      console.log("error", error);
    }
  };
};

export const getAllEvents = () => {
  return async (dispatch) => {
    try {
      const resp = await axios.get("http://localhost:3000/event/all");
      dispatch({
        type: ALL_EVENTS,
        payload: resp.data,
      });
    } catch (error) {
      console.log("error", error);
    }
  };
};
>>>>>>> 9e410e71bb6bd7218c31ebe9599ac780cad34a92
