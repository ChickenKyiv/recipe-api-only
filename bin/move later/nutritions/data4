const mongoose = require('mongoose');

const NutrientSchema = require('./nutrientSchema.js');

const TotalNutrientSchema = new mongoose.Schema({
  ENERC_KCAL: NutrientSchema,
  FASAT: NutrientSchema,
  CHOCDF: NutrientSchema,
  FIBTG: NutrientSchema,
  PROCNT: NutrientSchema,
  FE: NutrientSchema,
  ZN: NutrientSchema,
  P: NutrientSchema,
  VITA_RAE: NutrientSchema,
  VITC: NutrientSchema,
  THIA: NutrientSchema,
  RIBF: NutrientSchema,
  NIA: NutrientSchema,
  VITB6A: NutrientSchema,
  FOL: NutrientSchema,
  TOCPHA: NutrientSchema,
  VITK1: NutrientSchema,
});

module.exports = TotalNutrientSchema;

--
const mongoose = require('mongoose');

const NutrientSchema = new mongoose.Schema({
  label: String,
  tag: String,
  schemaOrgTag: String,
  total: Number,
  hasRDI: Boolean,
  daily: Number,
  unit: String,
});

NutrientSchema.add({
  sub: { type: [NutrientSchema], required: false },
});

module.exports = NutrientSchema;
