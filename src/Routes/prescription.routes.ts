import express from 'express'
import { prescriptionControllers } from '../Controllers/prescription.controller'
const prescriptionRoutes = express.Router()
prescriptionRoutes.post('/', prescriptionControllers.createPrescription)
prescriptionRoutes.get(
  '/:prescriptionId',
  prescriptionControllers.getPrescription,
)
prescriptionRoutes.delete(
  '/:prescriptionId',
  prescriptionControllers.deletePrescription,
)
prescriptionRoutes.patch(
  '/:prescriptionId',
  prescriptionControllers.addMedicine,
)
export default prescriptionRoutes