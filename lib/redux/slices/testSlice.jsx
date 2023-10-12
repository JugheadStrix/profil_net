import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const testSlice = createSlice({
  name: "test",
  initialState: { name: "Test Doe", phoneNumber: "+261 32 75 884 65" },
  reducers: {
    updateInfos: (state, action) => {
      const { newName, newPhoneNumber } = action.payload;
      const newState = { ...state };
      if (newName) {
        newState.name = newName;
      }
      if (newPhoneNumber) {
        newState.phoneNumber = newPhoneNumber;
      }
      return newState;
    },
  },
});
export const { updateInfos } = testSlice.actions;
export default testSlice.reducer;

// export const updateBackendInfos = createAsyncThunk(
//   "votreSlice/updateBackendInfos",
//   async (data, { dispatch }) => {
//     try {
//       const response = await fetch("/votre-endpoint-backend", {
//         method: "PUT",
//         body: JSON.stringify(data),
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });

//       if (response.ok) {
//         // La mise à jour côté backend a réussi
//         // Vous pouvez mettre à jour votre état Redux ici si nécessaire
//       } else {
//         // La mise à jour côté backend a échoué, vous pouvez gérer les erreurs ici
//       }
//     } catch (error) {
//       // Gérez les erreurs liées à la requête ici
//     }
//   }
// );

// // Ensuite, dans votre slice, vous pouvez utiliser cette action asynchrone pour mettre à jour le backend en même temps que l'état
// const votreSlice = createSlice({
//   name: "votreSlice",
//   initialState: {},
//   reducers: {
//     // Vos actions synchrones
//     updateInfos: (state, action) => {
//       // Mettez à jour l'état local
//       // ...
//     },
//   },
//   extraReducers: (builder) => {
//     builder.addCase(updateBackendInfos.fulfilled, (state, action) => {
//       // La mise à jour côté backend a réussi, vous pouvez mettre à jour l'état Redux ici si nécessaire
//       // ...
//     });
//   },
// });

// export { updateBackendInfos };
