import { createSlice } from "@reduxjs/toolkit";
import { ProductToAdd } from "@/lib/types";

export const shoppingBagSlice = createSlice({
  name: "shoppingBagSlice",
  initialState: [] as ProductToAdd[],
  reducers: {
    addItemToShoppingBag: (state, action) => {
      state.push({
        id: action.payload,
        quantity: 1,
      });
    },
    increaseItemQtyInShoppingBag: (state, action) => {
      if (getProductInShoppingBag(state, action.payload.id)) {
        console.log("inside shoppingBagSlice --> increaseItemQtyInShoppingBag");
      }
    },
    decreaseItemQtyFromShoppingBag: (state, action) => {
      if (getProductInShoppingBag(state, action.payload.id)) {
        console.log(
          "inside shoppingBagSlice -->decreaseItemQtyFromShoppingBag"
        );
      }
    },
    removeItemFromShoppingBag: (state, action) => {
      if (getProductInShoppingBag(state, action.payload.id)) {
        console.log(
          "inside shoppingBagSlice --> decreaseItemQtyFromShoppingBag"
        );
      }
    },
  },
});

function getProductInShoppingBag(state: any, payloadProductId: number) {
  return state.productsInShoppingBag.find(
    (product: { id: any }) => product.id === payloadProductId
  );
}

export const { addItemToShoppingBag } = shoppingBagSlice.actions;
export default shoppingBagSlice.reducer;
