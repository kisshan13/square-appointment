import { z } from "zod"

export const userCreateSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
    name: z.string().min(3),
})

export const userAuthSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8)
})

export const userAddressSchema = z.object({
    address_line_1: z.string().min(3),
    address_line_2: z.string().min(3).optional(),
    locality: z.string().min(3),
    postal_code: z.string().min(5),
})

export const categoryAddSchema = z.object({
    category: z.string().array()
})

export const categoryEditSchema = z.object({
    category: z.string().array(),
    id: z.string()
})

export const createCheckoutLinkSchema = z.object({
    productId: z.string(),
    customerId: z.string(),
    modifiers: z.array(z.object({
        modifierId: z.string(),
        modifierValue: z.string(),
    }))
})