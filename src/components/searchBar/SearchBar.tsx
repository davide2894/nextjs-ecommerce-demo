import { IconButton, TextField } from "@mui/material";
import { redirect } from "next/navigation";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { revalidatePath } from "next/cache";

function SearchBar() {
  async function onSubmit(formData: FormData) {
    "use server";
    const query = formData.get("searchProductsQuery");
    console.log({ query });
    if (query) {
      redirect(`/product-list?query=${query}`);
    } else {
      redirect("/product-list");
    }
  }

  return (
    <form action={onSubmit}>
      <TextField
        size="small"
        variant="outlined"
        name="searchProductsQuery"
        label="Search"
      />
      <IconButton type="submit" aria-label="Search">
        <SearchIcon />
      </IconButton>
    </form>
  );
}

export default SearchBar;
