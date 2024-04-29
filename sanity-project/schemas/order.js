import platformData from "./platformData"
export default {
  name: 'order',
  type: 'document',
  title: 'Order',
  fields: [
    {
      name: 'address',
      type: 'string',
      title: 'Address',
      readOnly: true
    },
    {
      name: 'product',
      type: 'reference',
      title: 'Product',
      to: [{type: 'product'}],
      readOnly: true
    },
    {
        name: 'delivery',
        type: 'object',
        title: 'Delivery',
        fields: [
            {name: 'location', type: 'string', title: 'Location'},
            {name: 'price', type: 'number', title: 'Price'},
        ], 
        readOnly: true
           
    },
    {
      name: 'phone_number',
      type: 'number',
      title: 'Phone Number',
      readOnly: true
    },
    {
      name: 'quantity',
      type: 'number',
      title: 'Quantity',
      readOnly: true
    },
    {
      name: 'full_name',
      type: 'string',
      title: 'Full Name',
      readOnly: true
    },
    {
      name: 'wilaya',
      type: 'string',
      title: 'Wilaya',
      readOnly: true
    },
    
  ],
}
