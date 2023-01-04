import { buildClient } from '@datocms/cma-client-node'

export default async function handler (request, response) {
  /*
  const client = buildClient({ apiToken: process.env.DATOCMS_API_KEY })

  // extract limit and offsets
  let limit = 10, offset = 0

  if (request.query.limit && !Number.isNaN(request.query.limit))
    limit = Number.parseInt(request.query.limit)

  if (request.query.offset && !Number.isNaN(request.query.offset))
    offset = Number.parseInt(request.query.offset)

  const records = await client.items.list({
    page: { offset, limit },
  })*/

  return response.json({ records: [] })
}
