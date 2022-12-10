import { configureStore } from "@reduxjs/toolkit";
import reducer from "./Redux/reducer";

export default configureStore({
  reducer: reducer,
  devTools: window.devToolsExtension ? window.devToolsExtension() : function (f) {
    return f;
}
});
