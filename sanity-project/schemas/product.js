// schemas/pet.js
export default {
    name: 'product',
    type: 'document',
    title: 'Product Details',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name'
      },
      {
        name: 'short_description',
        type: 'string',
        title: 'Short Description'
      },
      {
        title: 'Full Description', 
        name: 'full_description',
        type: 'array', 
        of: [{type: 'block'}]
      },
      {
        name: 'price',
        type: 'number',
        title: 'Price'
      },
      {
        name: 'product_pictures',
        type: 'array',
        title: 'Product Pictures',
        of: [{type: 'image'}]
      },
      
      
       
    ]
  }