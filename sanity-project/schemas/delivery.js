export default {
    name: 'delivery',
    type: 'document',
    title: 'Delivery',
    fields: [
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
  