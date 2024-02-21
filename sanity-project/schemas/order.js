import platformData from "./platformData"
// import WilayaPreview from "./WilayaPreview.jsx"
//schemas/order.js
export default {
  name: 'order',
  type: 'document',
  title: 'Order',
  fields: [
    {
      name: 'address',
      type: 'string',
      title: 'Address',
    //   readOnly: true
    },
    {
      name: 'product',
      type: 'reference',
      title: 'Product',
      to: [{type: 'product'}],
    //   readOnly: true
    },
    {
      name: 'wilaya',
      type: 'reference',
      title: 'Wilaya',
      to: [{type: 'platform_data', filter: '_type' == "delivery_p   rice"}],
    //   readOnly: true,
    preview: {
        select: {
          delivery_price: 'delivery_price', // Select the delivery_price field
        },
        // component: WilayaPreview, // Custom input component to display the delivery_price field
    },
    {
      name: 'phone_number',
      type: 'number',
      title: 'Phone Number',
    //   readOnly: true
    },
    {
      name: 'quantity',
      type: 'number',
      title: 'Quantity',
    //   readOnly: true
    },
    {
      name: 'full_name',
      type: 'string',
      title: 'Full Name',
    //   readOnly: true
    },
    
  ],
}
