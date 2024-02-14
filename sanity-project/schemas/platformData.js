// schemas/pet.js
export default {
    name: 'platform_data',
    type: 'document',
    title: 'Platform Data',
    fields: [
      {
        name: 'phone',
        type: 'number',
        title: 'Phone Number'
      },
      {
        name: 'primary_color',
        type: 'text',
        title: 'Primary Color'
      },
    ]
  }