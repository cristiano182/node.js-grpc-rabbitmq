export const ListRegisterSchema = {
  schema: {
    querystring: {
      type: 'object',
      properties: {
        limit: { type: 'number' },
        skip: { type: 'number' },
      },
      required: [],
    },
  },
}
