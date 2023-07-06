import { Router } from 'express'
import { createProduct, deleteProduct, getProduct, updateProduct } from '../controllers/product.controller'
import { requireAdmin, requireUser } from '../middleware/auth'

export const ProductRouter: Router = Router()

ProductRouter.get('/', requireUser || requireAdmin, getProduct)
ProductRouter.get('/:id', requireUser || requireAdmin, getProduct)
ProductRouter.post('/', requireAdmin, createProduct)
ProductRouter.put('/:id', requireAdmin, updateProduct)
ProductRouter.delete('/:id', requireAdmin, deleteProduct)
