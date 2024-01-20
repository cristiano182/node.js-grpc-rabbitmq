export const CreateRegisterSchema = {
  schema: {
    body: {
      type: 'object',
      properties: {
        start: { type: 'string' },
        end: { type: 'string' },
      },
      required: [],
    },
  },
}
