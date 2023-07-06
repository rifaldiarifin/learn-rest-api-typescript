import { type Request, type Response } from 'express'
import { createProductValidation, updateProductValidation } from '../validation/product.validation'
import { logger } from '../utils/logger'
import {
  addProductToDB,
  deleteProductByID,
  getProductByID,
  getProductFromDB,
  updateProductByID
} from '../services/product.service'
import { v4 as uuidv4 } from 'uuid'

export const getProduct = async (req: Request, res: Response) => {
  const { id } = req.params

  if (id) {
    const dataProduct: any = await getProductByID(id)
    if (dataProduct) {
      logger.info('Success Get Product Data')
      return res.status(200).send({ status: true, statusCode: 200, data: dataProduct })
    } else {
      logger.error('Data not found')
      return res.status(404).send({ status: false, statusCode: 404, message: 'Data not found', data: {} })
    }
  } else {
    const dataProduct: any = await getProductFromDB()
    logger.info('Success Get All Product Data')
    res.status(200).send({ status: true, statusCode: 200, data: dataProduct })
  }
}

export const createProduct = async (req: Request, res: Response) => {
  req.body.product_id = uuidv4()
  const { error, value } = createProductValidation(req.body)

  if (error) {
    logger.error('ERR: product - create = ', error.details[0].message)
    return res.status(422).send({ status: false, statusCode: 422, message: error.details[0].message })
  }

  try {
    await addProductToDB(value)
    logger.info('Success add new product')
    res.status(201).send({ status: true, statusCode: 201, message: 'Success add new product' })
  } catch (error: any) {
    logger.error('ERR: product - create = ', error.message)
    return res.status(422).send({ status: false, statusCode: 422, message: error.message })
  }
}

export const updateProduct = async (req: Request, res: Response) => {
  const { id } = req.params

  const { error, value } = updateProductValidation(req.body)

  if (error) {
    logger.error('ERR: product - create = ', error.details[0].message)
    return res.status(422).send({ status: false, statusCode: 422, message: error.details[0].message })
  }

  try {
    const result = await updateProductByID(id, value)

    if (result) {
      logger.info('Success update product')
      return res.status(200).send({ status: true, statusCode: 201, message: 'Success update product' })
    } else {
      logger.info('Data not found')
      return res.status(404).send({ status: false, statusCode: 404, message: 'Data not found' })
    }
  } catch (error: any) {
    logger.error('ERR: product - create = ', error.message)
    return res.status(422).send({ status: false, statusCode: 422, message: error.message })
  }
}

export const deleteProduct = async (req: Request, res: Response) => {
  const { id } = req.params

  try {
    const result = await deleteProductByID(id)

    if (result) {
      logger.info('Success delete product')
      return res.status(200).send({ status: true, statusCode: 200, message: 'Delete product success' })
    } else {
      logger.info('Data not found')
      return res.status(404).send({ status: false, statusCode: 404, message: 'Data not found' })
    }
  } catch (error: any) {
    logger.error('ERR: product - delete = ', error.message)
    return res.status(422).send({ status: false, statusCode: 422, message: error.message })
  }
}
