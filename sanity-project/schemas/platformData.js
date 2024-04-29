export default {
  name: 'platform_data',
  type: 'document',
  title: 'Platform Data',
  fields: [
    {
      name: 'phone',
      type: 'number',
      title: 'Phone Number',
    },
    {
      name: 'delivery_name',
      type: 'reference',
      title: 'delivery_name',
      to: [{type: 'delivery'}]
    },
    {
      name: 'primary_color',
      type: 'string',
      title: 'Primary Color',
    },
    {
      name: 'adds',
      type: 'array',
      title: 'Adds',
      of: [
        {
          name: 'add_img',
          type: 'image',
          title: 'Add Image',
        },
      ],
    },
    {
      name: 'delivery_price',
      type: 'array',
      title: 'Delivery Price',
      of: [
        {
          name: 'full_address',
          title: 'Full Address',
          type: 'object',
          fields: [
            {name: 'wilaya', type: 'string', title: 'Wilaya'},
            {name: 'to_home', type: 'number', title: 'To Home'},
            {name: 'to_desk', type: 'number', title: 'To Desk'},
          ],
        },
      ],
    },
  ],
}
