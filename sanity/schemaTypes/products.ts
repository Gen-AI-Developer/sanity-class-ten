import { defineType, defineField } from "sanity";
export const product = {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Enter Product Name", type: "string" }),
    defineField({ name: "price", title: "Price", type: "number" }),
    defineField({ name: "details", title: "Details", type: "string" }),
    defineField({ name: "image", title: "Image", type: "image" }),
    defineField({
      name: "category",
      type: "reference",
      title: "Enter the category",
      to: {
        type: "category",
      },
    }),
  ],
};
