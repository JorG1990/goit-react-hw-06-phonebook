
import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsSlice";
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistStore } from "redux-persist";


export const store = configureStore ({
  reducer: {
    contacts: contactsReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: {
      ignoreActions: [ FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE,REGISTER],
    },
  }),
});

export const persistor = persistStore(store);
