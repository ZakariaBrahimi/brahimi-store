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
        name: 'old_price',
        type: 'number',
        title: 'Old Price'
      },
      {
        name: 'new_price',
        type: 'number',
        title: 'New Price'
      },
      {
        name: 'product_pictures',
        type: 'array',
        title: 'Product Pictures',
        of: [{type: 'image'}]
      },
      
      
       
    ]
  }