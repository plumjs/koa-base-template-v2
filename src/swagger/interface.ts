import { AnySchema } from '@hapi/joi'

interface ISchemaOptions<T = AnySchema> {
    schema: T
    name?: string
    description?: string
    required?: boolean
}

interface ISwaggerRequestSchema {
    body?: AnySchema
    query?: AnySchema
    params?: AnySchema
    headers?: AnySchema
}
interface ISwaggerOptions {
    request?: ISwaggerRequestSchema
    response?: Record<string, ISchemaOptions>
    description?: string
    summary?: string
    tags?: string[]
    consumes?: string[]
    produces?: string[]
    security?: string
    deprecated?: boolean
}

export { ISwaggerOptions }
